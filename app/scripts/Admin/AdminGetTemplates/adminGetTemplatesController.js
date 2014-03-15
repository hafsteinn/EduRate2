'use strict';

angular.module('EduRateApp').controller('AdminGetTemplatesController',
['$rootScope','$scope', 'adminFactory', '$location',
function($rootScope, $scope, adminFactory, $location){

	$scope.userObject = $rootScope.userObject;

	adminFactory.evaluationTemplates().then(function(data){
		$scope.allTemplates = data;
	});

$scope.sendEvaluation = function(id){
	var newEvaluation = {
		TemplateID: id,
		StartDate: $scope.StartDate,
		EndDate: $scope.EndDate
	};
}

}]);