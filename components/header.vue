<template>
  <div class="header">
    <picture>
      <source media="(min-width: 2550px)" srcset="@/assets/img/banner1440p.png">
      <source media="(min-width: 1024px)" srcset="@/assets/img/banner.png">
      <img class="header-img" src="@/assets/img/avatarwithtext.png" alt="Banner with GW2Bot Logo">
    </picture>
    <nav>
      <div class="nav-list">
        <nuxt-link to="/" active-class="active" exact>
          Home
        </nuxt-link>
        <nuxt-link to="/commands" active-class="active">
          Commands
        </nuxt-link>
        <nuxt-link to="/faq" active-class="active">
          F.A.Q
        </nuxt-link>
        <nuxt-link v-if="$auth.loggedIn" to="/logs" active-class="active">
          Logs
        </nuxt-link>
        <a v-if="!$auth.loggedIn" href="#" @click="$auth.loginWith('discord')">
          Login
        </a>
        <a v-if="$auth.loggedIn" href="#" @click="$auth.logout()">
          Logout
        </a>
        <a href="https://discord.gg/VyQTrwP">Support</a>
      </div>
    </nav>
    <p class="apicheck">
      <span id="apistatus" title="If API is offline, the bot will not function properly">Checking API... ☐</span>
    </p>
  </div>
</template>

<style lang="scss">
nav {
  position: sticky;
  top: 0;
  z-index: 1020;

  .nav-list {
    font-size: 1.05em;
    text-align: center;
    margin: 0px auto;
    padding: 1rem;
    overflow: hidden;
    background-color: #343a40;
  }

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    padding: 1.2rem;

    &:hover {
      color: white;
    }

    &.active {
      color: white;
    }
  }
}

.apicheck {
  text-align: right;
  margin: 2px 0px;
}
</style>

<script>
export default {
  name: 'Header'
}
</script>
