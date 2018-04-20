<template>
  <div id="index">
  <hr>
  <h1 class="headline">Bring the world of Tyria into Discord</h1>
  <a id="button" :href="inviteLink">Add To Server!</a>
  <hr>
  <picture>
      <source media="(min-width: 1024px)" srcset="/static/img/botdemo.gif">
      <img src="/static/img/botdemo-sm.gif" alt="A .gif demonstration of the bot">
    </picture>
</div>
</template>

<script scoped>
export default {
  props: ["inviteLink"]
};
</script>
