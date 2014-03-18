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
		$scope.adminData = {
			user: 'admin',
			pass: '123456'
		};
	}));


	it('check if the data for user is right', function() {
		expect($scope.userData.user).toBe('hafsteinn11');
		expect($scope.userData.pass).toBe('123456');
	});

	it('check if the data for admin is right', function() {
		expect($scope.adminData.user).toBe('admin');
		expect($scope.adminData.pass).toBe('123456');
	});

});