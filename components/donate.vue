<template>
  <div class="patreon">
    <div class="page-width page-padding">
      <hr>

      <span class="h2">Contribute to GW2Bot</span>

      <p>GW2Bot will remain free to use and continues to run with kind donations and volunteer&nbsp;contributions.<br>If you enjoy using GW2Bot, please consider donating to fund future&nbsp;development!</p>

      <div class="flexbox">
        <div class="flexbox__item">
          <a class="button button--large button--patreon" href="https://www.patreon.com/bePatron?u=9811418" target="_blank">Become a Patron</a>
        </div>

        <div class="flexbox__item">
          <a class="button button--large button--paypal" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=96N5SP5FYTTGJ" target="_blank">Donate with PayPal</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DonateComponent'
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/colors';
@import '~@/assets/scss/settings';

.patreon {
  padding-top: $baseline-rem;
  .flexbox__item {
    margin-top: $baseline-rem;
  }
}
</style>
