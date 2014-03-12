'use strict';

angular.module('EduRateApp', [
  'ngResource',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/logIn/LogInView.html',
        controller: 'LogInController'
      })
      .when('/my/courses',{
        templateUrl: 'views/student/myCourses/myCourses.html',
        controller: 'myCoursesController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('API_URL', 'http://project3api.haukurhaf.net/api/v1/');
