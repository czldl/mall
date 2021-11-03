/**
 * 商品分类服务
 */
angular.module('latestProducts.service', [])
  .factory('latestProductsFty', function ($http, $q) {
    return {
      getLatestProductsData: function() {
        var latestProductsData = [
          {
            name: "最新图书",
            typeNumber: '000'
          },
          {
            name: "最新服装",
            typeNumber: '100'
          }
        ];
        // 假设数据请求成功
        var deferred = $q.defer();
        deferred.resolve(latestProductsData);
        return deferred.promise;
      },
      getLatestProductsDetailData:function(typeNumber){
          var latestProductsDetailData=[];
          if(typeNumber==000){
            latestProductsDetailData=[
          {
            name:"Android移动开发",
            src:"img/latestProducts/b01.png",
            typeNumber:'00001'
          },
          {
            name:"响应式Web程序设计",
            src:"img/latestProducts/b02.png",
            typeNumber:'00002'
          },
          {
            name:"SSH框架整合技术",
            src:"img/latestProducts/b03.png",
            typeNumber:'00003'
          }];
          }
          else{
            latestProductsDetailData=[
            {
              name:"毛呢大衣",
              src:"img/latestProducts/nz1.jpg",
              typeNumber:'10001'
            },
            {
              name:"羽绒服",
              src:"img/latestProducts/nz2.jpg",
              typeNumber:'10002'
            },
            {
              name:"针织衫",
              src:"img/latestProducts/nz3.jpg",
              typeNumber:'10003'
            }]
        }
          // 假设数据请求成功
          var deferred = $q.defer();
          deferred.resolve(latestProductsDetailData);
          return deferred.promise;
        }
      }
  });
