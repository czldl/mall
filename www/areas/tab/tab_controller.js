/**
 * tab导航标签的控制器
  */
angular.module('tab.controller', ['tab.service'])
  .controller('TabCtrl', function($scope,tabFty) {
    // 绑定数据对象的值
    $scope.obj_cartCount={
      count:"0"
    }
  });
