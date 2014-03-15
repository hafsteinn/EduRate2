'use strict';

angular.module('EduRateApp').controller('LogInController',
['$rootScope','$scope', 'loginFactory', '$location',
function($rootScope, $scope, loginFactory, $location){

	$scope.userData = {
		user: 'admin',
		pass: '1234567'
	};

	$scope.loginfailed = true;

	$scope.logIn = function(){
		//apiFactory.logIn($scope.user.userName, $scope.user.password);
		if($scope.userData.user && $scope.userData.pass)
		{
			loginFactory.logIn($scope.userData).then(function(data){
				//TODO: Change from $rootScope to an angular value
				//I think its considered pretty bad to use $rootscope alltogether
				$rootScope.tokenValue = data.token;
				$rootScope.userObject = data.userObject;

				if(data.role === 'student')
				{
					$location.path('my/courses/').replace();
				}
				else if(data.role === 'admin')
				{
					$location.path('admin/').replace();
				}	
			}, function()
			{
				$scope.loginfailed = false;
			});
		}
	};
	$scope.hideError = function(){
		alert("Clicked");
		$scope.loginfailed = true;
	};

}]);

