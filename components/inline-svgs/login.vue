<template>
  <svg class="inline-svg login-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <polyline points="66 35 90 59 67 82" />
    <line x1="21" y1="59" x2="90" y2="59" />
  </svg>
</template>

<script>
export default {
  name: 'LoginInlineSVG'
}
</script>

<style scoped>
polyline, line {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: 14;
}
</style>
