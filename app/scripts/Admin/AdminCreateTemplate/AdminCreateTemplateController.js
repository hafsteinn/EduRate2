'use strict';

angular.module('EduRateApp').controller('AdminCreateTemplateController',
['$rootScope','$scope', 'adminFactory', '$location',
function($rootScope, $scope, adminFactory, $location){

	var numberOfexQ = 0;
	$scope.numberOfexQuistions = [1,2,3,4];
	$scope.userObject = $rootScope.userObject;
	//change the number of X Questions
	$("#numberOfexQuestion").click(function(e) {
		numberOfexQ = $("#numberOfexQuestion :selected").val();
		console.log(numberOfexQ);	

		//set the number of X questions as selected
		for (var i = 1; i <= numberOfexQ; i++) {
			$scope.numberOfexQuistions.push(i);
		};
		console.log($scope.numberOfexQuistions);
	}); 


	
	$(':radio').radio();

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