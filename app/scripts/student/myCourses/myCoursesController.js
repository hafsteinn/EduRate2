'use strict';

angular.module('EduRateApp').controller('myCoursesController',
['$rootScope','$scope', 'studentFactory', '$location',
function($rootScope, $scope, studentFactory, $location){

	$scope.userObject = $rootScope.userObject;

	studentFactory.myCourses().then(function(data){
		$scope.myCourses = data;
	});

}]);