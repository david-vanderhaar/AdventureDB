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
		path: '/engaged',
		component: require('./components/Engaged.vue'),
	},
];

export default new VueRouter({
	routes
});