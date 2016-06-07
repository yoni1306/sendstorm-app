'use strict';

/**
 * @ngdoc function
 * @name sendstormApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sendstormApp
 */
angular.module('sendstormApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
