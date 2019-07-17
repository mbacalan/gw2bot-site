<template>
  <div class="footer">
    <footer class="footer-lg">
      <div class="container">
        <p>©2018 - GW2Bot created by Maselkov#2365, Website created by Penemue#8514&nbsp;- &nbsp; If you want to contribute, see
          <a target="_blank" href="https://github.com/Maselkov/GW2Bot">here for the bot </a>
          and
          <a target="_blank" href="https://github.com/mbacalan/gw2bot-site">here for the website.</a> Thanks to all contributors.</p>
        <p>Guild Wars 2 Logo and all associated logos and designs are trademarks or registered trademarks of NCSOFT Corporation.</p>
      </div>
    </footer>

    <footer>
      <div class="container">
        <p>
          <a target="_blank" href="https://github.com/Maselkov/GW2Bot">GW2Bot</a> by Maselkov#2365,
          <a target="_blank" href="https://github.com/mbacalan/gw2bot-site">Website</a> by Penemue#8514.</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
footer {
  display: block;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: #343a40;

  p {
    text-align: center;
    color: white;
    font-size: 11px;
    line-height: 0.5px;
    margin-top: 15px;
  }

  a {
    text-decoration: none;
    color: #1895a8;
  }
}

.footer-lg {
  display: none;
}

@media (min-width: 935px) {
  .footer-lg {
    display: block;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5rem;
    background-color: #343a40;
  }

  footer {
    display: none;
  }
}
</style>

<script>
export default {
  name: "Footer"
};
</script>
