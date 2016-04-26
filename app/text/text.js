'use strict';

angular.module('myApp.text', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/text', {
    templateUrl: 'text/text.html',
    controller: 'textCtrl'
  });
}])

.controller('textCtrl', ['$scope', '$location', function($scope, $location) {
	console.log("textCtrl");

//	$scope.new = function(event){
//		console.log("new clicked");
//	}

	
	
}]);