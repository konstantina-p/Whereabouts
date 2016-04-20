'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.home',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
 	$routeProvider.when('/', {
 		controller: 'HomeCtrl',
 		templateUrl: 'home/home.html'
 	})
	$routeProvider.otherwise({redirectTo: '/login'});
}]);
