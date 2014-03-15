'use strict';

angular.module('EduRateApp').controller('AdminCreateTemplateController',
['$rootScope','$scope', 'adminFactory', '$location',
function($rootScope, $scope, adminFactory, $location){

	$scope.userObject = $rootScope.userObject;
	$(':radio').radio();

	$scope.evaluationTemplate = {
		TitleIS: $scope.TitleIS,
		TitleEN: $scope.TitleEN,
		IntroTextIS: $scope.IntroTextIS,
		IntroTextEN: $scope.IntroTextEN,
		CourseQuestions: [],
		TeacherQuestions: []
	};

	function newTextCourseQuestion(iTextIS,iTextEN,iImageURL){
		var newTextCourseQuestion = {
			TextIS: iTextIS,
			TextEN: iTextEN,
			ImageURL : iImageURL,
			Type : 'text',
			Answers : []
		};

		return newTextCourseQuestion;
	}

	function newTextTeacherQuestion(iTextIS,iTextEN,iImageURL){
		var newTextTeacherQuestion = {
			TextIS: iTextIS,
			TextEN: iTextEN,
			ImageURL : iImageURL,
			Type : 'text',
			Answers : []
		};

		return newTextTeacherQuestion;
	}


	//fall sem er keyrt þegar user gerir save
	$scope.saveText = function(){
		//athuga hvort sé hakað í course eða teacher
		if($('#courseCheck').prop('checked'))
		{
			var newT = newTextCourseQuestion(
							$scope.CTextIS,
							$scope.CTextEN,
							$scope.CimageURL);

			$scope.evaluationTemplate.CourseQuestions.push(newT);
			console.log('the template so far :' + $scope.evaluationTemplate);
		}
		else if($('#teacherCheck').prop('checked'))
		{
			var newT = newTextTeacherQuestion(
							$scope.CTextIS,
							$scope.CTextEN,
							$scope.CimageURL);

			$scope.evaluationTemplate.TeacherQuestions.push(newT);
		}
		else
		{
			alert('Þú verður að velja annaðhvort námskeið eða kennara');
		}
	}


	$scope.CourseAnswers = {
		TextIS: '',
		TextEN: '',
		ImageURL: '',
		Weight: '',
	};

	$scope.TeacherAnswers = {
		TextIS: '',
		TextEN: '',
		ImageURL: '',
		Weight: '',
	};


	//þegar ýtt er á save á að keyra þetta (s.s.notandi vill save-a allt templateið)
	//þá þarf líklega líka að núllstilla evaluationTemplate objectið
	//adminFactory.newEvaluationTemplate($scope.evaluationTemplate);

}]);