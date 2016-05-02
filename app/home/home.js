'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', '$rootScope','$location', '$window', function($scope,$rootScope, $location, $window) {
	console.log("homeCtrl");
	if ($rootScope.flag ===1){
		$rootScope.flag =0;
		$window.location.reload();
	}

//	$scope.new = function(event){
//		console.log("new clicked");
//	}

	$scope.new = function ( path ) {
  		$location.path( path );
	};
}]);