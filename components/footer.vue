<template>
  <footer>
    <div class="page-width page-padding">
      <p><small>&copy;2022&nbsp;-&nbsp;GW2Bot created by&nbsp;Maselkov#2365, Website created by&nbsp;Penemue#8514 and design updated by&nbsp;Mattt#7551<br>If you want to contribute, see <a class="external" href="https://github.com/Maselkov/GW2Bot" target="_blank">here for the bot</a> and <a class="external" href="https://github.com/mbacalan/gw2bot-site" target="_blank">here for the website</a>. Thanks to all contributors.</small></p>

      <p><small>Please read the <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link> if you have any privacy conerns about&nbsp;GW2Bot.<br>Join the <a class="external" :href="$supportServerLink" target="_blank">GW2Bot Discord Server</a> for further&nbsp;support.</small></p>

      <p><small>Guild Wars 2 Logo and all associated logos and designs are trademarks or registered trademarks of NCSOFT&nbsp;Corporation.</small></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/colors';
@import '~@/assets/scss/settings';

footer {
  position: relative;
  margin: ($baseline-rem * 2) 0 0 0;
  padding: $baseline-rem 0 ($baseline-rem * 2) 0;
  text-align: center;
  width: 100%;
  background: $grey-1100;
  .dark-mode & {
    background: $grey-250;
  }
}
</style>
