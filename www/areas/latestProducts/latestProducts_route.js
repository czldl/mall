/**
 * 商品分类模块路由
 */
angular.module('latestProducts.route', ['latestProducts.controller'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('tab.latestProducts', {
        url: '/latestProducts',
        //指定模板页面要渲染的位置
        views: {
          'tab-latestProducts': {
            templateUrl: 'areas/latestProducts/latestProducts.html',
            controller: 'LatestProductsCtrl'
          }
        }
      });
  });
