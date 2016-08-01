'use strict';

/**
 * @ngdoc function
 * @name angularClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularClientApp
 */
angular.module('mamifood')
  .controller('MainCtrl', function ($scope, $http, mamifoodService) {

      $scope.mamifoodService = mamifoodService;
  });
