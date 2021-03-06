export { default as AppFooter } from '../../components/AppFooter.vue'
export { default as AppHeader } from '../../components/AppHeader.vue'
export { default as HomeCard } from '../../components/HomeCard.vue'
export { default as InConstruct } from '../../components/InConstruct.vue'
export { default as SectionCard } from '../../components/SectionCard.vue'
export { default as Step } from '../../components/Step.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
