'use strict';

angular.module('EduRateApp').controller('AdminGetTemplatesController',
['$rootScope','$scope', 'adminFactory', '$location',
function($rootScope, $scope, adminFactory){

	$scope.userObject = $rootScope.userObject;
	var currentTemplate;
	var StartDateInput,EndDateInput;
	var StartDate,EndDate;

	adminFactory.evaluationTemplates().then(function(data){
		$scope.allTemplates = data;
	});

	$scope.showDateInput = function(id, name){
		$('#dateInput').show();
		currentTemplate = id;
		$scope.currentTemplateName = name;
		console.log("name " + currentTemplate);
	};

	$scope.sendEvaluation = function(){
		var newEval = {
			TemplateID: currentTemplate,
			StartDate: StartDate,
			EndDate: EndDate
		};
		adminFactory.newEvaluation(newEval);
		$('dateInput').hide();
	};


	$('#startDateInput').datetimepicker({
		onChangeDateTime:function(dp,$input){
			StartDateInput = $input.val();
			StartDate = StartDateInput.replace(/\//g, '-');
		}
	});

		$('#endDateInput').datetimepicker({
		onChangeDateTime:function(dp,$input){
			EndDateInput = $input.val();
			EndDate = EndDateInput.replace(/\//g, '-');
		}
	});


}]);