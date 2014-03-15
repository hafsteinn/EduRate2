'use strict';

angular.module('EduRateApp').controller('AdminCreateTemplateController',
['$rootScope','$scope', 'adminFactory', '$location',
function($rootScope, $scope, adminFactory, $location){

	$scope.userObject = $rootScope.userObject;

	$scope.Answers = {
		TextIS: '',
		TextEN: '',
		ImageURL: '',
		Weight: '',
	};

	$scope.CourseQuestions = {
		TextIS: '',
		TextEN: '',
		ImageURL: '',
		Type: '',
		Answers: []
	};

	$scope.evaluationTemplate = {
		TitleIS: '',
		TitleEN: '',
		IntroTextIS: '',
		IntroTextEN: '',
		CourseQuestions: $scope.CourseQuestions,
		TeacherQuestions: []
	}

	$scope.showCourseTextQuestion = function(){
		$('.textQuestion').show();
	};

	$scope.hideCourseTextQuestion = function(){
		$('.textQuestion').hide();
	};

	//this function creates a new evaluation template
	//adminFactory.newEvaluationTemplate($scope.evaluationTemplate);

}]);