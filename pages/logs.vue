<template>
  <div class="logs">
    <h1>Encounter Browser</h1>
    <div class="user">
      <div />
      <small v-if="user">( {{ user }} )</small>
    </div>

    <div v-if="user" class="filters">
      <label for="result">Successful Only</label>
      <input id="result" v-model="filters.success" type="checkbox" @change="applyFilters">

      <label for="date-start">Date Start:</label>
      <input id="date-start" v-model="filters.dateStart" type="date" @change="applyFilters">

      <label for="date-end">Date End:</label>
      <input id="date-end" v-model="filters.dateEnd" type="date" @change="applyFilters">
    </div>

    <div v-if="user" class="container">
      <div class="encounter-select">
        <div v-for="(section, key) in bosses" :key="section.id">
          <h2>{{ key }}</h2>
          <div
            v-for="(boss, index) in section"
            :key="index"
            :data-value="boss.ids"
            @click="toggleActive($event)"
          >
            {{ boss.name }}
          </div>
        </div>
      </div>

      <div class="encounter-select--mobile">
        <select name="bosses">
          <option selected>
            Select a boss
          </option>
          <optgroup v-for="(section, key) in bosses" :key="section.id" :label="key">
            <option
              v-for="(boss, index) in section"
              :key="index"
              :data-value="boss.ids"
              @click="toggleActive($event)"
            >
              {{ boss.name }}
            </option>
          </optgroup>
        </select>
      </div>

      <div v-if="detailedEncounters" class="encounter-wrapper">
        <div v-for="encounter in detailedEncounters" :key="encounter.id" class="encounter" :data-value="encounter.triggerID">
          <div class="details">
            <p><span>Date: </span> {{ encounter.timeEnd }}</p>
            <p><span>Duration: </span>{{ encounter.duration }}</p>
            <p v-if="encounter.success === true">
              <span>Result: </span> Success
            </p>
            <p v-else>
              <span>Result: </span> Failure
            </p>
          </div>

          <table>
            <tbody>
              <tr class="legend">
                <th>Account</th>
                <th class="legend__icons" />
                <th>Character</th>
              </tr>
              <tr v-for="player in encounter.players" :key="player.id">
                <td>{{ player.account }}</td>
                <td class="img">
                  <img
                    :src="`https://api.gw2bot.info/resources/professions/${player.profession.toLowerCase()}_icon.png`"
                    :title="player.profession"
                    :alt="player.profession"
                  >
                </td>
                <td>{{ player.name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/config';

.logs {
  text-align: center;
  margin: auto;
  width: 85%;
  background-color: #F5F5F5;
  border-radius: 15px;
  padding: 10px 0;

  h1 {
    color: $secondaryColor;
    margin-bottom: 0;
  }
}

.container {
  display: flex;
}

.filters {
  margin: 20px 0;
  background-color: #f5f5f5;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  input,
  label {
    margin: 0 5px 0 0;
  }
}

.encounter-select {
  width: 25%;
  height: 675px;
  overflow-y: scroll;

  h2 {
    font-size: 20px;
    color: $secondaryColor;
  }

  & > div {
    list-style: none;

    > div {
      height: 40px;
      width: 85%;
      margin: 10px auto;
      border: 1px solid #343a40;
      border-radius: 20px;
      line-height: 40px;
      cursor: pointer;
      transition: 0.2s ease;

      &:hover,
      &.active {
        background-color: #343a40;
        color: white;
      }
    }
  }
}

.encounter-wrapper {
  width: 75%;
  height: 675px;
  overflow-y: scroll;

  small {
    display: block;
    font-size: 14px;
  }

  table {
    width: 75%;
    margin: auto auto 25px;
    border-spacing: 0;
    text-align: left;

    tr {
      height: 40px;

      > th {
        color: #1d1d1d;
      }
    }

    tr.legend {
      margin-top: 25px;
      background-color: #f5f5f5;
      color: #646464;

      :first-child,
      :last-child {
        width: 50%;
      }

      &__icons {
        width: 7%;
      }
    }

    td,
    th {
      padding-left: 20px;
      vertical-align: middle;
      border-bottom: 1px solid $secondaryColor;
    }

    td.img img {
      width: 25px;
      height: 25px;
    }
  }

  span {
    font-weight: bold;
    color: $secondaryColor;
  }

  .encounter {
    display: none;

    &.active {
      display: block;
    }

    .details {
      display: flex;
      justify-content: space-evenly;
      width: 75%;
      margin: auto;
    }
  }
}

.button {
  display: inline-block;
  margin: 10px 0 5px;
  padding: 1.2rem 1.5rem;
  transition: 0.5s;
  background-color: #dc3545;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  color: #fff;

  &:hover {
    transition: 0.5s;
    background-color: #c82333;
  }
}

.encounter-select--mobile {
  display: none;
}

@media (max-width: 768px) {
  .container {
    flex-wrap: wrap;
  }

  .encounter-select {
    display: none;

    &--mobile {
      display: block;
      margin: 0 auto;
    }
  }

  .encounter-wrapper {
    width: 100%;
    height: 400px;
  }
}
</style>

<script>
import bosses from '@/static/bossesData'

export default {
  name: 'LogsPage',
  middleware: 'auth',
  data () {
    return {
      user: null,
      bosses,
      encounters: [],
      detailedEncounters: [],
      filters: {
        success: null,
        dateStart: null,
        dateEnd: null
      }
    }
  },
  async mounted () {
    await this.fetchAccountName(this.$auth.user.id)
    await this.applyFilters()
  },
  updated () {
    const activeBoss = document.querySelector('div.encounter-select .active')

    if (!activeBoss) { return }

    const activeResults = document.querySelectorAll(
      `div.encounter-wrapper [data-value="${activeBoss.getAttribute(
        'data-value'
      )}"]`
    )

    activeResults.forEach((element) => {
      element.classList.add('active')
    })
  },
  methods: {
    async fetchAccountName () {
      try {
        const user = await this.$axios.$get('api/user')
        this.user = user.cogs.GuildWars2.key.account_name
      } catch (err) {
        throw err
      }
    },
    async fetchEncounters (success, dateEnd, dateStart) {
      if (!success) { success = null }
      if (!dateEnd) { dateEnd = null }
      if (!dateStart) { dateStart = null }

      try {
        this.encounters = await this.$axios.$get('api/encounters', {
          params: {
            success,
            dateStart,
            dateEnd
          }
        })
      } catch (err) {
        throw err
      }
    },
    fetchEncountersDetail () {
      try {
        this.detailedEncounters = []
        this.encounters.forEach(async (element) => {
          const encounter = await fetch(
            `https://dps.report/getJson?permalink=${element.permalink}`
          )
          const encounterJson = await encounter.json()
          this.detailedEncounters.push(encounterJson)
        })
      } catch (err) {
        throw err
      }
    },
    async applyFilters () {
      await this.fetchEncounters(this.filters.success, this.filters.dateEnd, this.filters.dateStart)
      await this.fetchEncountersDetail()
    },
    toggleActive (event) {
      const elements = document.querySelectorAll(`[data-value]`)

      event.target.classList.toggle('active')

      elements.forEach((element) => {
        if (
          event.target
            .getAttribute('data-value')
            .includes(element.getAttribute('data-value'))
        ) {
          element.classList.add('active')
        } else {
          element.classList.remove('active')
        }
      })
    }
  }
}
</script>
