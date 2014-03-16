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
      .when('/admin', {
        templateUrl: 'views/Admin/AdminMainView.html',
        controller: 'AdminMainController'
      })
      .when('/evaluationtemplates', {
        templateUrl: 'views/Admin/evaluationTemplates.html',
        controller: 'AdminGetTemplatesController'
      })
      .when('/createtemplate', {
        templateUrl: 'views/Admin/AdminCreateTemplateView.html',
        controller: 'AdminCreateTemplateController'
      })
      .when('/courses/:CourseID/:Semester/evaluations/:evalID', {
        templateUrl: 'views/student/myEvaluations/currentEvaluation.html',
        controller: 'myCoursesController'
      })
      .when('/statistics', {
        templateUrl: 'views/Admin/AdminCompletedEvaluations.html',
        controller: 'AdminGetEvaluationsController'
      })
      .when('/evaluations/:evalID', {
        templateUrl: 'views/Admin/AdminStatisticsView.html',
        controller: 'AdminStatisticsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('API_URL', 'http://dispatch.ru.is/h18/api/v1/');
