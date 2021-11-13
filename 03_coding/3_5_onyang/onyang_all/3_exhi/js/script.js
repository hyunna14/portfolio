//스크립트 위로 튕기는 것 방지
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//스크롤 시 애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
      }); 

// 상단이동 부드럽게
$(function () {
    $(".goTop").on("click", function () {
        let top = $("body").offset().top;
        $("html, body").animate({ scrollTop: top }, 800);
    });
});

//gnb
$(function(){
    setGnb();
    function setGnb(){
        $('.innerHeader nav .gnb > li a').on('mouseenter focus', function(){
            $('header').addClass('on');
            $('.innerHeader nav .gnb > li .inner').addClass('on');
        });
        $('header').on('mouseleave', function(){
            $('header').removeClass('on');
            $('.innerHeader nav .gnb > li .inner').removeClass('on');
        });
    }
});

//subNav 현재페이지 버튼 color 설정
$(function(){
    $('.subNav li').on('click', function(){
        $('.subNav li').removeClass('selected');
        $(this).addClass('selected');
    });
});

//slider
$(function(){
    $('#slider ul').slick({
        arrows: true,
        dots: false,
        centerMode: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
        centerPadding: '60px'
    });
});