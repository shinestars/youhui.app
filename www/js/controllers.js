angular.module('starter.controllers', [])
//疯抢
.controller('DashCtrl', function($scope) {})
//好货
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


//品牌
  .controller('PinpaiCtrl', function($scope) {})

  //精选
  .controller('JingxuanCtrl', function($scope) {})

  //搜券
.controller('AccountCtrl', function($scope,ser) {
  $scope.flag=false;
  $scope.shows=function () {
    return $scope.flag=!$scope.flag;
  };
  $scope.settings = {
    enableFriends: true
  };
  $scope.num=10;
  $scope.get=function () {
     ser.getdata($scope.num).success(function (data) {
       $scope.data=data;
     });
  };
  $scope.get();
  $scope.today=function () {
    ser.gettoday(10).success(function (data) {
      $scope.data=data;
    });
  }
}).directive('linkShop',['$location', function(lc) {
  return function(scope, elm, attrs) {
    scope.$on('click',elm,function (event) {
      console.log("*****************");
    });
  };
}]);
