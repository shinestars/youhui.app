angular.module('pinpaiController',[])
  .controller('PinpaiCtrl', function($scope,$cookieStore,$state,ser) {
    $scope.godetail=function (id) {
      $state.go('tab.next-detail',{id:id})
    };
    $scope.datas=[];
    $scope.doRefresh=function () {
      $num=$cookieStore.get('pinpai');
      ser.getpinpai($num).success(function (data) {
        $scope.datas=[];
        angular.forEach(data,function (value,key) {
          $scope.datas.push(value);
        });
        $cookieStore.put('pinpai',$num+30);
      }).finally(function () {
        $scope.$broadcast('scroll.refreshComplete');
      });
    };
    $scope.loadMoreDate=function () {
      $num=$cookieStore.get('pinpai');
      ser.getpinpai($num).success(function (data) {
        angular.forEach(data,function (value,key) {
          $scope.datas.push(value);
        });
        $scope.$broadcast('scroll.infiniteScrollComplete');
        $cookieStore.put('pinpai',$num+30);
      });
    };
    $scope.$on('$stateChangeSuccess',function (event) {
      $scope.loadMoreDate();
    })
  });
