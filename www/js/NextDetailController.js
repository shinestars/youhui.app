//商品详情页
angular.module('NextDetailController',[])
  .controller('NextDetailCtrl', function($scope,$stateParams,$state,$cookieStore,ser) {
    $scope.id=$stateParams.id;
    $scope.find=function () {
      ser.findShop($scope.id).success(function (data) {
        $scope.data=data;
        ser.getsortdetail(data[0].tradesort,10,$cookieStore.get('sortbegin')).success(function (data) {
          $scope.love=data;
          $cookieStore.put('sortbegin',$cookieStore.get('sortbegin')+10);
        });
      });
    };
    $scope.todetail=function (id) {
      $state.go('tab.next-detail',{id:id});
    };
    $scope.goUP=function () {
      window.history.back(-1);
    };
    $scope.goHome=function () {
      $state.go('tab.account');
    };
    $scope.find();

  });
