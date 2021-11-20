export { default as AboutClientSingle } from '../../components/AboutClientSingle.vue'
export { default as AboutCounter } from '../../components/AboutCounter.vue'
export { default as AboutMe } from '../../components/AboutMe.vue'
export { default as AppBanner } from '../../components/AppBanner.vue'
export { default as AppFooter } from '../../components/AppFooter.vue'
export { default as AppHeader } from '../../components/AppHeader.vue'
export { default as AppNavigation } from '../../components/AppNavigation.vue'
export { default as ContactDetails } from '../../components/ContactDetails.vue'
export { default as ContactForm } from '../../components/ContactForm.vue'
export { default as DeveloperDarkIllustration } from '../../components/DeveloperDarkIllustration.vue'
export { default as DeveloperLightIllustration } from '../../components/DeveloperLightIllustration.vue'
export { default as Hero } from '../../components/Hero.vue'
export { default as ProjectsFilter } from '../../components/ProjectsFilter.vue'
export { default as ProjectsGrid } from '../../components/ProjectsGrid.vue'

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
