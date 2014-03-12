'use strict';

angular.module('EduRateApp').controller('myCoursesController',
['$scope', 'studentFactory', '$location',
function($scope, studentFactory, $location){

	studentFactory.myCourses().then(function(data){
		$scope.myCourses = data;
	});
	
}]);