'use strict';

describe('LoginFactory tests', function() {
    var $httpBackend;
    var loginFactory;
    var userObject = {  user: 'hafsteinn11',
                        pass: '123456',
                    };

    beforeEach(module('EduRateApp'));

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        // Intercept HTTP requests and do the following:
        $httpBackend.when('POST', 'http://dispatch.ru.is/h18/api/v1/login/').respond({User: {Role: 'student', Token: 'xxx'}});
        // Create a fresh instance of the LoginFactory:
        loginFactory = $injector.get('loginFactory');
      }));

    it('is possible to login as hafsteinn11 and get a token with xxx', function() {
        loginFactory.logIn(userObject).then(function(data) {
            expect(loginFactory.getUsername()).toBe(data.username);
            expect(data.username).toBe('hafsteinn11');

            expect(loginFactory.getToken()).toBe(data.token);
            expect(data.userObject.Token).toBe('xxx');

            expect(loginFactory.getRole()).toBe(data.role);
            expect(data.role).toBe('student');
          });
        $httpBackend.expectPOST('http://dispatch.ru.is/h18/api/v1/login/');
        $httpBackend.flush();
      });
  });
