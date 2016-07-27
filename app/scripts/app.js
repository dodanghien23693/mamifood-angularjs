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
  .module('mamifood', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
.config(function ($stateProvider, $locationProvider) {

    $stateProvider
        .state('welcome', {
            url: '/',
            templateUrl: 'views/welcome.html',
            controller: 'MainCtrl',
        })
        .state('dangNhap', {
            url: '/dangNhap',
            templateUrl: 'views/login.html'
        })
        .state('dangKy', {
            url: '/dangKy',
            templateUrl: 'views/register.html'
        })
        .state('khoTong', {
            url: '/admin',
            templateUrl: 'views/kho-tong/index.html'
        })
        .state('khoTong.danhMucSanPham', {
            url: '/',
            templateUrl: 'views/kho-tong/danh-muc-san-pham.html'
        })
        .state('khoTong.danhSachSanPham', {
            url: '/danh-sach-san-pham',
            templateUrl: 'views/kho-tong/danh-sach-san-pham.html',
            controller: 'MainCtrl',
            authenticate: true
        })
         .state('khoTong.themMoiSanPham', {
             url: '/them-moi-san-pham',
             templateUrl: 'views/kho-tong/danh-sach-san-pham.html',
             controller: 'MainCtrl',
             authenticate: true
         })
      .state('khoTong.taoPhieuNhap', {
          url: '/tao-phieu-nhap',
          templateUrl: 'views/kho-tong/tao-phieu-nhap.html',
          controller: 'MainCtrl',
          authenticate: true
      });
    if (window.history && window.history.pushState) {
        
        //$locationProvider.html5Mode({
        //    enabled: true,
        //    requireBase: false
        //});
    }
    
}

  //.config(function ($routeProvider) {
  //  $routeProvider
  //    .when('/', {
  //      templateUrl: 'views/danh-sach-sp.html',
  //      controller: 'MainCtrl',
  //      controllerAs: 'main'
  //    })
  //    .when('/tao-phieu-nhap', {
  //      templateUrl: 'views/tao-phieu-nhap.html',
  //      controller: 'MainCtrl',
  //      controllerAs: 'main'
  //    })
  //    .when('/danh-sach-sp', {
  //      templateUrl: 'views/danh-sach-sp.html',
  //      controller: 'MainCtrl',
  //      controllerAs: 'main'
  //    })
  //    .when('/about', {
  //      templateUrl: 'views/about.html',
  //      controller: 'AboutCtrl',
  //      controllerAs: 'about'
  //    })
  //    .otherwise({
  //      redirectTo: '/'
  //    });
  //}

  );


