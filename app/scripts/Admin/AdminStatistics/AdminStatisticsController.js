'use strict';

angular.module('EduRateApp').controller('AdminStatisticsController',
['$rootScope','$scope', 'adminFactory', '$location', '$routeParams',
function($rootScope, $scope, adminFactory, $location, $routeParams){

	$scope.userObject = $rootScope.userObject;

	adminFactory.getResults($rootScope.evalID).then(function(data){

		$scope.templateTitle = data.TemplateTitleIS;

		$scope.CourseTextQuestions = [];

		data.Courses.Questions.forEach(function(entry){

			if(entry.Type === 'text')
			{
				$scope.CourseTextQuestions.push(entry);
			}
		});

	});


	//hér þarf að vinna úr gögnum sem komu úr getResults, vista í breytur og senda í directive til birtingar

}]);