import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d9012e2a = () => interopDefault(import('../pages/boo/index.vue' /* webpackChunkName: "pages/boo/index" */))
const _b3f73010 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _2b44ab02 = () => interopDefault(import('../pages/five/index.vue' /* webpackChunkName: "pages/five/index" */))
const _504093ef = () => interopDefault(import('../pages/mobile/index.vue' /* webpackChunkName: "pages/mobile/index" */))
const _983ffa96 = () => interopDefault(import('../pages/pedro/index.vue' /* webpackChunkName: "pages/pedro/index" */))
const _0d2a5776 = () => interopDefault(import('../pages/five/tabletcode.vue' /* webpackChunkName: "pages/five/tabletcode" */))
const _47a20555 = () => interopDefault(import('../pages/pedro/camera/index.vue' /* webpackChunkName: "pages/pedro/camera/index" */))
const _6c70ae08 = () => interopDefault(import('../pages/pedro/ia/index.vue' /* webpackChunkName: "pages/pedro/ia/index" */))
const _51011f9f = () => interopDefault(import('../pages/pedro/interface/index.vue' /* webpackChunkName: "pages/pedro/interface/index" */))
const _b52e10c8 = () => interopDefault(import('../pages/pedro/live/index.vue' /* webpackChunkName: "pages/pedro/live/index" */))
const _f13f381a = () => interopDefault(import('../pages/pedro/server/index.vue' /* webpackChunkName: "pages/pedro/server/index" */))
const _e4568758 = () => interopDefault(import('../pages/pedro/camera/cameradown.vue' /* webpackChunkName: "pages/pedro/camera/cameradown" */))
const _e2ea2e50 = () => interopDefault(import('../pages/pedro/interface/butNonValide.vue' /* webpackChunkName: "pages/pedro/interface/butNonValide" */))
const _093ebe32 = () => interopDefault(import('../pages/pedro/interface/pageblanche.vue' /* webpackChunkName: "pages/pedro/interface/pageblanche" */))
const _249417ed = () => interopDefault(import('../pages/pedro/live/streamyoutube.vue' /* webpackChunkName: "pages/pedro/live/streamyoutube" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/boo",
    component: _d9012e2a,
    name: "boo___fr"
  }, {
    path: "/en",
    component: _b3f73010,
    name: "index___en"
  }, {
    path: "/five",
    component: _2b44ab02,
    name: "five___fr"
  }, {
    path: "/mobile",
    component: _504093ef,
    name: "mobile___fr"
  }, {
    path: "/pedro",
    component: _983ffa96,
    name: "pedro___fr"
  }, {
    path: "/en/boo",
    component: _d9012e2a,
    name: "boo___en"
  }, {
    path: "/en/five",
    component: _2b44ab02,
    name: "five___en"
  }, {
    path: "/en/mobile",
    component: _504093ef,
    name: "mobile___en"
  }, {
    path: "/en/pedro",
    component: _983ffa96,
    name: "pedro___en"
  }, {
    path: "/five/tabletcode",
    component: _0d2a5776,
    name: "five-tabletcode___fr"
  }, {
    path: "/pedro/camera",
    component: _47a20555,
    name: "pedro-camera___fr"
  }, {
    path: "/pedro/ia",
    component: _6c70ae08,
    name: "pedro-ia___fr"
  }, {
    path: "/pedro/interface",
    component: _51011f9f,
    name: "pedro-interface___fr"
  }, {
    path: "/pedro/live",
    component: _b52e10c8,
    name: "pedro-live___fr"
  }, {
    path: "/pedro/server",
    component: _f13f381a,
    name: "pedro-server___fr"
  }, {
    path: "/en/five/tabletcode",
    component: _0d2a5776,
    name: "five-tabletcode___en"
  }, {
    path: "/en/pedro/camera",
    component: _47a20555,
    name: "pedro-camera___en"
  }, {
    path: "/en/pedro/ia",
    component: _6c70ae08,
    name: "pedro-ia___en"
  }, {
    path: "/en/pedro/interface",
    component: _51011f9f,
    name: "pedro-interface___en"
  }, {
    path: "/en/pedro/live",
    component: _b52e10c8,
    name: "pedro-live___en"
  }, {
    path: "/en/pedro/server",
    component: _f13f381a,
    name: "pedro-server___en"
  }, {
    path: "/pedro/camera/cameradown",
    component: _e4568758,
    name: "pedro-camera-cameradown___fr"
  }, {
    path: "/pedro/interface/butNonValide",
    component: _e2ea2e50,
    name: "pedro-interface-butNonValide___fr"
  }, {
    path: "/pedro/interface/pageblanche",
    component: _093ebe32,
    name: "pedro-interface-pageblanche___fr"
  }, {
    path: "/pedro/live/streamyoutube",
    component: _249417ed,
    name: "pedro-live-streamyoutube___fr"
  }, {
    path: "/en/pedro/camera/cameradown",
    component: _e4568758,
    name: "pedro-camera-cameradown___en"
  }, {
    path: "/en/pedro/interface/butNonValide",
    component: _e2ea2e50,
    name: "pedro-interface-butNonValide___en"
  }, {
    path: "/en/pedro/interface/pageblanche",
    component: _093ebe32,
    name: "pedro-interface-pageblanche___en"
  }, {
    path: "/en/pedro/live/streamyoutube",
    component: _249417ed,
    name: "pedro-live-streamyoutube___en"
  }, {
    path: "/",
    component: _b3f73010,
    name: "index___fr"
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
