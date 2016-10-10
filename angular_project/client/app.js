angular.module('prensa', ['ui.router']);

angular.module('prensa').config(
	function routeConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('landing', {
				url: '/',
				controller: 'Controller as ctrl',
				templateUrl: 'appCtrl.html'
			});
		$stateProvider
			.state('national', {
				url: '/national',
				controller: 'Controller as ctrl',
				templateUrl: 'appCtrl.html'
			});
		$stateProvider
			.state('magazine', {
				url: '/magazine',
				controller: 'Controller as ctrl',
				templateUrl: 'appCtrl.html'
			});
		$stateProvider
			.state('digital', {
				url: '/digital',
				controller: 'Controller as ctrl',
				templateUrl: 'appCtrl.html'
			});
		$stateProvider
			.state('sport', {
				url: '/sport',
				controller: 'Controller as ctrl',
				templateUrl: 'appCtrl.html'
			});
		$urlRouterProvider.otherwise('/');
	}
);