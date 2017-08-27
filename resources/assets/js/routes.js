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

	{
		path: '/battlesim',
		component: require('./components/BattleSim.vue'),
	},
	{
		path: '/battlesimv2',
		component: require('./components/BattleSimV2.vue'),
	},
	{
		path: '/battlesimv3',
		component: require('./components/BattleSimV3.vue'),
	},
	{
		path: '/battlesimv4',
		component: require('./components/BattleSimV4.vue'),
	},
];

export default new VueRouter({
	routes,
	linkActiveClass: 'active',
});