<template>
  <div id="app">
    <Header/>
    <nav>
      <ul>
        <router-link to="/" active-class="active" exact>Home</router-link>
        <router-link to="/commands" active-class="active">Commands</router-link>
        <router-link to="/faq" active-class="active">F.A.Q</router-link>
        <a href="https://discord.gg/VyQTrwP">Support</a>
      </ul>
    </nav>
    <p id="apicheck">
      <span id="apistatus" title="If API is offline, the bot will not function properly">Checking API... ☐</span>
    </p>
    <router-view
      :invite-link='"https://discordapp.com/oauth2/authorize?client_id=310050883100737536&scope=bot&permissions=939879488"'
    />
    <p class="pusher"></p>
    <Donate/>
    <Footer/>
  </div>
</template>

<script src="./assets/app.js">
</script>

<style src="./assets/style.scss" lang="scss">
</style>
