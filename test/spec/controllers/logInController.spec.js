'use strict';

describe('LogInController tests', function() {
	var $scope, $rootScope, controller;

	beforeEach(module('EduRateApp'));
	beforeEach(inject(function($injector, $controller) {
		$rootScope = $injector.get('$rootScope');
		$scope = $rootScope.$new();
		controller = $controller('LogInController', {
			'$scope': $scope,
		});

		$scope.userData = {
			user: 'hafsteinn11',
			pass: '123456'
		};
	}));


	it('should have something with test', function() {
		expect($scope.userData.user).toBe('hafsteinn11');
	});
});