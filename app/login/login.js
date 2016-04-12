'use strict';

var app=angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
  });
}])

app.controller('loginCtrl', ['$scope', function($scope) {
	$scope.check = function() {
    console.log("email: " + $scope.email);
	console.log("password: " + $scope.password);
  	}
}]);
