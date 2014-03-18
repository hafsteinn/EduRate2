'use strict';

angular.module('EduRateApp').factory('loginFactory',
['$rootScope','$http', '$q','API_URL',
function ($rootScope, $http, $q,API_URL) {

	var username, role, token,userObject, pass;

	return {

			setloginfailed: function(data){
		      loginfailed = data;
		    },
		    getloginfailed: function(){
		      return loginfailed;
		    },
			getToken: function() {
				return token;
			},
			getUsername: function() {
				return username;
			},
			getPass: function() {
				return pass;
			},
			getRole: function() {
				return role;
			},
			logIn: function (logInUser) {
				var deferred = $q.defer();
				$http.post(API_URL + 'login/', { 'user': logInUser.user, 'pass': logInUser.pass })
				.success(function(data, status, headers) {
					username = logInUser.user;
					token = data.Token;
					role = data.User.Role;
					deferred.resolve({  username: logInUser.user,
										role: data.User.Role,
										token: data.Token,
										userObject: data.User});
				}).error(function() {
					deferred.reject();
				});

				return deferred.promise;
			},
		};
}]);