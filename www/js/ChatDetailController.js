angular.module('ChanDetailController',[])
//  主页的9.9包邮等子页面
  .controller('ChatDetailCtrl', function($scope, $stateParams,$rootScope,$cookieStore,$state,ser) {
    $scope.id=$stateParams.id;
    $scope.flag=false;
    $scope.banner=true;
    $scope.list1=$rootScope.list1;
    $scope.list2=$rootScope.list2;
    $scope.shows=function () {
      return $scope.flag=!$scope.flag;
    };
    if($stateParams.id==1) {
      $scope.title="今日疯抢榜";
    }else if($stateParams.id==9) {
      $scope.title="9.9包邮";
    }else if ($stateParams.id==0) {
      $scope.title="仅限今日";
    }else {
      $scope.title="20元封顶";
    }

    $scope.goUP=function () {
      window.history.back(-1);
    };
    $scope.goHome=function () {
      $state.go('tab.account');
    };
    //判断结果是否为0
    $scope.judgeZero=function (data) {
      if (data.length==0) {
        alert('暂时没有符合条件的商品');
      }else {
        $scope.datas=[];
        $scope.addArr(data);
      }
    };
    //分类点击事件
    $scope.showCategorynine=function (cont) {
      if(cont=="鞋子"){
        cont="鞋";
      }else if (cont=="箱包") {
        cont="包";
      }else if(cont=="全部") {
        cont="";
      }
      console.log(cont);
      switch ($stateParams.id) {
        case "1"://今日疯抢
        {
          $num=$cookieStore.get('first');
          ser.getmoreSort($num,$num+10,cont).success(function (data) {
            $scope.judgeZero(data);
          });
          break;
        }
        case "9"://9.9包邮
        {
          $num=$cookieStore.get('nine');
          ser.getninesort($num,$num+30,cont).success(function (data) {
            $scope.judgeZero(data);
          });
          break;
        }
        case "0"://仅限今日
        {
          $num=$cookieStore.get('today');
          ser.gettodaySort($num,cont).success(function (data) {
            $scope.judgeZero(data);
          });
          break;
        }

        case "20"://20元封顶
        {
          $num=$cookieStore.get('twety');
          ser.gettwetySort($num,$num+30,cont).success(function (data) {
            $scope.judgeZero(data);
          });
          break;
        }
      }
      if($scope.flag=true) {
        return $scope.flag=!$scope.flag;
      }

      // $num=$cookieStore.get('nine');
      // ser.getninesort($num,$num+30,cont).success(function (data) {
      //   if(data.length==0) {
      //     alert('暂时没有符合条件的商品');
      //   }else {
      //     $scope.datas=[];
      //     $scope.addArr(data);
      //   }
      //   if($scope.flag=true) {
      //     return $scope.flag=!$scope.flag;
      //   }
      // });

//今日疯抢
      // $num=$cookieStore.get('first');
      // ser.getmoreSort($num,$num+10,cont).success(function (data) {
      //   if(data.length==0) {
      //     alert('暂时没有符合条件的商品');
      //   }else {
      //     $scope.datas=[];
      //     $scope.addArr(data);
      //   }
      //   if($scope.flag=true) {
      //     return $scope.flag=!$scope.flag;
      //   }
      // });
//仅限今日
      // $num=$cookieStore.get('today');
      // ser.gettodaySort($num,cont).success(function (data) {
      //   if(data.length==0) {
      //     alert('暂时没有符合条件的商品');
      //   }else {
      //     $scope.datas=[];
      //     $scope.addArr(data);
      //   }
      //   if($scope.flag=true) {
      //     return $scope.flag=!$scope.flag;
      //   }
      // });

//20元封顶
      // $num=$cookieStore.get('twety');
      // ser.gettwetySort($num,$num+30,cont).success(function (data) {
      //   if(data.length==0) {
      //     alert('暂时没有符合条件的商品');
      //   }else {
      //     $scope.datas=[];
      //     $scope.addArr(data);
      //   }
      //   if($scope.flag=true) {
      //     return $scope.flag=!$scope.flag;
      //   }
      // });
    };
    $scope.addArr=function (data) {
      angular.forEach(data,function (value,key) {
        $scope.datas.push(value);
      });
      return  $scope.datas;
    };
    $scope.chooseDate=function () {
      switch ($stateParams.id) {
        case "1":
        {
          $num=$cookieStore.get('first');
          ser.getmore($num,$num+10).success(function (data) {
            $scope.addArr(data);
            $cookieStore.put('first',$num+30);
          });
          break;
        }
        case "9":
        {
          $num=$cookieStore.get('nine');
          ser.getnine($num,$num+30).success(function (data) {
            $scope.addArr(data);
            $cookieStore.put('nine',$num+30);
          });
          break;
        }
        case "0":
        {
          $num=$cookieStore.get('today');
          ser.gettoday($num).success(function (data) {
            $scope.addArr(data);
            $cookieStore.put('today',$num+10);
          });
          break;
        }

        case "20":
        {
          $num=$cookieStore.get('twety');
          ser.gettwety($num,$num+30).success(function (data) {
            $scope.addArr(data);
            $cookieStore.put('today',$num+30);
          });
          break;
        }
      }
    };
    $scope.doRefresh=function () {
      $scope.datas=[];
      $scope.chooseDate();
      $scope.$broadcast('scroll.refreshComplete');
    };
    $scope.datas=[];
    $scope.loadMoreDate=function () {
      $scope.chooseDate();
      $scope.$broadcast('scroll.infiniteScrollComplete');
    };
    $scope.$on('$stateChangeSuccess', function() {
      $scope.loadMoreDate();
    });
    $scope.godetail=function (id) {
      $state.go('tab.next-detail',{id:id});
    }
  });
