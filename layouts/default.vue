<template>
  <div>
    <HeaderComponent />
    <Nuxt />
    <DonateComponent />
    <FooterComponent />
  </div>
</template>

<style src="@/assets/style.scss" lang="scss">
</style>

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
  },
  mounted () {
    this.getApiStatus()
  },
  methods: {
    async getApiStatus () {
      const apiEl = document.getElementById('js-api-status')

      try {
        const quaggans = await fetch('https://api.guildwars2.com/v2/quaggans')

        if (quaggans.status >= 200 && quaggans.status < 400) {
          apiEl.textContent = 'API is Online! ☑'
        } else {
          apiEl.textContent = 'Error reaching API ☒'
        }
      } catch {
        apiEl.textContent = 'Error reaching API ☒'
      }
    }
  }
}
</script>
