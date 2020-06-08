import directive from './directives'

const importDirective = Vue => {
  Vue.directive('inputonblur', directive.inputonblur)
}

export default importDirective
