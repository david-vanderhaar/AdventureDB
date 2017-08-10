import VueRouter from 'vue-router';

let routes = [
	{
		path: '/',
		component: require('./components/AdventurerDashboard.vue'),
	},
	{
		path: '/create-adventurer',
		component: require('./components/CreateAdventurer.vue'),
	},
	{
		path: '/map-dashboard',
		component: require('./components/MapDashboard.vue'),
	},
	{
		path: '/about',
		component: require('./components/About.vue'),
	},
];

export default new VueRouter({
	routes,
	linkActiveClass: 'active',
});