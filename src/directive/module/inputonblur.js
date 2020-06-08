export default {
  inserted: (el) => {
    el.onblur = function() {
      // eslint-disable-next-line no-debugger
      var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0
      // eslint-disable-next-line no-irregular-whitespace
      window.scrollTo(0, Math.max(scrollHeight - 1, 0))
    }
  }
}
