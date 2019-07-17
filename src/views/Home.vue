<template>
  <div class="index">
    <hr>
    <h1 class="headline">Bring the world of Tyria into Discord</h1>
    <a class="button" href="https://discordapp.com/oauth2/authorize?client_id=310050883100737536&scope=bot&permissions=939879488">Add To Server!</a>
    <hr>
    <picture>
      <source media="(min-width: 1024px)" srcset="@/assets/img/botdemo.gif">
      <img src="@/assets/img/botdemo-sm.gif" alt="A .gif demonstration of the bot">
    </picture>
  </div>
</template>

<script scoped>
</script>

<style lang="scss" scoped>
.index {
  text-align: center;

  .button {
    display: inline-block;
    margin-bottom: 5px;
    padding: 1.2rem 1.5rem;
    transition: 0.5s;
    background-color: #dc3545;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    color: #fff;

    &:hover {
      transition: 0.5s;
      background-color: #c82333;
    }
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin-right: auto;
    margin-left: auto;
    border-radius: 0.25rem;
  }
}

@media (min-width: 1024px) {
  .index h1 {
    font-size: 3em;
  }
}
</style>
