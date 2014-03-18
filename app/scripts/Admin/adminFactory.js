'use strict';

angular.module('EduRateApp').factory('adminFactory',
['$rootScope','$http', '$q','API_URL',
function ($rootScope,$http, $q,API_URL) {

	var ID, TemplateTitleIS, TemplateTitleEN, StartDate, EndDate, Status, TitleIS, TitleEN, IntroTextIS, IntroTextEN, TempID, EvaluationTemplate,
		TemplateID, NewEval;

	return {

			getID: function() {
				return ID;
			},
			getTemplateTitleIS: function() {
				return TemplateTitleIS;
			},
			getTemplateTitleEN: function() {
				return TemplateTitleEN;
			},
			getStartDate: function() {
				return StartDate;
			},
			getEndDate: function() {
				return EndDate;
			},
			getStatus: function() {
				return Status;
			},
			getTitleIS: function() {
				return TitleIS;
			},
			getTitleEN: function() {
				return TitleEN;
			},
			getIntroTextIS: function() {
				return IntroTextIS;
			},
			getIntroTextEN: function() {
				return IntroTextEN;
			},
			getTempID: function() {
				return TempID;
			},
			getEvaluationTemplate: function() {
				return EvaluationTemplate;
			},
			getTemplateID: function() {
				return TemplateID;
			},
			getNewEval: function() {
				return NewEval;
			},



			//get all evaluation templates
			evaluationTemplates: function () {
				var deferred = $q.defer();
				$http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.tokenValue;
				$http.get(API_URL + 'evaluationtemplates/')
				.success(function(data, status, headers) {
					ID = data.ID;
					TemplateTitleIS = data.TemplateTitleIS;
					TemplateTitleEN = data.TemplateTitleEN;
					StartDate = data.StartDate;
					EndDate = data.EndDate;
					Status = data.Status;

					deferred.resolve(data);
				}).error(function() {
					deferred.reject();
				});

				return deferred.promise;
			},	
			//get a single template by ID
			getevaluationTemplate: function (tempID) {
				var deferred = $q.defer();
				$http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.tokenValue;
				$http.get(API_URL + 'evaluationtemplates/' + tempID)
				.success(function(data, status, headers) {
					ID = data.ID;
					TitleIS = data.TitleIS;
					TitleEN = data.TitleEN;
					IntroTextIS = data.IntroTextIS;
					IntroTextEN = data.IntroTextEN;
					TempID = tempID;

					deferred.resolve(data);
				}).error(function() {
					deferred.reject();
				});

				return deferred.promise;
			},
			//create a new evaluation template
			newEvaluationTemplate: function (evaluationTemplate) {
				var deferred = $q.defer();
				$http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.tokenValue;
				$http.post(API_URL + 'evaluationtemplates/', evaluationTemplate)
				.success(function(data, status, headers) {
					ID = data.ID;
					TitleIS = data.TitleIS;
					TitleEN = data.TitleEN;
					IntroTextIS = data.IntroTextIS;
					IntroTextEN = data.IntroTextEN;
					EvaluationTemplate = evaluationTemplate;

					deferred.resolve(data);
				}).error(function() {
					console.log('somethings wrong');
					deferred.reject();
				});

				return deferred.promise;
			},
			newEvaluation: function(newEval){
				var deferred = $q.defer();
				$http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.tokenValue;
				$http.post(API_URL + 'evaluations/', newEval)
				.success(function(data, status, headers) {
				TemplateID = data.TemplateID;
				StartDate = data.StartDate;
				EndDate = data.EndDate;
				NewEval = newEval;
					deferred.resolve(data);
				}).error(function() {
					deferred.reject();
				});

				return deferred.promise;
			},
			getResults: function(evalID){
				var deferred = $q.defer();
				$http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.tokenValue;
				$http.get(API_URL + 'evaluations/' + evalID + '/')
				.success(function(data, status, headers) {
					deferred.resolve(data);
				}).error(function() {
					deferred.reject();
				});

				return deferred.promise;
			},
			getEvaluations: function(){
				var deferred = $q.defer();
				$http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.tokenValue;
				$http.get(API_URL + 'evaluations')
				.success(function(data, status, headers) {
					deferred.resolve(data);
				}).error(function() {
					deferred.reject();
				});

				return deferred.promise;
			}
		};
}]);