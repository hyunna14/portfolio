//a 클릭 이벤트 제거
$(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
});

//nav
$(function(){
    setGnb();
    
    function setGnb(){
        $('.gnb > ul > li > a').on('mouseenter focus', function(){
            var offsetLeft = $(this).position().left;
            var width = $(this).width();
            
            $('.gnb > ul > li > ul').css({'display':'none'});
            $(this).next().css({'display':'block'});
            $('header').addClass('on');
            $('.gnb span.bar').css({'left': offsetLeft + 'px', 'width': width + 'px'});
        });
        $('header').on('mouseleave', function(){
            $('.gnb > ul > li > ul').css({'display':'none'});
            $('header').removeClass('on');
            $('.gnb span.bar').css({left: 0, 'width':'0'});
        });
    };
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

//헤더 호버시 .scroll 붙기
$(function(){
    $('.innerHeader .gnb').on('mouseenter focus', function(){
        $('header').addClass('scrolled')
    });
    $('.innerHeader').on('mouseleave', function(){
        $('header').removeClass('scrolled')
    });
});

//2depth gnb 호버시 형제요소 글자색 연하게
$(function(){
    $('.innerHeader .gnb > ul > li > ul li').mouseover(function(){
        $(this).siblings().css({'color':'#aaa'});
    });
    $('.innerHeader .gnb > ul > li > ul li').mouseleave(function(){
        $('.innerHeader .gnb > ul > li > ul li').css({'color':'#000'});
    });
});

//.menuOpen 열기
$(function(){
    $('.innerHeader .btn li.menu').click(function(){
        $('.menuOpen').addClass('on')
    });
    $('.menuOpen .close').click(function(){
        $('.menuOpen').removeClass('on')
    });
});

//.menuOpen li 호버시 형제요소 색변경
$(function(){
    $('.menuOpen .gnb > li').mouseover(function(){
        $(this).siblings().css({'color':'#ddd'});
    });
    $('.menuOpen .gnb > li').mouseleave(function(){
        $('.menuOpen .gnb > li').css({'color':'#000'});
    });
})

//.top-visual 이미지슬라이드
$(function () {
    $(".visual .slide").slick({
        arrows: false, //화살표
        dots: true, //인디케이터 해제
        fade: true, //페이드인 효과
        autoplay: true, //자동재생
        autoplaySpeed: 3000, //재생시간
        pauseOnHover: false, //마우스 오버, 포커스시 멈추는것 해제
        pauseOnFocus: false
    });
});

//Area 슬라이드
$(function(){
    $('.area .slide').slick({
       arrows: true,  //화살표
       dots: false, //인디케이트 해제
       fade: false,//페이드효과
       autoplay: false, //자동재생
       pauseOnHover: false,
       pauseOnFocus: false,
       slidesToShow: 3,
       slidesToScroll: 1 
   });
});

$(function() {
    $('.animate').scrolla({
	mobile: true, //모바일버전시 활성화
	once: false //스크롤시 딱 한번만 하고싶을땐 true
    });    
}); 

// slide 지그재그로 움직이게
$(function(){
    $('.area .inner .slide .slick-arrow').click(function(){
        $('.area .inner .slide li').toggleClass('row')
    });
});


