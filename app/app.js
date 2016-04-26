'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.home',
  'myApp.new',
  'myApp.text',
  'myApp.version',
]).
config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
 	$routeProvider.when('/', {
 		controller: 'loginCtrl',
 		templateUrl: 'login/login.html'
 	})
 	$routeProvider.when('/home', {
 		controller: 'HomeCtrl',
 		templateUrl: 'home/home.html'
 	})
 	$routeProvider.when('/new', {
 		controller: 'newCtrl',
 		templateUrl: 'new/new.html'
 	})
 	$routeProvider.when('/text', {
 		controller: 'textCtrl',
 		templateUrl: 'text/text.html'
 	})
	$routeProvider.otherwise({redirectTo: '/login'});


}]);

