'use strict';

angular.module('EduRateApp').factory('adminFactory',
['$rootScope','$http', '$q','API_URL',
function ($rootScope,$http, $q,API_URL) {

	return {
			//get all evaluation templates
			evaluationTemplates: function () {
				var deferred = $q.defer();
				$http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.tokenValue;
				$http.get(API_URL + 'evaluationtemplates/')
				.success(function(data, status, headers) {
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
					deferred.resolve(data);
				}).error(function() {
					deferred.reject();
				});

				return deferred.promise;
			}
		};
}]);