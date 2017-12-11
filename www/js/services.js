angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
  .factory('ser',function ($http) {
    return {
      //获得所有数据
      getdata:function (size) {
        return $http.get("data/getdata.php?size="+size);

      },
      //获得仅限今日
      gettoday:function (size) {
        return $http.get("data/gettoday.php?size="+size);
      },
      //获得仅限今日
      gettodaySort:function (size,cont) {
        return $http.get("data/gettoday.php?size="+size+"&cont="+cont);
      },
      //获得今日疯抢
      getmore:function (begin,size) {
        return $http.get("data/getmore.php?size="+size+"&begin="+begin);
      },
      //获得今日疯抢的分类
      getmoreSort:function (begin,size,cont) {
        return $http.get("data/getmore.php?size="+size+"&begin="+begin+"&cont="+cont);
      },
      //获取搜索结果
      getsearch:function (cont,size) {
        return $http.get("data/getsearch.php?cont="+cont+"&size="+size);
      },
      //获得9.9所有商品
      getnine:function (begin,size) {
        return $http.get("data/getnine.php?size="+size+"&begin="+begin);
      },
      //获得9.9分类
      getninesort:function (begin,size,cont) {
        return $http.get("data/getnine.php?size="+size+"&begin="+begin+"&cont="+cont);
      },
      //获得20元封顶
      gettwety:function (begin,size) {
        return $http.get("data/gettwety.php?size="+size+"&begin="+begin);
      },
      //获得20元封顶
      gettwetySort:function (begin,size,cont) {
        return $http.get("data/gettwety.php?size="+size+"&begin="+begin+"&cont="+cont);
      },
      //获得分类
      getsort:function (cont,num) {
        return $http.get("data/getsort.php?keyword="+cont+"&num="+num);
      },
      //获得下一次分类加载
      getsortdetail:function (cont,num,begin) {
        return $http.get("data/getsort.php?keyword="+cont+"&num="+num+"&begin="+begin);
      },
      //获得品牌
      getpinpai:function (begin) {
        return $http.get("data/getpinpai.php?&begin="+begin);
      },
      //根据id获得商品详细信息
      findShop:function (id) {
        return $http.get("data/getdatabyid.php?id="+id);
      }
    }
  });
