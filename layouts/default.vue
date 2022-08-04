<template>
  <div>
    <HeaderComponent />
    <div class="page">
      <Nuxt />
    </div>
    <DonateComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/header'
import DonateComponent from '@/components/donate'
import FooterComponent from '@/components/footer'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    DonateComponent,
    FooterComponent
  }/* ,
  mounted () {
    this.getApiStatus()// Masel says API check is redundant now
  },
  methods: {
    async getApiStatus () {
      const element = document.getElementById('api-status')

      try {
        const quaggans = await fetch('https://api.guildwars2.com/v2/quaggans')

        if (quaggans.status >= 200 && quaggans.status < 400) {
          element.innerHTML = 'API is Online!'
          element.className = 'success'
        } else {
          element.innerHTML = 'Error reaching API'
          element.className = 'failure'
        }
      } catch {
        element.innerHTML = 'Error reaching API'
        element.className = 'failure'
      }
    }
  } */
}
</script>

<style src="@/assets/scss/main.scss" lang="scss">
</style>
