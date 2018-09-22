<template>
  <div id="index">
    <div class="alert" v-if="!alert">
      <span class="close-button" v-on:click="closeAlert">&times;</span>
      A major update is now live along with Patreon!
    </div>
    <hr>
    <h1 class="headline">Bring the world of Tyria into Discord</h1>
    <a id="button" :href="inviteLink">Add To Server!</a>
    <hr>
    <picture>
      <source media="(min-width: 1024px)" srcset="@/assets/img/botdemo.gif">
      <img src="@/assets/img/botdemo-sm.gif" alt="A .gif demonstration of the bot">
    </picture>
  </div>
</template>

<script scoped>
export default {
  props: ["inviteLink"],
  methods: {
    closeAlert: function(event) {
      event.target.parentElement.style.display = "none";
      document.cookie = "alert=off";
    }
  },
  data() {
    return {
      alert: document.cookie
    };
  }
};
</script>

<style scoped>
.alert {
  padding: 20px;
  background-color: #dc3545;
  color: white;
  margin-bottom: 15px;
}

.close-button {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.close-button:hover {
  color: black;
}
</style>
