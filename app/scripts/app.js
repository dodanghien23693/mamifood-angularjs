'use strict';

/**
 * @ngdoc overview
 * @name angularClientApp
 * @description
 * # angularClientApp
 *
 * Main module of the application.
 */
angular
  .module('angularClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/danh-sach-sp.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/tao-phieu-nhap', {
        templateUrl: 'views/tao-phieu-nhap.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/danh-sach-sp', {
        templateUrl: 'views/danh-sach-sp.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
