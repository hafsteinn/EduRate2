'use strict';

angular.module('EduRateApp').factory('studentFactory',
['$rootScope','$http', '$q','API_URL',
function ($rootScope,$http, $q,API_URL) {

	return {
			myCourses: function () {
				var deferred = $q.defer();
				$http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.tokenValue;
				$http.get(API_URL + 'my/courses/')
				.success(function(data, status, headers) {
					deferred.resolve(data);
				}).error(function() {
					deferred.reject();
				});

				return deferred.promise;
			}
		};
}]);