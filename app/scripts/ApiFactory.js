'use strict';

angular.module('EduRateApp').factory('apiFactory',
['$rootScope','$http',
function ($rootScope,$http) {

	//TODO: change to angular constant which is initialized in app.js
	var apiURL = 'http://project3api.haukurhaf.net/api/v1/';

	return {
		logIn: function (data) {
			return $http({
				url: apiURL + 'login/',
				data: {'user':data.user,'pass':data.pass},
				method: 'POST'
			});
		},
		myCourses: function() {
			return $http({
				url: apiURL + 'my/courses/',
				method: 'GET'
			});
		}
	};
}]);