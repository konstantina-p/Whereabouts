'use strict';

var app=angular.module('myApp.login', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
  });
}])

app.controller('loginCtrl', ['$scope', '$firebaseSimpleLogin', function($scope, $firebaseSimpleLogin, $location) {
	$scope.SignIn = function(event) {
	event.preventDefault();  // To prevent form refresh
    var username = $scope.user.email;
    var password = $scope.user.password;
     
    // Auth Logic will be here
    var firebaseObj = new Firebase("https://blinding-fire-132.firebaseio.com/"); //crate a firebase instance
    var loginObj = $firebaseSimpleLogin(firebaseObj); //create a $firebaseSimpleLogin instance	
	loginObj.$login('password', {
            email: username,
            password: password
        })
        .then(function(user) {
            // Success callback
            console.log('Authentication successful');
            //redirect to home
            //$location.path('/home');
        }, function(error) {
            // Failure callback
            console.log('Authentication failure');
            // add code here to add json element to login page
        });
//	$scope.check = function() {
 //   console.log("email: " + $scope.email);
	//console.log("password: " + $scope.password);
  	//}
  }
}]);
