import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { HTTP as axios } from './axios/axios'
import VueProgressiveImage from 'progressive-image/dist/vue'

Vue.prototype.$http = axios

Vue.use( Vuex )
Vue.use( VueRouter )
Vue.use( VueProgressiveImage, {
	removePreview: true
} )

Vue.config.debug = true
Vue.config.devTools = true

//Import all vue components
import home from './components/App.vue'
Vue.component( 'home', home )
//Create main vue component
const App = Vue.extend( {
	template: 
		'<main><router-view></router-view></main>',
	computed: {
	}
} )

//Define route for vue app
//ref : http://router.vuejs.org/en/
const router = new VueRouter( {
	mode: 'history',
	routes: [
		{ path: '/', name: 'home', component: home }
	]
} )

//Define vuex store
const store = new Vuex.Store( {
	state: {
		title: 'Hello World'
	}
} )

//Create instance of main component
new App( {
	store,
	router
} ).$mount( '#app' )

