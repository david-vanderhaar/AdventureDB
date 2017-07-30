import VueRouter from 'vue-router';

let routes = [
	{
		path: '/create',
		component: require('./components/Home.vue'),
	},
];

export default new VueRouter({
	routes
});