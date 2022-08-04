<template>
  <main>
    <div class="feature-media" :class="month">
      <picture>
        <source media="(max-width: 800px)" :data-srcset="require(`@/assets/img/feature-images/${featureMedia[month]}.webp`)" type="image/webp">
        <source :data-srcset="require(`@/assets/img/feature-images/${featureMedia[month]}--high.webp`)" type="image/webp">
        <img
          data-sizes="auto"
          class="feature-media__media lazyload"
          :src="require(`@/assets/img/feature-images/${featureMedia[month]}--low.jpg`)"
          :data-src="require(`@/assets/img/feature-images/${featureMedia[month]}.jpg`)"
          :data-srcset="require(`@/assets/img/feature-images/${featureMedia[month]}.jpg`)+' 960w, '+require(`@/assets/img/feature-images/${featureMedia[month]}--high.jpg`)+' 1920w'"
          alt=""
        >
      </picture>
      <!--<video class="feature-media__media" autoplay loop muted playsinline>
        <source src="@/assets/img/feature-images/Sea_Dragon.mp4" type="video/mp4">
      </video>-->
      <div class="feature-media__content vertical-align vertical-align--middle">
        <div class="vertical-align__content">
          <div class="page-width">
            <h1 class="feature-title">
              Bring The World&nbsp;of Tyria Into&nbsp;Discord
            </h1>
            <a class="feature-button button button--giant" :href="$inviteLink" target="_blank">Add To Your Server!</a>
          </div>
        </div>
      </div>
    </div>
    <div class="page-width page-padding">
      <h2>GW2Bot Demo</h2>

      <div class="bot-demo">
        <video id="demo" autoplay loop muted playsinline>
          <source src="@/assets/img/demo.webm" type="video/webm">
          <source src="@/assets/img/demo.mp4" type="video/mp4">
        </video>
      </div>

      <nuxt-link to="/commands" class="button button--giant">
        View all Commands
      </nuxt-link>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      month: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'][(new Date()).getMonth()],
      featureMedia: {
        january: 'lunar-new-year',
        february: 'lunar-new-year',
        march: 'spring',
        april: 'spring2',
        may: 'spring3',
        june: 'dragon-bash',
        july: 'summer',
        august: 'festival-of-the-four-winds',
        september: 'festival-of-the-four-winds',
        october: 'halloween',
        november: 'autumn',
        december: 'wintersday'
      }
    }
  },
  mounted () {
    this.$loadScript('https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js')

    this.$loadScript('https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js').then(() => {
      let resizeTimer
      // eslint-disable-next-line
      const rellax = new Rellax('.feature-media__media',{speed: -4});

      function responsiveRellax () {
        if (window.innerWidth < 801) {
          rellax.destroy()
        } else {
          rellax.refresh()
        }
      }

      window.addEventListener('resize', function () {
        clearTimeout(resizeTimer)
        // Debounce the resize event for performance
        resizeTimer = setTimeout(function () {
          responsiveRellax()
        }, 250)
      })

      responsiveRellax()
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/colors';
@import '~@/assets/scss/settings';

.bot-demo {
  margin: $baseline-rem 0;
  video {
    display: inline-block;
    border-radius: 8px;
    width: 100%;
    max-width: 687px;
    max-height: 543px;
    vertical-align: top;
    box-shadow: $card-shadow;
    .dark-mode & {
      box-shadow: $card-shadow--dark;
    }
  }
}
</style>
