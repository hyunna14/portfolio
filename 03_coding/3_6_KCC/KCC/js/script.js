//1 스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//2 fixHeader
let scrollPos = 0;
scrollPos = $(document).scrollTop();
fixHeader();

$(window).on("scroll resize", function () {
    scrollPos = $(document).scrollTop();
    fixHeader();
});

//fixHeader 함수
function fixHeader() {
    if (scrollPos > 150) {
        $("header").addClass("scrolled");
    } else {
        $("header").removeClass("scrolled");
    }
}

//gnb
$(function(){
    setGnb();
    function setGnb(){
        $("nav ul.gnb li.about").on("mouseenter focus", function(){
            $("nav ul.lnb li.about").addClass("on");
        });
        $("header").on("mouseleave", function(){
            $("header").removeClass("on");
            $(".innerHeader nav .gnb > li .inner").removeClass("on");
        });
    }
});

//visual 슬라이드
  $(function(){
     $('.visual .slide').slick({
        arrows: false,  //화살표
        dots: false, //인디케이트 해제
        fade: true,//페이드효과
        autoplay:true, //자동재생
        autoplaySpeed: 4000, //재생시간
        pauseOnHover: false,
        pauseOnFocus: false
    });
});

//애니메이션
$(function() {
    $('.animate').scrolla({
	mobile: true, //모바일버전시 활성화
	once: false //스크롤시 딱 한번만 하고싶을땐 true
    });    
 }); 

