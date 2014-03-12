'use strict';

angular.module('EduRateApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/logIn/LogInView.html',
        controller: 'LogInController'
      })
      .when('/my/courses',{
        templateUrl: 'views/myCourses/myCourses.html',
        controller: 'myCoursesController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
