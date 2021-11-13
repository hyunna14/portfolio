//스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function (e) {
	e.preventDefault();
});

//.visual .slide
$(function(){
	$(".visual .slide").slick({
		arrows: false, //화살표
		dots: false, //인디케이터 해제
		fade: true, //페이드인 효과
		autoplay: true, //자동재생
		autoplaySpeed: 1500, //재생시간
		pauseOnHover:false, //마우스 오버, 포커스시 멈추는것 해제
	    pauseOnFocus:false
	});
});

//gnb.menu 열기
$(function () {
	$('.innerHeader .menu').on('click', function () {
		$('.menuOpen .menuWrap').addClass('on');
	});
	$('.menuOpen .menuWrap .close').on('click', function () {
		$('.menuOpen .menuWrap').removeClass('on');
	});
});

$(window).on('scroll resize', function () {
	var scrollPos = 0;
	scrollPos = $(document).scrollTop();
	topBtn();

	//top버튼 비주얼에서 안나타나게
	function topBtn(){
		if(scrollPos > 120){
			$('.topBtn').addClass('on');
		} else {$('.topBtn').removeClass('on')};
	}
});

//top버튼 이동 부드럽게
$(function(){
	$('.topBtn').on('click', function(){
		var top = $('body').offset().top;
		$('html, body').animate({scrollTop: (top)}, 400);
	});
});


//splitting
$(function(){
    Splitting();
});

//scrolla
$(function(){
    $('.animate').scrolla({
	mobile: true, //모바일버전시 활성화
	once: false //스크롤시 딱 한번만 하고싶을땐 true
    });    
}); 
