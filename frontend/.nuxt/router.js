import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1cb5c422 = () => interopDefault(import('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _b404797e = () => interopDefault(import('../pages/policy.vue' /* webpackChunkName: "pages/policy" */))
const _2eb98ad5 = () => interopDefault(import('../pages/web.vue' /* webpackChunkName: "pages/web" */))
const _8d5c39da = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contacts",
    component: _1cb5c422,
    name: "contacts"
  }, {
    path: "/policy",
    component: _b404797e,
    name: "policy"
  }, {
    path: "/web",
    component: _2eb98ad5,
    name: "web"
  }, {
    path: "/",
    component: _8d5c39da,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
