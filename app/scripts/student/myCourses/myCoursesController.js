'use strict';

angular.module('EduRateApp').controller('myCoursesController',
['$routeParams','$rootScope','$scope', 'studentFactory', '$location',
function($routeParams, $rootScope, $scope, studentFactory, $location){

	studentFactory.myCourses().then(function(data){
		$scope.myCourses = data;
	});

	var courseId, semester, evalID;

	$scope.goToEval = function(courseID){

		console.log('setting');
		$rootScope.currentEvalData = 'ready';

		studentFactory.myEvaluations().then(function(dataO){

			dataO.forEach(function(entry){
				if(entry.CourseID === courseID)
				{
					semester = entry.Semester;
					evalID = entry.ID;

					studentFactory.currentEvaluation(courseId, semester, evalID).then(function(data){
						$rootScope.currentEvalData = data;
					});

					$location.path('/courses/' + courseID + '/' + semester + '/evaluations/' + evalID);
				}
			});
		});
	};

	


}]);