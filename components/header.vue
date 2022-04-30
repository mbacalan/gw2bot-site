<template>
  <header class="header">
    <picture>
      <source media="(min-width: 2550px)" srcset="@/assets/img/gw2botbanner1.png">
      <source media="(min-width: 1024px)" srcset="@/assets/img/gw2botbanner1.png">
      <img
        class="header__img"
        src="@/assets/img/gw2botbannerMobile1.png"
        alt="Banner for mobile version"
      >
    </picture>

    <nav>
      <ul class="nav">
        <li>
          <nuxt-link to="/" class="nav__item" active-class="active" exact>
            Home
          </nuxt-link>
        </li>

        <li>
          <nuxt-link to="/commands" class="nav__item" active-class="active">
            Commands
          </nuxt-link>
        </li>

        <li>
          <nuxt-link to="/faq" class="nav__item" active-class="active">
            F.A.Q
          </nuxt-link>
        </li>

        <li>
          <nuxt-link v-if="$auth.loggedIn" to="/logs" class="nav__item" active-class="active">
            Logs
          </nuxt-link>
        </li>

        <li>
          <a v-if="!$auth.loggedIn" href="#" class="nav__item" @click="$auth.loginWith('discord')">Login</a>
          <a v-if="$auth.loggedIn" href="#" class="nav__item" @click="$auth.logout()">Logout</a>
          <a href="https://discord.gg/VyQTrwP" target="_blank" class="nav__item">Support</a>
        </li>
      </ul>
    </nav>

    <p class="api-status">
      <span
        id="js-api-status"
        title="If API is offline, the bot will not function properly"
      >Checking API... ☐</span>
    </p>
  </header>
</template>

<style lang="scss">
.header {
  position: relative;

  &__img {
    max-width: 100%;
    display: block;
    margin: auto;
    height: auto;

  }
}

.nav {
  list-style: none;
  display: flex;
  justify-content: center;
  font-size: 1.05em;
  margin: 0px auto;
  padding: 1rem;
  background-color: #a61501;

  &__item {
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

.api-status {
  text-align: right;
  margin: 2px 0px;
}
</style>

<script>
export default {
  name: 'HeaderComponent'
}
</script>
