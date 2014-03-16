'use strict';

angular.module('EduRateApp').controller('AdminGetEvaluationsController',
['$rootScope','$scope', 'adminFactory', '$location', '$routeParams',
function($rootScope, $scope, adminFactory, $location, $routeParams){

	$scope.userObject = $rootScope.userObject;

	var activeEvaluations = [];

	adminFactory.getEvaluations().then(function(data){

		data.forEach(function(entry){
			if(entry.Status === 'new')
			{
				activeEvaluations.push(entry);
			}
		});

		$scope.allEvaluations = activeEvaluations;
	});

	$scope.goToEvaluation = function(evalID){
		$rootScope.evalID = evalID;
		$location.path('/evaluations/evalID');
	};

}]);