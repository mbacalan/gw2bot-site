<template>
  <div class="header">
    <picture>
      <source media="(min-width: 2550px)" srcset="@/assets/img/banner1440p.png">
      <source media="(min-width: 1024px)" srcset="@/assets/img/banner.png">
      <img class="header-img" src="@/assets/img/avatarwithtext.png" alt="Banner with GW2Bot Logo">
    </picture>
    <nav>
      <div class="nav-list">
        <router-link to="/" active-class="active" exact>Home</router-link>
        <router-link to="/commands" active-class="active">Commands</router-link>
        <router-link to="/faq" active-class="active">F.A.Q</router-link>
        <a target="_blank" href="https://discord.gg/VyQTrwP">Support</a>
      </div>
    </nav>
    <p id="apicheck">
      <span id="apistatus" title="If API is offline, the bot will not function properly">Checking API... ☐</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>
