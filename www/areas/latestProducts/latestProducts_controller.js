/**
 * 最新商品分类控制器
 */
angular.module('latestProducts.controller', ['latestProducts.service'])
  .controller('LatestProductsCtrl', function($scope,latestProductsFty) {
    //进入view时触发
    $scope.$on('$ionicView.enter', function (e) {
        getLatestProductsData();
        $scope.getLatestProductsDetailData(000);
    });
      //获取侧边栏数据
    function  getLatestProductsData(){
      var promise =latestProductsFty.getLatestProductsData();
      promise.then(
          // 成功的回调函数
         function (data) {
            if (data) {
              $scope.latestProductsData = data;
            }
          });
    }
      //获取侧边菜单对应的分类信息数据
      $scope.getLatestProductsDetailData=function(num) {
      var promise = latestProductsFty.getLatestProductsDetailData(num);
      promise.then(
          // 成功的回调函数
         function (data) {
            if (data) {
              $scope.latestProductsDetailData = data;
            }
          });
    }
    // 左侧分类单击样式修改
    $scope.latestProductsLeftClick=function(e){
      e.target.className='nav-current';
      $(e.target).siblings().removeClass().addClass('nav-blur');
    };
  });
