angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $http) {
    $scope.data = {};

    $scope.login = function() {
		alert("Connecting to the server....");
		$http.post("http://localhost:8124")
			.success(function(data){
				
					$scope.data.message = data.message;
				
			})
			.error(function (error){
				alert("Error block);
				
			});       
    }
});


