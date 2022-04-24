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
          },
          {
            name: "最新手机",
            typeNumber: '200'
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
            name:"Android移动开发+206004刘东良",
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
          },
          {
            name:"Android移动开发",
            src:"img/latestProducts/b04.png",
            typeNumber:'00001'
          },
          {
            name:"Swift项目开发基础教程",
            src:"img/latestProducts/b05.png",
            typeNumber:'00002'
          },
          {
            name:"微信小程序开发实战",
            src:"img/latestProducts/b06.png",
            typeNumber:'00003'
          },
          {
            name:"Spring Cloud微服务架构开发",
            src:"img/latestProducts/b07.png",
            typeNumber:'00003'
          }];
          }
          else if(typeNumber==100){
            latestProductsDetailData=[
            {
              name:"毛呢大衣+206004刘东良",
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
            },{
              name:"牛仔裤",
              src:"img/latestProducts/nz4.jpg",
              typeNumber:'10004'
            },
            {
              name:"长裤",
              src:"img/latestProducts/nz5.jpg",
              typeNumber:'10005'
            },
            {
              name:"西裤",
              src:"img/latestProducts/nz6.jpg",
              typeNumber:'10006'
            }];
        }else{
          latestProductsDetailData=[
            {
              name:"华为5G+206004刘东良",
              src:"img/latestProducts/sj01.png",
              typeNumber:'20001'
            },
            {
              name:"华为6G+206004刘东良",
              src:"img/latestProducts/sj02.png",
              typeNumber:'20002'
            }];
        }
          // 假设数据请求成功
          var deferred = $q.defer();
          deferred.resolve(latestProductsDetailData);
          return deferred.promise;
        }
      }
  });
