'use strict';

angular.module('EduRateApp').factory('apiFactory',
['$rootScope','$http', '$q',
function ($rootScope,$http, $q) {

	//TODO: change to angular constant which is initialized in app.js
	var apiURL = 'http://project3api.haukurhaf.net/api/v1/';
	var username, role, token;

	return {
			getToken: function() {
				return token;
			},
			getUsername: function() {
				return username;
			},
			getRole: function() {
				return role;
			},
			logIn: function (logInUser) {
				var deferred = $q.defer();
				$http.post(apiURL + 'login/', { 'user': logInUser.user, 'pass': logInUser.pass })
				.success(function(data, status, headers) {
					username = logInUser.user;
					token = data.token;
					role = data.role;
					deferred.resolve({ username: logInUser.user, role: data.role, token: data.token });
				}).error(function() {
					deferred.reject();
				});

				return deferred.promise;
			},
			myCourses: function() {
				return $http({
					url: apiURL + 'my/courses/',
					method: 'GET'
				});
			}
		};
}]);