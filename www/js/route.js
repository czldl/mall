/**
 * 全局路由文件
 */
angular.module('route', [
  //注册子路由
  'guidePage.route',
  'tab.route',
  'home.route',
  'category.route',//商品分类
  'goodsList.route',//商品列表
])
  .config(function($stateProvider, $urlRouterProvider) {
    // 当没有匹配到合适的路由之后默然跳转的url地址，还有就是项目默认启动的url地址
    // 判断是否是第一次访问，如果是跳转到引导页，如果不是跳转到主页
    if(localStorage["isFirst"])
    {
      $urlRouterProvider.otherwise('/tab/home');
    }
    else {
      $urlRouterProvider.otherwise('/guidePage');
    }
  });
