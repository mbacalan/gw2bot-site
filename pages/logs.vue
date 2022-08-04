<template>
  <main>
    <div class="page-width page-padding">
      <header>
        <h1>Encounter Browser</h1>
        <p v-if="user">
          Currently viewing encounters of <strong>{{ user }}</strong>
        </p>
        <p v-else>
          Loading User... <LoadingInlineSVG />
        </p>
      </header>

      <template v-if="state===0">
        <p class="h3">
          No Encounter Logs Found for&nbsp;{{ user }}
        </p>
        <p>
          Add your encounter logs to GW2Bot by using the <code>/evtc</code> command in Discord.
        </p>
      </template>
      <template v-else>
        <!-- ENCOUNTER SELECT -->
        <div class="form form--inline">
          <div class="encounter-select">
            <div class="flexbox">
              <div class="flexbox__item">
                <div class="form__group">
                  <label for="encounter-instances" class="form__label">Instance:</label>
                  <select id="encounter-instances" class="form__control">
                    <option selected @click="selectInstance($event)" />
                    <optgroup v-for="(category, key) in bosses" :key="key" :label="key">
                      <option
                        v-for="(instance, index) in category"
                        :key="index"
                        :data-index="index"
                        @click="selectInstance($event)"
                      >
                        {{ instance.name }}
                      </option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div v-if="selectedInstance" class="flexbox__item">
                <div class="form__group">
                  <label for="encounter-bosses" class="form__label">Boss:</label>
                  <select id="encounter-bosses" class="form__control">
                    <option selected @click="selectBoss($event)" />
                    <option
                      v-for="(boss, index) in selectedInstance.encounters"
                      :key="index"
                      :data-value="boss.ids"
                      @click="selectBoss($event)"
                    >
                      {{ boss.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <hr>

          <!-- ENCOUNTER FILTERS -->
          <div class="encounter-filters">
            <div class="flexbox">
              <div class="flexbox__item">
                <div class="form__checkbox">
                  <label for="result" class="form__label">Successful Only?</label>
                  <input id="result" v-model="filters.success" type="checkbox" @change="applyFilters">
                </div>
              </div>

              <div class="flexbox__item">
                <div class="form__group">
                  <label for="date-start" class="form__label">Date Start:</label>
                  <input id="date-start" v-model="filters.dateStart" class="form__control" type="date" @change="applyFilters">
                </div>
              </div>

              <div class="flexbox__item">
                <div class="form__group">
                  <label for="date-end" class="form__label">Date End:</label>
                  <input id="date-end" v-model="filters.dateEnd" class="form__control" type="date" @change="applyFilters">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ENCOUNTER DISPLAY -->
        <div v-if="user" class="encounter-display">
          <p v-if="state==='loading'" class="h4">
            Loading Encounters... <LoadingInlineSVG />
          </p>
          <template v-else-if="state==='ready'">
            <template v-if="selectedBoss">
              <p class="h3">
                <img :src="selectedBoss.icon" alt="">{{ selectedBoss.name | twoOrphans }}
              </p>

              <p v-if="(activeLogs<1)&&(encounters.length>0)&&(encounters.length==detailedEncounters.length)">
                Cannot find any <strong>{{ selectedBoss.name | twoOrphans }}</strong> encounter logs associated with&nbsp;<strong>{{ user }}</strong>
              </p>
            </template>
            <template v-else-if="!selectedBoss">
              <p>Start browsing your encounter logs by selecting an instance, then selecting a boss from the dropdown menus&nbsp;above.</p>
            </template>
            <ol v-if="detailedEncounters.length" class="encounter-list">
              <li v-for="encounter in detailedEncounters" :key="encounter.id" :data-value="encounter.triggerID" class="encounter" :class="{ active: selectedBoss.ids==encounter.triggerID }">
                <div class="encounter__info small-text">
                  <span><strong>Date:</strong> {{ encounter.time }}</span>
                  <span><strong>Duration:</strong> {{ encounter.duration }}</span>
                  <span>
                    <strong>Result:</strong> {{ encounter.success?'Success':'Failure' }}
                  </span>
                </div>

                <table class="encounter__table">
                  <tr>
                    <th>Account</th>
                    <th>Character</th>
                    <th>DPS</th>
                  </tr>
                  <tr v-for="player in encounter.players" :key="player.id" :class="{ me: encounter.recordedBy==player.name }">
                    <td>{{ player.account }}</td>
                    <td>
                      <picture>
                        <source :srcset="require(`@/assets/img/professions/${player.profession.toLowerCase()}_icon.webp`)" type="image/webp">
                        <img
                          class="profession-icon"
                          :src="require(`@/assets/img/professions/${player.profession.toLowerCase()}_icon.png`)"
                          :title="player.profession"
                          :alt="player.profession"
                        >
                      </picture>{{ player.name }}
                    </td>
                    <td>
                      {{ player.dpsTargets[0][0].dps }}
                    </td>
                  </tr>
                </table>
                <p>
                  <a class="external" :href="encounter.permalink" target="_blank">View full encounter details</a>
                </p>
              </li>
            </ol>
            <template v-if="encounters.length > detailedEncounters.length">
              <p class="h4">
                Loading Encounters... <LoadingInlineSVG />
              </p>

              <div class="progressbar">
                <div :style="{'width': `${detailedEncounters.length / encounters.length * 100}%`}" />
              </div>
            </template>
          </template>
        </div>
      </template>
    </div>
  </main>
</template>

<script>
import bosses from '@/static/bossesData'
import LoadingInlineSVG from '@/components/inline-svgs/loading'

export default {
  name: 'LogsPage',
  components: {
    LoadingInlineSVG
  },
  middleware: 'auth',
  data () {
    return {
      user: null,
      bosses,
      updateDebounce: null,
      filterDebounce: null,
      state: 'loading',
      selectedInstance: '',
      selectedBoss: '',
      encounters: [],
      detailedEncounters: [],
      activeLogs: 0,
      filters: {
        success: null,
        dateStart: null,
        dateEnd: null
      }
    }
  },
  async mounted () {
    document.getElementById('encounter-instances').selectedIndex = 0
    await this.fetchAccountName(this.$auth.user.id)
    await this.fetchEncounters(null, null, null)
    await this.fetchEncountersDetail()
    this.encounters.length ? (this.state = 'ready') : (this.state = 0)
  },
  updated () {
    clearTimeout(this.updateDebounce)

    this.updateDebounce = setTimeout((instance) => {
      instance.activeLogs = document.querySelectorAll('.encounter.active').length
    }, 500, this)
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
          const encounterJson = await fetch(
            `https://dps.report/getJson?permalink=${element.permalink}`
          ).then(response => response.json())
          encounterJson.permalink = element.permalink
          const encounterTime = encounterJson.timeEnd.split(' ')
          encounterJson.time = new Date(`${encounterTime[0]}T${encounterTime[1]}`).toLocaleString()
          this.detailedEncounters.push(encounterJson)
        })
      } catch (err) {
        throw err
      }
    },
    applyFilters () {
      clearTimeout(this.filterDebounce)

      this.filterDebounce = setTimeout(async (instance) => {
        if (instance.state === 'ready') { instance.state = 'loading' }
        await instance.fetchEncounters(instance.filters.success, instance.filters.dateEnd, instance.filters.dateStart)
        await instance.fetchEncountersDetail()
        if (instance.state === 'loading') { instance.state = 'ready' }
      }, 500, this)
    },
    selectInstance (event) {
      if (event.target.index > 0) {
        const category = event.target.parentElement.label
        const instance = event.target.dataset.index
        this.selectedInstance = this.bosses[category][instance]
      } else {
        this.selectedInstance = ''
      }

      const bossSelect = document.getElementById('encounter-bosses')

      if (bossSelect) {
        bossSelect.selectedIndex = 0
        /* this.selectBoss({
          target: bossSelect.options[0]
        }) */
      }
    },
    selectBoss (event) {
      const encounters = document.querySelectorAll('.encounter')

      if (event.target.index > 0) {
        const boss = event.target.index - 1
        this.selectedBoss = this.selectedInstance.encounters[boss]
        this.activeLogs = 0
      } else {
        this.selectedBoss = ''
      }

      encounters.forEach((encounter) => {
        if (
          encounter.dataset.value.includes(
            event.target.getAttribute('data-value')
          )
        ) {
          encounter.classList.add('active')
          ++this.activeLogs
        } else {
          encounter.classList.remove('active')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/functions';
@import '~@/assets/scss/colors';
@import '~@/assets/scss/settings';

@import '~@/assets/scss/situational/forms';

.encounter-select {
  display: flex;
  justify-content: center;
  align-items: center;
}

.encounter-filters {
  display: flex;
  justify-content: center;
  align-items: center;
}

.encounter-display {
  margin-top: $baseline-rem;
  padding-bottom: ($baseline-rem * .5);
  height: 675px;
  overflow-y: scroll;
}
.h3 {
  margin: 0;
  line-height: 64px;
  img {
    display: inline-block;
    margin-right: ($baseline-px * .5);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    vertical-align: top;
  }
}
.encounter-list {
  padding: 0 6px;
  width: 100%;
  min-width: 460px;
  list-style: none;
  text-align: center;
}
.encounter {
  display: none;
  margin: $baseline-rem 0 0 0;
  padding: ($baseline-px * .5);
  border-radius: 6px;
  background: $white;
  box-shadow: $card-shadow;
  &.active {
    display: block;
  }
  .dark-mode & {
    background: $grey-350;
    box-shadow: $card-shadow--dark;
  }
}
.encounter__info {
  display: flex;
  justify-content: space-evenly;
}
.encounter__table {
  margin-top: ($baseline-rem * .5);
  th, td {
    padding: 2px 6px;
    width: 40%;
    border-width: 0;
    &:last-child {
      width: 20%;
    }
  }
  td {
    font-size: $small-font-rem;
  }
  th~th, th~td, td~td {
    border-left-width: 1px;
  }
  tr ~ tr {
    th, td {
      border-top-width: 1px;
    }
  }
  .me {
    font-weight: 700;
  }
}
.profession-icon {
  display: inline-block;
  margin-right: 2px;
  width: $p-line-rem;
  height: $p-line-rem;
  vertical-align: top;
}
.h4 .inline-svg {
  width: $h4-line-rem;
  height: $h4-line-rem;
}
.progressbar {
  margin: $baseline-rem auto 0 auto;
  width: 100%;
  height: ($baseline-rem * .5);
  max-width: 460px;
  border-radius: ($baseline-rem * .25);
  background: $white;
  box-shadow: $button-shadow;
  overflow: hidden;
  div {
    height: 100%;
    background: $red-700;
  }
  .dark-mode & {
    background: $grey-350;
    box-shadow: $button-shadow--dark;
    div {
      background: $red-400;
    }
  }
}
</style>
