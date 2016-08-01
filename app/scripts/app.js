'use strict';

/**
 * @ngdoc overview
 * @name angularClientApp
 * @description
 * # angularClientApp
 *
 * Main module of the application.
 */
var mamifood = angular.module('mamifood', [
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
            url: '/danh-muc-san-pham',
            templateUrl: 'views/kho-tong/danh-muc-san-pham.html'
        })
        .state('khoTong.danhSachSanPham', {
            url: '/danh-sach-san-pham',
            templateUrl: 'views/kho-tong/danh-sach-san-pham.html',
            controller: 'MainCtrl'
        })
        .state('khoTong.chiTietSP', {
            url: '/chi-tiet-sp/:id',
            templateUrl: 'views/kho-tong/chi-tiet-sp.html'
        })
         .state('khoTong.themMoiSanPham', {
             url: '/them-moi-san-pham',
             templateUrl: 'views/kho-tong/them-moi-san-pham.html',
             controller: 'MainCtrl',
             authenticate: true
         })
        .state('khoTong.themMoiNhomSanPham', {
            url: '/them-moi-nhom-san-pham',
            templateUrl: 'views/kho-tong/them-moi-nhom-san-pham.html',
        })
        .state('khoTong.danhSachPhieuNhap', {
            url: '/danh-sach-phieu-nhap',
            templateUrl: 'views/kho-tong/danh-sach-phieu-nhap.html'
        })
      .state('khoTong.taoPhieuNhap', {
          url: '/tao-phieu-nhap',
          templateUrl: 'views/kho-tong/tao-phieu-nhap.html',
          controller: 'MainCtrl'
      })
    .state('khoTong.danhSachPhieuXuat', {
        //url: '/',
        //templateUrl: 'views/kho-tong/danh-muc-san-pham.html'
    })
    .state('khoTong.taoPhieuXuatHuy', {
       // url: '/',
        //templateUrl: 'views/kho-tong/danh-muc-san-pham.html'
    })
    .state('khoTong.baoCaoNhapXuatTon', {
        //url: '/',
        //templateUrl: 'views/kho-tong/danh-muc-san-pham.html'
    })
    .state('khoTong.danhSachKhoMini', {
        url: '/danh-sach-kho-mini',
        templateUrl: 'views/kho-tong/danh-sach-kho-mini.html'
    })
    .state('khoTong.themMoiKhoMini', {
        url: '/them-moi-kho-mini',
        templateUrl: 'views/kho-tong/them-moi-kho-mini.html',
        controller:'MainCtrl'
    })
    .state('khoTong.danhSachZone', {
        url: '/danh-sach-zone',
        templateUrl: 'views/kho-tong/danh-sach-zone.html'
    })
    .state('khoTong.danhSachNCC', {
        url: '/danh-sach-ncc',
        templateUrl: 'views/kho-tong/danh-sach-ncc.html'
    })
    .state('khoTong.themMoiNCC', {
        url: '/them-moi-ncc',
        templateUrl: 'views/kho-tong/them-moi-ncc.html'
    })
    .state('khoTong.chiTietNCC', {
            url: '/chi-tiet-ncc/:id',
            templateUrl: 'views/kho-tong/chi-tiet-ncc.html'
    })
    .state('khoTong.danhSachNguoiDung', {
        url: '/danh-sach-nguoi-dung',
        templateUrl: 'views/kho-tong/danh-sach-nguoi-dung.html'
    })
    .state('khoTong.themMoiNguoiDung', {
        url: '/them-moi-nguoi-dung',
        templateUrl: 'views/kho-tong/them-moi-nguoi-dung.html'
    })
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

mamifood.factory('mamifoodService', function ($http) {

    var DSTinh = null;
    var flagDSTinh = false;

    var DSQuanHuyen = null;
    var flagDSQuanHuyen = false;

    var DSKho = null;
    var flagDSKho = false;
    
    var DSNhaCungCap = null;
    var flagDSNhaCungCap = false;

    return {
        getDSTinh: function () {
            if (DSTinh == null && !flagDSTinh) {
                flagDSTinh = true;
                $http.get("/jsons/ds-tinh.json")
                  .then(function (response) {

                      DSTinh = response.data;
                      return DSTinh;
                  });
            }
            else {
                return DSTinh;
            }

        },
        getDSQuanHuyen : function () {
            if (DSQuanHuyen == null && !flagDSQuanHuyen) {
                flagDSQuanHuyen = true;

                $http.get("/jsons/ds-quan-huyen-hn.json")
                  .then(function (response) {
                      DSQuanHuyen = response.data;
                      return DSQuanHuyen;
                  });
            }
            else {
                return DSQuanHuyen;
            }

        },
        getDSKho : function () {
            if (DSKho == null && !flagDSKho) {
                flagDSKho = true;

                $http.get("/jsons/ds-kho.json")
                  .then(function (response) {
                      DSKho = response.data;
                      return DSKho;
                  });
            }
            else {
                return DSKho;
            }

        },
        getDSNhaCungCap: function () {
            if (DSNhaCungCap == null && !flagDSNhaCungCap) {
                flagDSNhaCungCap = true;

                $http.get("/jsons/ds-ncc.json")
                  .then(function (response) {
                      DSNhaCungCap = response.data;
                      return DSNhaCungCap;
                  });
            }
            else {
                return DSNhaCungCap;
            }

        }
    }
});




