'use strict';

angular.module('EduRateApp').controller('LogInController',
['$scope', 'apiFactory', '$location',
function($scope, apiFactory, $location){

	$scope.userData = {
		user: 'hafsteinn11',
		pass: '123456'
	};

	$scope.logIn = function(){
		//apiFactory.logIn($scope.user.userName, $scope.user.password);
		if($scope.userData.user && $scope.userData.pass)
		{
			apiFactory.logIn($scope.userData).then(function(data){
				console.log(apiFactory.getToken());
			});
		}
	};

}]);