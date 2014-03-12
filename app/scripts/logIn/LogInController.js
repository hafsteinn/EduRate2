'use strict';

angular.module('EduRateApp').controller('LogInController',
['$rootScope','$scope', 'loginFactory', '$location',
function($rootScope, $scope, loginFactory, $location){

	$scope.userData = {
		user: 'hafsteinn11',
		pass: '123456'
	};

	$scope.logIn = function(){
		//apiFactory.logIn($scope.user.userName, $scope.user.password);
		if($scope.userData.user && $scope.userData.pass)
		{
			loginFactory.logIn($scope.userData).then(function(data){
				//TODO: Change from $rootScope to an angular value
				$rootScope.tokenValue = data.token;
				$location.path('my/courses/').replace();
			});
		}
	};

}]);