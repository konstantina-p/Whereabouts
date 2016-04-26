'use strict';

angular.module('myApp.new', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/new', {
    templateUrl: 'new/new.html',
    controller: 'newCtrl'
  });
}])

.controller('newCtrl', ['$scope', '$location', function($scope, $location) {
	console.log("newCtrl");
//	$scope.new = function(event){
//		console.log("new clicked");
//	}

	$scope.close = function ( path ) {
  		$location.path( path );
	};
	$scope.text = function ( path ) {
		console.log("text");
  		$location.path( path );
	};
	$scope.image = function ( path ) {
		console.log("image");
  		//$location.path( path );
	};
	$scope.video = function ( path ) {
		console.log("video");
  		//$location.path( path );
	};
}]);