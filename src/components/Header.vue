<template>
  <div id="header">
    <picture>
      <source media="(min-width: 2550px)" srcset="@/assets/img/banner1440p.png">
      <source media="(min-width: 1024px)" srcset="@/assets/img/banner.png">
      <img class="header-img" src="@/assets/img/avatarwithtext.png" alt="Banner with GW2Bot Logo">
    </picture>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>
