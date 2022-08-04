<template>
  <div class="top-bar">
    <div class="top-bar__shadow">
      <div class="page-width page-padding">
        <nuxt-link class="top-bar__logo" to="/">
          <picture>
            <source srcset="@/assets/img/nav-bar-logo.webp" type="image/webp">
            <img src="@/assets/img/nav-bar-logo.png" alt="GW2Bot Logo">
          </picture>
          <span class="top-bar__logo-wordmark">GW2Bot</span><span class="sr-only"> - A Discord Bot for Guild Wars 2</span>
        </nuxt-link>

        <div class="top-bar__toggles">
          <div class="top-bar__toggle">
            <button
              class="dark-mode-button"
              :class="($colorMode.value=='dark')?'active':''"
              :title="($colorMode.value=='dark')?'Switch to light mode':'Switch to dark mode'"
              @click="($colorMode.value=='dark')?($colorMode.preference='light'):($colorMode.preference='dark')"
            />
          </div>

          <div class="top-bar__toggle top-bar__toggle--navigation">
            <button
              class="main-nav-button"
              :class="{active: navActive}"
              :title="navActive?'Hide navigation':'Show navigation'"
              @click="toggleNavigation()"
            >
              <div />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile-navigation-cover" :class="{active: navActive}" @click="hideNavigation()" />

    <div class="page-width">
      <div class="main-nav__container" :class="{active: navActive}">
        <nav class="main-nav" aria-label="Navigation" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
          <nuxt-link
            to="/"
            class="main-nav__link"
            active-class="active"
            itemprop="url"
            exact
            @click.native="hideNavigation()"
          >
            <span class="main-nav__link-name">Home</span>
          </nuxt-link>
          <nuxt-link to="/commands" class="main-nav__link" active-class="active" itemprop="url" @click.native="hideNavigation()">
            <span class="main-nav__link-name">Commands</span>
          </nuxt-link>
          <nuxt-link to="/faq" class="main-nav__link" active-class="active" itemprop="url" @click.native="hideNavigation()">
            <span class="main-nav__link-name">F.A<span class="q-kern">.</span>Q</span>
          </nuxt-link>
          <a class="main-nav__link" :href="$supportServerLink" target="_blank" itemprop="url">
            <span class="main-nav__link-name">Support</span>
          </a>
          <a v-if="!$auth.loggedIn" href="#" class="main-nav__link" @click="$auth.loginWith('discord')">
            <span class="main-nav__link-name">Login<LoginInlineSVG /></span>
          </a>
          <div v-if="$auth.loggedIn" class="main-nav__group" :class="{active: userMenuActive}">
            <button class="main-nav__link" :class="{active: userMenuActive}" @click="toggleUserMenu()">
              <span class="main-nav__link-name">
                <img class="main-nav__user-image" :src="$auth.user.avatar?`https://cdn.discordapp.com/avatars/${$auth.user.id}/${$auth.user.avatar}.png`:'https://cdn.discordapp.com/embed/avatars/0.png'">User<DropdownInlineSVG />
              </span>
            </button>
            <div v-if="$auth.loggedIn" class="main-nav__sub-menu" :class="{active: userMenuActive}">
              <div class="main-nav__user-info small-text">
                <span class="main-nav__user-name">
                  {{ $auth.user.username }}#{{ $auth.user.discriminator }}
                </span>
              </div>
              <nuxt-link to="/logs" class="main-nav__link" active-class="active" @click.native="hideNavigation();hideUserMenu()">
                <span class="main-nav__link-name">Encounter Logs</span>
              </nuxt-link>
              <a href="#" class="main-nav__link" @click="$auth.logout()">
                <span class="main-nav__link-name">Logout</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import DropdownInlineSVG from '@/components/inline-svgs/dropdown'
import LoginInlineSVG from '@/components/inline-svgs/login'

export default {
  name: 'HeaderComponent',
  components: {
    DropdownInlineSVG,
    LoginInlineSVG
  },
  data () {
    return {
      navActive: false,
      userMenuActive: false
    }
  },
  methods: {
    toggleNavigation () {
      if (this.navActive) {
        Vue.set(this, 'navActive', false)
      } else {
        Vue.set(this, 'navActive', true)
      }
    },
    hideNavigation () {
      Vue.set(this, 'navActive', false)
    },
    toggleUserMenu () {
      if (this.userMenuActive) {
        this.userMenuActive = false
      } else {
        Vue.set(this, 'userMenuActive', true)
      }
    },
    hideUserMenu () {
      Vue.set(this, 'userMenuActive', false)
    }
  }
}
</script>
