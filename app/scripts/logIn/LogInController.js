'use strict';

angular.module('EduRateApp').controller('LogInController',
['$scope', 'loginFactory', '$location',
function($scope, loginFactory, $location){

	$scope.userData = {
		user: 'hafsteinn11',
		pass: '123456'
	};

	$scope.logIn = function(){
		//apiFactory.logIn($scope.user.userName, $scope.user.password);
		if($scope.userData.user && $scope.userData.pass)
		{
			loginFactory.logIn($scope.userData).then(function(data){
				console.log(loginFactory.getToken());
			});
		}
	};

}]);