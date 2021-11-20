import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _629e4871 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _2de55529 = () => interopDefault(import('../pages/boo/index.vue' /* webpackChunkName: "pages/boo/index" */))
const _36aac484 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _c69573fe = () => interopDefault(import('../pages/five/index.vue' /* webpackChunkName: "pages/five/index" */))
const _4c7bd773 = () => interopDefault(import('../pages/pedro/index.vue' /* webpackChunkName: "pages/pedro/index" */))
const _125e53c9 = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _aaaa8eec = () => interopDefault(import('../pages/pedro/ia/index.vue' /* webpackChunkName: "pages/pedro/ia/index" */))
const _09a09edd = () => interopDefault(import('../pages/pedro/interface/index.vue' /* webpackChunkName: "pages/pedro/interface/index" */))
const _a6a54516 = () => interopDefault(import('../pages/pedro/server/index.vue' /* webpackChunkName: "pages/pedro/server/index" */))
const _da51304c = () => interopDefault(import('../pages/pedro/interface/butNonValide.vue' /* webpackChunkName: "pages/pedro/interface/butNonValide" */))
const _f0318cb6 = () => interopDefault(import('../pages/pedro/interface/pageblanche.vue' /* webpackChunkName: "pages/pedro/interface/pageblanche" */))
const _d85e971e = () => interopDefault(import('../pages/projects/_id.vue' /* webpackChunkName: "pages/projects/_id" */))
const _fb53b994 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _629e4871,
    name: "about"
  }, {
    path: "/boo",
    component: _2de55529,
    name: "boo"
  }, {
    path: "/contact",
    component: _36aac484,
    name: "contact"
  }, {
    path: "/five",
    component: _c69573fe,
    name: "five"
  }, {
    path: "/pedro",
    component: _4c7bd773,
    name: "pedro"
  }, {
    path: "/projects",
    component: _125e53c9,
    name: "projects"
  }, {
    path: "/pedro/ia",
    component: _aaaa8eec,
    name: "pedro-ia"
  }, {
    path: "/pedro/interface",
    component: _09a09edd,
    name: "pedro-interface"
  }, {
    path: "/pedro/server",
    component: _a6a54516,
    name: "pedro-server"
  }, {
    path: "/pedro/interface/butNonValide",
    component: _da51304c,
    name: "pedro-interface-butNonValide"
  }, {
    path: "/pedro/interface/pageblanche",
    component: _f0318cb6,
    name: "pedro-interface-pageblanche"
  }, {
    path: "/projects/:id",
    component: _d85e971e,
    name: "projects-id"
  }, {
    path: "/",
    component: _fb53b994,
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