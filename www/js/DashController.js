angular.module('DashController',[])
// //疯抢
  .controller('DashCtrl', function($scope,$cookieStore,$state,ser) {
    $scope.godetail=function (id) {
      $state.go('tab.next-detail',{id:id})
    };
$scope.datas=[];
    $scope.doRefresh=function () {
      $num=$cookieStore.get('madbuy');
      ser.getmore($num,$num+10).success(function (data) {
        $scope.datas=[];
        angular.forEach(data,function (value,key) {
          $scope.datas.push(value);
        });
        $cookieStore.put('madbuy',$num+30);
      }).finally(function () {
        $scope.$broadcast('scroll.refreshComplete');
      });
    };
    $scope.loadMoreDate=function () {
      $num=$cookieStore.get('madbuy');
      ser.getmore($num,$num+10).success(function (data) {
        angular.forEach(data,function (value,key) {
          $scope.datas.push(value);
        });
        $scope.$broadcast('scroll.infiniteScrollComplete');
        $cookieStore.put('madbuy',$num+30);
      });
    };
    $scope.$on('$stateChangeSuccess',function (event) {
      $scope.loadMoreDate();
    })
  });
