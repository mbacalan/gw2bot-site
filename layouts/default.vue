<template>
  <div>
    <Header />
    <nuxt />
    <p class="pusher" />
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
    const request = new XMLHttpRequest()
    request.open('GET', 'https://api.guildwars2.com/v2/quaggans', true)

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        document.getElementById('apistatus').innerHTML = 'API is Online! ☑'
      } else {
        document.getElementById('apistatus').innerHTML = 'Error reaching API ☒'
      }
    }

    request.onerror = function () {
      document.getElementById('apistatus').innerHTML = 'Error reaching API ☒'
    }

    request.send()
  }
}
</script>
