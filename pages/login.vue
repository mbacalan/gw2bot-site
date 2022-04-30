<template>
  <div class="login">
    Redirecting...
  </div>
</template>

<style lang="scss">
.login {
  text-align: center;
}
</style>

<script>
export default {
  name: 'LoginPage',
  middleware: 'auth'
}
</script>
