'use strict';

angular.module('EduRateApp').factory('studentFactory',
['$rootScope','$http', '$q','API_URL',
function ($rootScope,$http, $q,API_URL) {

	var ID, CourseID, NameIS, NameEN, DateBegin, DateEnd, CourseNameIS, CourseNameEN, Semester, EvalID, TitleIS,
		TitleEN, IntoTextIS, IntroTextEN, QuestionID, TeacherSSN, Value, Results;

	return {

			getID: function() {
				return ID;
			},
			getCourseID: function() {
				return CourseID;
			},
			getNameIS: function() {
				return NameIS;
			},
			getNameEN: function() {
				return NameEN;
			},
			getDateBegin: function() {
				return DateBegin;
			},
			getDateEnd: function() {
				return DateEnd;
			},
			getCourseNameIS: function() {
				return CourseNameIS;
			},
			getCourseNameEN: function() {
				return CourseNameEN;
			},
			getSemester: function() {
				return Semester;
			},
			getEvalID: function() {
				return EvalID;
			},
			getTitleIS: function() {
				return TitleIS;
			},
			getTitleEN: function() {
				return TitleEN;
			},
			getIntoTextIS: function() {
				return IntoTextIS;
			},
			getIntroTextEN: function() {
				return IntroTextEN;
			},
			getQuestionID: function() {
				return QuestionID;
			},
			getTeacherSSN: function() {
				return TeacherSSN;
			},
			getValue: function() {
				return Value;
			},
			getResults: function() {
				return Results;
			},

			myCourses: function () {
				var deferred = $q.defer();
				$http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.tokenValue;
				$http.get(API_URL + 'my/courses/')
				.success(function(data, status, headers) {
					ID = data.ID;
					CourseID = data.CourseID;
					NameIS = data.NameIS;
					NameEN = data.NameEN;
					DateBegin = data.DateBegin;
					DateEnd = data.DateEnd;

					deferred.resolve(data);
				}).error(function() {
					deferred.reject();
				});

				return deferred.promise;
			},

			myEvaluations: function () {
				var deferred = $q.defer();
				$http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.tokenValue;
				$http.get(API_URL + 'my/evaluations/')
				.success(function(data, status, headers) {
					ID = data.ID;
					CourseID = data.CourseID;
					CourseNameIS = data.CourseNameIS;
					CourseNameEN = data.CourseNameEN;
					Semester = data.Semester;

					deferred.resolve(data);
				}).error(function() {
					deferred.reject();
				});

				return deferred.promise;
			},

			currentEvaluation: function (courseID, semester, evalID) {
				var deferred = $q.defer();
				$http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.tokenValue;
				$http.get(API_URL + 'courses/' + courseID + '/' + semester + '/evaluations/' + evalID)
				.success(function(data, status, headers) {
					ID = data.ID;
					CourseID = courseID;
					Semester = semester;
					EvalID = evalID;
					TitleIS = data.TitleIS;
					TitleEN = data.TitleEN;
					IntoTextIS = data.IntoTextIS;
					IntroTextEN = data.IntroTextEN;

					deferred.resolve(data);
				}).error(function() {
					deferred.reject();
				});

				return deferred.promise;
			},
			saveEvaluation: function (courseID, semester, evalID, results) {
				var deferred = $q.defer();
				$http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.tokenValue;
				$http.post(API_URL + 'courses/' + courseID + '/' + semester + '/evaluations/' + evalID, results)
				.success(function(data, status, headers) {
					CourseID = courseID;
					Semester = semester
					EvalID = evalID;
					Results = results;
					QuestionID = data.QuestionID;
					TeacherSSN = data.TeacherSSN;
					Value = data.Value;

					deferred.resolve(data);
				}).error(function() {
					deferred.reject();
				});

				return deferred.promise;
			}
		};
}]);