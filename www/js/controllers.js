angular.module('starter.controllers', [
  'ngCookies',
  'AccountController',//搜券呀
  'ChanDetailController',//9.9包邮等
  'DashController',//今日疯抢
  'pinpaiController',//品牌优选
  'NextDetailController'//商品详情页
])

//好货
.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

  // .controller('PinCtrl', function($scope,$cordovaGeolocation) {
  //   $cordovaGeolocation.getCurrentPosition().then(function (position) {
  //     console.log(position);
  //   }).catch(function (err) {
  //     console.log(err);
  //   });
  // })



  //精选
  .controller('JingxuanCtrl', function($scope) {})

  //搜券
;
