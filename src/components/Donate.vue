<template>
  <div class="flex-wrapper">
    <div class="patreon">
      <a href="https://www.patreon.com/bePatron?u=9811418" aria-label="Support on Patreon">
        <img src="@/assets/img/patreon.png" alt="Support on Patreon">
      </a>
    </div>

    <div class="paypal">
      <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=96N5SP5FYTTGJ" aria-label="Donate with PayPal">
        <img src="@/assets/img/paypal.png" alt="Donate with PayPal">
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flex-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;

  .patreon {
    margin-bottom: 5px;
  }

  .paypal form input {
    display: block;
  }
}

@media (min-width: 1024px) {
  .flex-wrapper {
    flex-direction: row;
    justify-content: center;

    .patreon {
      margin-right: 10px;
      margin-bottom: 0px;
    }

    .paypal form input {
      display: inline;
    }
  }
}
</style>

<script>
export default {
  name: "Donate"
};
</script>
