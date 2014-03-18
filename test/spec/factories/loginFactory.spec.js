'use strict';

describe('LoginFactory tests', function() {
    var $httpBackend;
    var location = 'http://dispatch.ru.is/h18/api/v1/login/';
    var loginFactory;
    var userObject = {  user: 'hafsteinn11',
                        pass: '123456',
                        role: 'student'
                    };

    beforeEach(module('EduRateApp'));

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        // Intercept HTTP requests and do the following:
        $httpBackend.when('POST', location).respond({User: {Role: userObject.role, Token: 'xxx'}});
        // Create a fresh instance of the LoginFactory:
        loginFactory = $injector.get('loginFactory');
    }));
    afterEach(inject(function($injector){

        if(userObject.role == 'student')
        {
            userObject.role = 'admin';
            userObject.user = 'admin';  
        }
 
    }));

    it('is possible to login as hafsteinn11 and get a token with xxx', function() {
        loginFactory.logIn(userObject).then(function(data) {

            expect(data.username).toBe('hafsteinn11');

            expect(loginFactory.getPass()).toBe(data.pass);


            expect(data.userObject.Token).toBe('xxx');


            expect(data.role).toBe('student');

          });
        $httpBackend.expectPOST('http://dispatch.ru.is/h18/api/v1/login/');
        $httpBackend.flush();
    });
    it('is possible to login as admin and get a token with xxx', function() {
        loginFactory.logIn(userObject).then(function(data) {

            expect(data.username).toBe('admin');

            expect(loginFactory.getPass()).toBe(data.pass);

         
            expect(data.userObject.Token).toBe('xxx');

            expect(data.role).toBe('admin');
        });
        $httpBackend.expectPOST('http://dispatch.ru.is/h18/api/v1/login/');
        $httpBackend.flush();
      });
  });