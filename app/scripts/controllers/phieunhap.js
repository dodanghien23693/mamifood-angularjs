'use strict';

/**
 * @ngdoc function
 * @name angularClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularClientApp
 */
angular.module('mamifood')
  .controller('PhieuNhapCtrl', function ($scope, $http, $stateParams, mamifoodService) {
      $scope.productId = $stateParams.id;
      
      $scope.mamifoodService = mamifoodService;
      $scope.phieuNhap = {};

      $scope.createMode = function () {
          $scope.phieuNhap = {
              id: 0,
              name: "",
              categoryId: null,
              unit: "",
              code: "",
              price: "",
              khoiLuong:"",
              measure: "",
              hidden: false,
              saiKhac: true
          };

          $scope.isCreate = true;
          $scope.isEdit = false;
      }


      $scope.editMode = function (productId) {
          $scope.createMode();
          $scope.isCreate = false;
          $scope.isEdit = true;
      }

      $scope.detail = function (product) {

          debugger;
      }

  });
