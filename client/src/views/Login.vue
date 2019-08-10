<template>
  <div class="login">
    <h1>Encounter Browser</h1>
    <div class="user">
      <div></div>
      <small v-if="user">( {{ user }} )</small>
      <button id="logout" class="button" v-if="user" @click="logOut()">Logout</button>
    </div>

    <a
      v-if="!user"
      id="login"
      class="button"
      href="https://discordapp.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=token&scope=identify&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Flogin">
      Login
    </a>

    <div class="filters" v-if="user">
      <label for="result">Successful Only</label>
      <input type="checkbox" name="result" v-model="filters.success" @change="applyFilters">

      <label for="date-start">Date Start:</label>
      <input type="date" name="date-start" v-model="filters.dateStart" @change="applyFilters">

      <label for="date-end">Date End:</label>
      <input type="date" name="date-end" v-model="filters.dateEnd" @change="applyFilters">
    </div>

    <div class="container" v-if="user">
      <div class="encounter-select" >
        <div v-for="(section, key) in bosses" :key="section.id">
          <h2>{{ key }}</h2>
          <div
            v-for="(boss, index) in section"
            :key="index"
            :data-value="boss.ids"
            @click="toggleActive($event)">
            {{ boss.name }}
          </div>
        </div>
      </div>

      <div class="encounter-wrapper" v-if="detailedEncounters">
        <div class="encounter" v-for="encounter in detailedEncounters" :key="encounter.id" :data-value="encounter.triggerID">
          <div class="details">
            <p><span>Date: </span> {{ encounter.timeEnd }}</p>
            <p><span>Duration: </span>{{ encounter.duration }}</p>
            <p v-if="encounter.success === true"><span>Result: </span> Success </p>
            <p v-else><span>Result: </span> Failure </p>
          </div>

          <table>
            <tbody>
              <tr class="legend">
                <th>Account</th>
                <th class="legend__icons"></th>
                <th>Character</th>
              </tr>
              <tr v-for="player in encounter.players" :key="player.id">
                <td>{{ player.account }}</td>
                <td class="img">
                  <img
                    :src="`https://api.gw2bot.info/resources/professions/${player.profession.toLowerCase()}_icon.png`"
                    :title="player.profession"
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
.login {
  text-align: center;
  margin: auto;
  width: 85%;

  h1 {
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
  }

  & > div {
    list-style: none;

    > div {
      height: 50px;
      width: 85%;
      margin: 10px auto;
      border: 1px solid #343a40;
      line-height: 50px;
      cursor: pointer;
      transition: 0.2s ease;

      &:hover,
      &.active {
        transform: scale(1.02);
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
    margin: auto;
    margin-bottom: 25px;
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
      border-bottom: 1px solid #f5f5f5;
    }

    td.img img {
      width: 25px;
      height: 25px;
    }
  }

  span {
    font-weight: bold;
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
</style>

<script>
import dbService from "../dbService";
import bosses from "../bossesData";

export default {
  name: "Login",
  data() {
    return {
      user: null,
      bosses: bosses,
      encounters: [],
      detailedEncounters: [],
      filters: {
        success: null,
        dateStart: null,
        dateEnd: null
      }
    };
  },
  async mounted() {
    const fragment = new URLSearchParams(window.location.hash.slice(1));

    if (fragment.has("access_token")) {
      const urlState = fragment.get("state");
      const stateParameter = localStorage.getItem("stateParameter");

      if (stateParameter !== atob(decodeURIComponent(urlState))) {
        return alert("You may have been clickjacked!");
      }

      const accessToken = fragment.get("access_token");
      const tokenType = fragment.get("token_type");

      const response = await fetch("https://discordapp.com/api/users/@me", {
        headers: {
          authorization: `${tokenType} ${accessToken}`
        }
      });

      const data = await response.json();
      const { id } = await data;

      await this.fetchAccountName(id);
      await this.applyFilters();
    } else {
      const randStr = this.generateRandomString();

      localStorage.setItem("stateParameter", randStr);
      document.getElementById("login").href += `&state=${encodeURIComponent(
        btoa(randStr)
      )}`;
    }
  },
  updated() {
    const activeBoss = document.querySelector("div.encounter-select .active");

    if (!activeBoss) return;

    const activeResults = document.querySelectorAll(
      `div.encounter-wrapper [data-value="${activeBoss.getAttribute(
        "data-value"
      )}"]`
    );

    activeResults.forEach(element => {
      element.classList.add("active");
    });
  },
  methods: {
    fetchAccountName: async function(id) {
      const user = await dbService.getUser(id);
      this.user = user.cogs.GuildWars2.key.account_name;
    },
    fetchEncounters: async function() {
      const encounters = await dbService.getEncountersFromDb(
        this.user,
        this.filters.success,
        this.filters.dateStart,
        this.filters.dateEnd
      );
      this.encounters = encounters;
    },
    fetchEncountersDetail: async function() {
      const encounters = await dbService.getDpsReportData(this.encounters);
      this.detailedEncounters = encounters;
    },
    applyFilters: async function() {
      await this.fetchEncounters();
      await this.fetchEncountersDetail();
    },
    generateRandomString: function() {
      const rand = Math.floor(Math.random() * 10);
      let randStr = "";

      for (let i = 0; i < 20 + rand; i++) {
        randStr += String.fromCharCode(33 + Math.floor(Math.random() * 94));
      }

      return randStr;
    },
    toggleActive: function(event) {
      const elements = document.querySelectorAll(`[data-value]`);

      event.target.classList.toggle("active");

      elements.forEach(element => {
        if (
          event.target
            .getAttribute("data-value")
            .includes(element.getAttribute("data-value"))
        ) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
    },
    logOut: async function() {
      await localStorage.removeItem("stateParameter");
      await window.location.replace("/login");
    }
  }
};
</script>
