'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', '$location', function($scope, $location) {
	console.log("homeCtrl");
//	$scope.new = function(event){
//		console.log("new clicked");
//	}

	$scope.new = function ( path ) {
  		$location.path( path );
	};
}]);