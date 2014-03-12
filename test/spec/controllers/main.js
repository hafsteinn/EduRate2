'use strict';

describe('LoginFactory tests', function() {
    var $httpBackend;
    var loginFactory;
    var userObject = {user: 'hafsteinn11', pass: '123456'};

    beforeEach(module('EduRateApp'));
    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');

        // Intercept HTTP requests and do the following:
        $httpBackend.when('POST', 'http://project3api.haukurhaf.net/api/v1/login/').respond({role: 'student', token: 'xxx'});

        // Create a fresh instance of the LoginFactory:
        loginFactory = $injector.get('loginFactory');
      }));

    it('is possible to login as Baering and get a token with xxx', function() {
        loginFactory.logIn(userObject).then(function(data) {
            expect(loginFactory.getUsername()).toBe(data.username);
            expect(data.username).toBe('hafsteinn11');

            expect(loginFactory.getToken()).toBe(data.token);
            expect(data.token).toBe('xxx');

            expect(loginFactory.getRole()).toBe(data.role);
            expect(data.role).toBe('student');
          });
        $httpBackend.expectPOST('http://project3api.haukurhaf.net/api/v1/login/');
        $httpBackend.flush();
      });
  });
