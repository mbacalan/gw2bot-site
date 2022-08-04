import Vue from 'vue'

export default () => {
  Vue.filter('twoOrphans', function (text) {
    // Replace the last whitespace character with a non-breaking space to force a
    // minimum of two orphan words in a given block of text
    return text.replace(/\s+[\w")]+$/, function (x) {
      return x.replace(/\s+/, '\xA0')// non-breaking space (javascript entity)
    })
  })
}
