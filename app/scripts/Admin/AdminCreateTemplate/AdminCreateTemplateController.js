'use strict';

angular.module('EduRateApp').controller('AdminCreateTemplateController',
['$rootScope','$scope', 'adminFactory', '$location',
function($rootScope, $scope, adminFactory, $location){

	$scope.userObject = $rootScope.userObject;

	$scope.evaluationTemplate = {
		TitleIS: 'titill',
		TitleEN: 'title',
		IntroTextIS: 'Inngangur',
		IntroTextEN: 'Intro text',
		CourseQuestions: [],
		TeacherQuestions: []
	}

	//this function creates a new evaluation template
	//adminFactory.newEvaluationTemplate($scope.evaluationTemplate);

}]);