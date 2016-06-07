'use strict';

/**
 * @ngdoc overview
 * @name sendstormApp
 * @description
 * # sendstormApp
 *
 * Main module of the application.
 */
angular
  .module('sendstormApp', [
    'ngAnimate',
    'ngRoute',
    'scrollable-table'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
