'use strict';



angular.module('EduRateApp').controller('AdminCreateTemplateController',
['$rootScope','$scope', 'adminFactory', '$location',
function($rootScope, $scope, adminFactory, $location){

	$scope.userObject = $rootScope.userObject;
	$(':radio').radio();

	$scope.range = function() {
        return new Array($scope.numberOfQuestions);
    };

	$scope.evaluationTemplate = {
		TitleIS: $scope.TitleIS,
		TitleEN: $scope.TitleEN,
		IntroTextIS: $scope.IntroTextIS,
		IntroTextEN: $scope.IntroTextEN,
		CourseQuestions: [],
		TeacherQuestions: []
	};

	console.log($scope.asdf);

	function newTextCourseQuestion(iType, iTextIS,iTextEN,iImageURL){
		var newTextCourseQuestion = {
			TextIS: iTextIS,
			TextEN: iTextEN,
			ImageURL : iImageURL,
			Type : iType,
			Answers : []
		};

		return newTextCourseQuestion;
	}

	function newTextTeacherQuestion(iType, iTextIS,iTextEN,iImageURL){
		var newTextTeacherQuestion = {
			TextIS: iTextIS,
			TextEN: iTextEN,
			ImageURL : iImageURL,
			Type : iType,
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
							'text',
							$scope.CTextIS,
							$scope.CTextEN,
							$scope.CimageURL);

			$scope.evaluationTemplate.CourseQuestions.push(newT);
			console.log('the template so far :' + $scope.evaluationTemplate);
		}
		else if($('#teacherCheck').prop('checked'))
		{
			var newT = newTextTeacherQuestion(
							'text',
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

		//fall sem er keyrt þegar user gerir save
	$scope.saveMult = function(){
		//athuga hvort sé hakað í course eða teacher
		if($('#courseCheck').prop('checked'))
		{
			var newT = newTextCourseQuestion(
							'multiple',
							$scope.CMTextIS,
							$scope.CMTextEN,
							$scope.CMimageURL);

			//populate answers array
			for(var i = 1; i <= $scope.numberOfQuestions;i++)
			{
					var mult = {
						TextIS: $('#' + i).val(),
						TextEN: '',
						ImageURL: '',
						Weight: i,
					};

					newT.Answers.push(mult);
			}

			$scope.evaluationTemplate.CourseQuestions.push(newT);
		}
		else if($('#teacherCheck').prop('checked'))
		{
			var newT = newTextTeacherQuestion(
							'multiple',
							$scope.CMTextIS,
							$scope.CMTextEN,
							$scope.CMimageURL);

			//populate answers array
			for(var i = 1; i <= $scope.numberOfQuestions;i++)
			{
					var mult = {
						TextIS: $('#' + i).val(),
						TextEN: '',
						ImageURL: '',
						Weight: i,
					};

					newT.Answers.push(mult);
			}

			$scope.evaluationTemplate.TeacherQuestions.push(newT);
		}
		else
		{
			alert('Þú verður að velja annaðhvort námskeið eða kennara');
		}
	}

	$scope.saveTemplate = function(){
		adminFactory.newEvaluationTemplate($scope.evaluationTemplate);
	};

	//þegar ýtt er á save á að keyra þetta (s.s.notandi vill save-a allt templateið)
	//þá þarf líklega líka að núllstilla evaluationTemplate objectið
	//adminFactory.newEvaluationTemplate($scope.evaluationTemplate);

}]);