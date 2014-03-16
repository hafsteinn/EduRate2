'use strict';

angular.module('EduRateApp').controller('AdminStatisticsController',
['$rootScope','$scope', 'adminFactory', '$location', '$routeParams',
function($rootScope, $scope, adminFactory, $location, $routeParams){

	$scope.userObject = $rootScope.userObject;

	adminFactory.getResults($rootScope.evalID).then(function(data){
		$scope.results = data;
		debugger
	});

	$scope.sendEvaluation = function(){
		var newEval = {
			TemplateID: currentTemplate,
			StartDate: StartDate,
			EndDate: EndDate
		};
		adminFactory.newEvaluation(newEval);
		$('dateInput').hide();
	};

}]);