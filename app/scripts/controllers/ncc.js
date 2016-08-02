'use strict';

/**
 * @ngdoc function
 * @name angularClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularClientApp
 */
angular.module('mamifood')
  .controller('NCCCtrl', function ($scope, $http, $stateParams, mamifoodService) {
      $scope.NCCId = $stateParams.id;
      
      $scope.mamifoodService = mamifoodService;
      $scope.NCC = {};

      $scope.createMode = function () {
          $scope.NCC = {
              id: 0,
              managerId: null,
              name: "1",
              nguoiDaiDien: "1",
              address: "1",
              phone: "",
              email:""
          };

          $scope.isCreate = true;
          $scope.isEdit = false;
      }


      $scope.editMode = function (productId) {
          $scope.createMode();

          $scope.isCreate = false;
          $scope.isEdit = true;
      }

  });
