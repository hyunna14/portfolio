//스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
	e.preventDefault();
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

//스크롤 내릴 때 효과
$(window).on('scroll resize', function () {
	var scrollPos = 0;
	scrollPos = $(document).scrollTop();
	menuBtn();
	prevBtn();

	//메뉴버튼 색 바꾸기
	function menuBtn(){
		if(scrollPos > 655) {$('.innerHeader .menu span').css({'background':'#9769d4'})
		} else {$('.innerHeader .menu span').css({'background':'#fff'})}
	}

	//이전버튼 색 바꾸기
	function prevBtn(){
		if(scrollPos > 655) {$('.innerHeader .prev i').css({'color':'#9769d4'})
		} else {$('.innerHeader .prev i').css({'color':'#fff'})}
	}
});

//top버튼 이동 부드럽게
$(function(){
	$('.topBtn').on('click', function(){
		var top = $('body').offset().top;
		$('html, body').animate({scrollTop: (top)}, 400);
	});
});

//scrolla
$(function() {
    $('.animate').scrolla({
	mobile: true, //모바일버전시 활성화
	once: false //스크롤시 딱 한번만 하고싶을땐 true
    });    
 }); 