<template>
  <div>
    <Header />
    <Nuxt />
    <Donate />
    <Footer />
  </div>
</template>

<style src="@/assets/style.scss" lang="scss">
</style>

<script>
import Header from '@/components/header'
import Donate from '@/components/donate'
import Footer from '@/components/footer'

export default {
  name: 'App',
  components: {
    Header,
    Donate,
    Footer
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
