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
  // $scope.chats = Chats.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // };
  var swiper=new Swiper(".swiper-container",{
    pagination: '.swiper-pagination3',
    paginationClickable: true,
    centeredSlides: true,
    autoplay: 2000,
    loop : true,
    autoplayDisableOnInteraction: false,

  });
  // var mySwiper = new Swiper('.swiper-container', {
  //   autoplay: 500,//可选选项，自动滑动
  // })
})

  // .controller('PinCtrl', function($scope,$cordovaGeolocation) {
  //   $cordovaGeolocation.getCurrentPosition().then(function (position) {
  //     console.log(position);
  //   }).catch(function (err) {
  //     console.log(err);
  //   });
  // })



  //精选
  .controller('JingxuanCtrl', function($http,$scope) {
    $scope.num=5;
    $http({
      method:'GET',
      url:'data/getdata.php?size='+$scope.num
    }).then(function successCallback(response) {
        $scope.data= response.data;
    });



      var swiper = new Swiper('.z-p1-swiper1 >.swiper-container', {
        slidesPerView: 4,

        resistanceRatio :0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true

        },
      });
      var times=document.getElementsByClassName('z-time1');
// var buy=times[0].getElementsByTagName('p');
// buy[0].innerHTML='正在抢购';
      var sanjiao=document.getElementsByClassName('sanjiao');
      var jieshu1=document.getElementsByClassName('jieshu1')[0];
      var jieshu2=document.getElementsByClassName('jieshu2')[0];
      var jieshu3=document.getElementsByClassName('jieshu3')[0];

      function period(m,n){
        seconds=m*3600;
        var date=new Date();
        var nhours=date.getHours();
        var nmin=date.getMinutes();
        var nseconds=date.getSeconds();
        var ntimes=(nhours-n)*3600+nmin*60+nseconds;
        var total=seconds-ntimes;
        var xiaoshi = parseInt(total/3600);
        var fen=parseInt((total-xiaoshi*3600)/60);
        var miao=parseInt(total-xiaoshi*3600-fen*60);

        jieshu1.innerHTML=xiaoshi;
        jieshu2.innerHTML=fen;
        jieshu3.innerHTML=miao;
      }
      var date=new Date();
      var hours=date.getHours();//18:16:20

      var min=date.getMinutes();
      var seconds=date.getSeconds();

      var sper=document.getElementsByClassName('swiper-slide');
      var aa;
      var buy;
      var slidewrap=document.getElementsByClassName('swiper-wrapper')[0];


      if(hours>=0&&hours<8){
        times[0].style.backgroundColor='#fcd431';
        sanjiao[0].classList.add('sanjiaos');
        times[0].style.color='#9a3c00';
        buy=times[0].getElementsByTagName('p');
        buy[0].innerHTML='抢购进行中';
        aa=0;
        weiQiang(1);
        function daojishi(){
          period(8,0)  ;
        }

      }else if(hours>=8&&hours<10){
        times[1].style.backgroundColor='#fcd431';
        sanjiao[1].classList.add('sanjiaos');
        times[1].style.color='#9a3c00';
        slidewrap.classList.add('wrap1');
        buy=times[1].getElementsByTagName('p');
        buy[0].innerHTML='抢购进行中';
        times[0].getElementsByTagName('p')[0].innerHTML='已抢完';
        qiangWan(1);
        weiQiang(2);
        aa=1;
        function daojishi(){
          period(2,8);
        }
      }else if(hours>=10&&hours<13){
        times[2].style.backgroundColor='#fcd431';
        sanjiao[2].classList.add('sanjiaos');
        times[2].style.color='#9a3c00';
        slidewrap.classList.add('wrap2');
        buy=times[2].getElementsByTagName('p');
        buy[0].innerHTML='正在抢购';
        qiangWan(2);
        weiQiang(3);
        aa=2;
        function daojishi(){
          period(3,10);
        }

      }else if(hours>=13&&hours<15){
        times[3].style.backgroundColor='#fcd431';
        sanjiao[3].classList.add('sanjiaos');
        times[3].style.color='#9a3c00';
        slidewrap.classList.add('wrap3');
        buy=times[3].getElementsByTagName('p');
        buy[0].innerHTML='正在抢购';
        qiangWan(3);
        weiQiang(4);
        function daojishi(){
          period(2,13);
        }
        aa=3;
      }else if(hours>=15&&hours<17){
        times[4].style.color='#9a3c00';
        times[4].style.backgroundColor='#fcd431';
        sanjiao[4].classList.add('sanjiaos');
        slidewrap.classList.add('wrap4');
        buy=times[4].getElementsByTagName('p');
        buy[0].innerHTML='正在抢购';
        qiangWan(4);
        weiQiang(5);
        function daojishi(){
          period(2,15);
        }
        aa=4;
      }else if(hours>=17&&hours<19){
        times[5].style.backgroundColor='#fcd431';
        sanjiao[5].classList.add('sanjiaos');
        times[5].style.color='#9a3c00';
        slidewrap.classList.add('wrap5');
        buy=times[5].getElementsByTagName('p');
        buy[0].innerHTML='正在抢购';
        qiangWan(5);
        weiQiang(6);
        function daojishi(){
          period(2,17);
        }
        aa=5;
      }else if(hours>=19&&hours<20){
        times[6].style.backgroundColor='#fcd431';
        sanjiao[6].classList.add('sanjiaos');
        times[6].style.color='#9a3c00';
        slidewrap.classList.add('wrap5');
        buy=times[6].getElementsByTagName('p');
        buy[0].innerHTML='正在抢购';
        qiangWan(6);
        weiQiang(7);
        function daojishi(){
          period(2,19);
        }
        aa=6;
      }else if(hours>=20&&hours<21){
        times[7].style.backgroundColor='#fcd431';
        sanjiao[7].classList.add('sanjiaos');
        times[7].style.color='#9a3c00';
        slidewrap.classList.add('wrap5');
        buy=times[7].getElementsByTagName('p');
        buy[0].innerHTML='正在抢购';
        qiangWan(7);
        weiQiang(8);
        function daojishi(){
          period(1,20);
        }
        aa=7;
      }else if(21<=hours<24){
        times[8].style.backgroundColor='#fcd431';
        sanjiao[8].classList.add('sanjiaos');
        times[8].style.color='#9a3c00';
        slidewrap.classList.add('wrap5');
        buy=times[8].getElementsByTagName('p');
        buy[0].innerHTML='正在抢购';
        aa=8;
        qiangWan(8);
        function daojishi(){
          period(1,21);
        }
      }
      setInterval(daojishi, 1000);

      function qiangWan(m) {
        for(var i=0;i<m;i++){
          times[i].getElementsByTagName('p')[0].innerHTML='已抢完';
        }
      }

      function weiQiang(m) {
        for(var i=m;i<9;i++){
          times[i].getElementsByTagName('p')[0].innerHTML='即将开始';
        }
      }


      var swiper = new Swiper('.z-p1-swiper2 >.swiper-container', {
        slidesPerView: 2.4,
        spaceBetween:10,
        resistanceRatio :0,
        freeMode: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
      });

      var huojian=document.getElementsByClassName('z-huojian')[0];

      var scroll=document.getElementsByClassName('scroll')[0];


      function  tranY() {
        var tran=scroll.style.transform;
        var l=tran.indexOf(',');
        var trans=tran.substring(l+1,tran.length);
        var ls=trans.indexOf('px');
        trans=trans.slice(0,ls);
        if(trans<=-1200){
          huojian.style.display='block';
        }

      }
      tranY();
      setInterval(tranY,1000);
      huojian.onclick=function () {

        scroll.style.transform='translate3d(0px, 0px, 0px) scale(1)';
        scroll.style.transition='transform 2s';
        huojian.style.display='none';
      }



  })

  //搜券
;
