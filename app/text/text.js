var app = angular.module('myApp.text', ['angularModalService' , 'ngRoute']);



app.controller('textCtrl', ['$scope', '$rootScope','$location', 'ModalService', function($scope, $rootScope, $location, ModalService) {
    console.log("textCtrl");
    $scope.show = function() {
        ModalService.showModal({
            templateUrl: 'text/text1.html',
            controller: "ModalController"
        }).then(function(modal) {
        	 console.log("modal");
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
                $rootScope.flag=1;
                $location.path( "/home" );
            });
        });
    };
    
}]);

app.controller('ModalController', function($scope, close) {
   console.log("Ctrl");
 $scope.close = function(result) {
 	console.log("Close");
 	close(result, 500); // close, but give 500ms for bootstrap to animate
 };

});