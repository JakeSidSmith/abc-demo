'use strict';

angular
  .module('abcApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'angularAbc'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      /*.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })*/
      .when('/', {
        templateUrl: 'views/abc-layout.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
