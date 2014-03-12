'use strict';

angular.module('EduRateApp').controller('myCoursesController',
['$scope', 'apiFactory', '$location',
function($scope, apiFactory, $location){

	//TODO: we need to add the session Token to every server communication from now on.

	$scope.myCourses = [];

	//TODO: call a function in the factory that populates the myCourses variable with the current logged in users courses.

}]);