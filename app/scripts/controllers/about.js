'use strict';

/**
 * @ngdoc function
 * @name sendstormApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sendstormApp
 */
angular.module('sendstormApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
