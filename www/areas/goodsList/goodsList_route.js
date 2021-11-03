/**
 * 商品列表模块路由
 */
angular.module('goodsList.route', ['goodsList.controller'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('goodsList', {
        url: '/goodsList/:typeNumber',
        templateUrl: 'areas/goodsList/goodsList.html',
        controller: 'GoodsListCtrl'
      })
  });
