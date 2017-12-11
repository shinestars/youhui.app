//搜券呀
var app = angular.module('AccountController',[]);
app.controller('AccountCtrl', function($scope,ser,$state,$rootScope,$cookieStore,$timeout) {
  $scope.flag=false;
  $scope.banner=true;
  $scope.users="";
  $scope.beforeCont="";
  var expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + 3);
  $cookieStore.put('sortbegin',10,{'expires': expireDate});
  $cookieStore.put("sort",10,{'expires': expireDate});
  $cookieStore.put("nine",30,{'expires': expireDate});
  $cookieStore.put("twety",30,{'expires': expireDate});
  $cookieStore.put("today",30,{'expires': expireDate});
  $cookieStore.put("first",10,{'expires': expireDate});
  $cookieStore.put("data",0,{'expires': expireDate});
  $cookieStore.put("madbuy",0,{'expires': expireDate});
  $cookieStore.put("pinpai",0,{'expires': expireDate});

  $rootScope.list1=['全部','女装','男装','鞋子','箱包','家电','内衣','美妆'];
  $rootScope.list2=[['女装','男装','鞋子','箱包'],['家电','内衣','彩妆','饰品'],['玩具','手机','酒类','数码配件'],['乐器','办公','营养品','其他']]
  $scope.list1=$rootScope.list1;
  $scope.list2=$rootScope.list2;
  $scope.shows=function () {
    return $scope.flag=!$scope.flag;
  };
  $scope.get=function () {
    ser.getdata($cookieStore.get('data')).success(function (data) {
      console.log(data);
      $scope.data=data;
      $cookieStore.put('data',$cookieStore.get('data'));
    });
  };
  $scope.get();
  $scope.today=function () {
    ser.gettoday(10).success(function (data) {
      $scope.data=data;
    });
    return $scope.banner=!$scope.banner;
  };
  $scope.more=function () {
    ser.getmore(10).success(function (data) {
      $scope.data=data;
    })
  };
  $scope.searchs=function () {
    ser.getsearch($scope.users,10).success(function (data) {
      if(data.code==0) {
        alert(data.msg);
      }else{
        $scope.data=data.msg;
      }
    })
  };
  $scope.getnine=function () {
    ser.getnine().success(function (data) {
      $scope.data=data;
    });
  };
  $scope.gettwety=function () {
    ser.gettwety().success(function (data) {
      console.log(data);
      $scope.data=data;
    });
  };
  $scope.showCategory=function (cont) {
    if($scope.beforeCont!=cont) {
      $cookieStore.put('sort',10);
      $scope.beforeCont=cont;
    }else{
      $cookieStore.put('sort',$cookieStore.get('sort')+10);
    }
    if(cont=="鞋子"){
      cont="鞋";
    }else if (cont=="箱包") {
      cont="包";
    }else if(cont=="全部") {
      cont="";
    }
    ser.getsort(cont,$cookieStore.get('sort')).success(function (data) {
      $scope.data=data;
      if($scope.flag=true) {
        return $scope.flag=!$scope.flag;
      }
    });
  };
  $scope.godetail=function (id) {
    $state.go('tab.chats-detail',{id:id})
  };
  $rootScope.next=function (id) {
    $state.go('tab.next-detail',{id:id});
  };
  $scope.doRefresh=function () {
    ser.getdata($cookieStore.get('data')).success(function (data) {
      $scope.data=[];
      $scope.data=$scope.data.concat(data);
      $cookieStore.put('data',$cookieStore.get('data')+10);
    }).finally(function () {
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
  $scope.loadMoreDate=function () {
    ser.getdata($cookieStore.get('data')).success(function (data) {
      $scope.data=$scope.data.concat(data);
      $cookieStore.put('data',$cookieStore.get('data')+10);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };
})
