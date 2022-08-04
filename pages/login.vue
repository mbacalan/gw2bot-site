<template>
  <main>
    <div class="page-width page-padding">
      <header>
        <h1>Redirecting... <LoadingInlineSVG /></h1>
      </header>
    </div>
  </main>
</template>

<script>
import LoadingInlineSVG from '@/components/inline-svgs/loading'

export default {
  name: 'LoginPage',
  components: {
    LoadingInlineSVG
  },
  middleware: 'auth'
}
</script>
