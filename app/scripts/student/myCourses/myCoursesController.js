'use strict';

angular.module('EduRateApp').controller('myCoursesController',
['$routeParams','$rootScope','$scope', 'studentFactory', '$location',
function($routeParams, $rootScope, $scope, studentFactory, $location){

	$(':checkbox').checkbox();

	studentFactory.myCourses().then(function(data){
		$scope.myCourses = data;
	});

	

	$scope.goToEval = function(courseID){

		$routeParams.CourseID = courseID;

		console.log('setting');
		$rootScope.currentEvalData = 'ready';

		studentFactory.myEvaluations().then(function(dataO){
			dataO.forEach(function(entry){
				if(entry.CourseID === courseID)
				{
					$routeParams.Semester = entry.Semester;
					$routeParams.evalID = entry.ID;

					studentFactory.currentEvaluation($routeParams.CourseID,
													 $routeParams.Semester,
													 $routeParams.evalID).then(function(data){
						$rootScope.currentEvalData = data;
					});

					$location.path('/courses/' + courseID + '/' + $routeParams.Semester + '/evaluations/' + $routeParams.evalID);
				}
			});
		});
	};


	$scope.saveEval = function(){

		var ResultArray = [];

		var oneAnswer = {};

		//first, collect data from all course questions
		$rootScope.currentEvalData.CourseQuestions.forEach(function(ques){

			if(ques.Type === 'text')
			{
				var val = $('#' + ques.ID).val();

				oneAnswer = {
					QuestionID: ques.ID,
					TeacherSSN: '',
					value: val
				};

				ResultArray.push(oneAnswer);

			}
			else if(ques.Type === 'multiple')
			{
				ques.Answers.forEach(function(entry){
					if($('#' + entry.ID).prop('checked'))
					{
						oneAnswer = {
							QuestionID: ques.ID,
							TeacherSSN: '',
							value: entry.Weight
						};

						ResultArray.push(oneAnswer);
					}
				});
			}
		});

		//then collect data for all teacher questions
		$rootScope.currentEvalData.TeacherQuestions.forEach(function(ques){

			if(ques.Type === 'text')
			{
				var val = $('#' + ques.ID).val();

				oneAnswer = {
					QuestionID: ques.ID,
					value: val
				};

				ResultArray.push(oneAnswer);

			}
			else if(ques.Type === 'multiple')
			{
				ques.Answers.forEach(function(entry){
					if($('#' + entry.ID).prop('checked'))
					{
						oneAnswer = {
							QuestionID: ques.ID,
							value: entry.Weight
						};

						ResultArray.push(oneAnswer);
					}
				});
			}
		});

		studentFactory.saveEvaluation($routeParams.CourseID, $routeParams.Semester, $routeParams.evalID, ResultArray).then(function(){
			$location.path('my/courses/');
		});

	};



}]);
