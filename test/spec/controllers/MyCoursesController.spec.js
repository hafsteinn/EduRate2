/*'use strict';

describe('MyCoursesController tests', function() {
    var $httpBackend;
    var $scope;
    var $rootScope;
    var controller;
    var courseID = '500';

    beforeEach(module('EduRateApp'));

    beforeEach(inject(function($injector, $controller) {

        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();

        controller = $controller('myCoursesController', {
            '$scope': $scope
        });

        //$httpBackend = $injector.get('$httpBackend');
       
    }));


    it('is goToEval function working correctry', function() {
        controller.goToEval(courseID).then(function(data) {    
            //expect(data.ID).toBe(1);
            // expect(studentFactory.getID()).toBe(data.ID);

            // expect(data.CourseID).toBe('500');
            // expect(studentFactory.getCourseID()).toBe(data.CourseID);

        });
        //$httpBackend.expect('/courses/' + courseID + '/' + $routeParams.Semester + '/evaluations/' + $routeParams.evalID);
        //$httpBackend.flush();
    });
  });

  */