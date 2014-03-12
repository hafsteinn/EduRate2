'use strict';

angular.module('EduRateApp').controller('LogInController',
['$scope', 'apiFactory', '$location',
function($scope, apiFactory, $location){

	$scope.userData = {
		user: '',
		pass: ''
	};

	$scope.logIn = function(){
		//apiFactory.logIn($scope.user.userName, $scope.user.password);
		if($scope.userData.user && $scope.userData.pass)
		{
			apiFactory.logIn($scope.userData).success(function(){
				$location.path('/my/courses').replace();
			});
		}
	};

}]);