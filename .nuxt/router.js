import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f366e59a = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _d9012e2a = () => interopDefault(import('../pages/boo/index.vue' /* webpackChunkName: "pages/boo/index" */))
const _27dae0c6 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _2b44ab02 = () => interopDefault(import('../pages/five/index.vue' /* webpackChunkName: "pages/five/index" */))
const _983ffa96 = () => interopDefault(import('../pages/pedro/index.vue' /* webpackChunkName: "pages/pedro/index" */))
const _6c70ae08 = () => interopDefault(import('../pages/pedro/ia/index.vue' /* webpackChunkName: "pages/pedro/ia/index" */))
const _51011f9f = () => interopDefault(import('../pages/pedro/interface/index.vue' /* webpackChunkName: "pages/pedro/interface/index" */))
const _f13f381a = () => interopDefault(import('../pages/pedro/server/index.vue' /* webpackChunkName: "pages/pedro/server/index" */))
const _e2ea2e50 = () => interopDefault(import('../pages/pedro/interface/butNonValide.vue' /* webpackChunkName: "pages/pedro/interface/butNonValide" */))
const _093ebe32 = () => interopDefault(import('../pages/pedro/interface/pageblanche.vue' /* webpackChunkName: "pages/pedro/interface/pageblanche" */))
const _b3f73010 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _f366e59a,
    name: "about"
  }, {
    path: "/boo",
    component: _d9012e2a,
    name: "boo"
  }, {
    path: "/contact",
    component: _27dae0c6,
    name: "contact"
  }, {
    path: "/five",
    component: _2b44ab02,
    name: "five"
  }, {
    path: "/pedro",
    component: _983ffa96,
    name: "pedro"
  }, {
    path: "/pedro/ia",
    component: _6c70ae08,
    name: "pedro-ia"
  }, {
    path: "/pedro/interface",
    component: _51011f9f,
    name: "pedro-interface"
  }, {
    path: "/pedro/server",
    component: _f13f381a,
    name: "pedro-server"
  }, {
    path: "/pedro/interface/butNonValide",
    component: _e2ea2e50,
    name: "pedro-interface-butNonValide"
  }, {
    path: "/pedro/interface/pageblanche",
    component: _093ebe32,
    name: "pedro-interface-pageblanche"
  }, {
    path: "/",
    component: _b3f73010,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
