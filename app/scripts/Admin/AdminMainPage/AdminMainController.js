'use strict';

angular.module('EduRateApp').controller('AdminMainController',
['$rootScope','$scope', 'adminFactory', '$location',
function($rootScope, $scope, adminFactory, $location){

	$scope.userObject = $rootScope.userObject;

}]);