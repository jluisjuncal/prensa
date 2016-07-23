angular.module('prensa', []);
//angular.module('cashFlow', ['ngRoute']);

/*function configurarRutas($routeProvider) {
	$routeProvider
		.when('/', {
			// Para cada ruta se declara la vista y el controlador asociados
			controller: 'CajaCtrl',
			controllerAs: 'caja',
			templateUrl: 'total.html'
		})
		.when('/nuevo', {
			controller: 'CajaCtrl',
			controllerAs: 'caja',
			templateUrl: 'nuevo.html'
		})
		.when('/lista', {
			controller: 'CajaCtrl',
			controllerAs: 'caja',
			templateUrl: 'lista.html'
		})
		.otherwise({
			// en caso de peticiones no contempladas podemos redirigir
			redirectTo: '/'
		});
}*/

// Se registra la función como un configurador del módulo
//angular.module('cashFlow').config(configurarRutas);