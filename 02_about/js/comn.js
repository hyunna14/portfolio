//스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function (e) {
	e.preventDefault();
});

//고정 gnb 호버시 색 변경
$(function(){
	$('nav.gnb ul li').hover(function(){
		$(this).siblings().css({'opacity':'0.5'})
	});
	$('nav.gnb ul li').on('mouseleave', function(){
		$('nav.gnb ul li').css({'opacity':'1'})
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

//메뉴 li 버튼 호버시 색 변경
$(function(){
	$('.menuOpen .menuWrap ul li').hover(function(){
		$(this).siblings().css({'opacity':'0.6'})
	});
	$('.menuOpen .menuWrap ul li').on('mouseleave', function(){
		$('.menuOpen .menuWrap ul li').css({'opacity':'1'})
	});
});

$(window).on('scroll resize', function () {
	var scrollPos = 0;
	scrollPos = $(document).scrollTop();
	menuBtn();
	topBtn();
	logo();

	//메뉴버튼 색 바꾸기
	function menuBtn(){
		if(scrollPos > 700) {$('.innerHeader .menu span').css({'background':'#9769d4'})
		} else {$('.innerHeader .menu span').css({'background':'#fff'})}
	}

	//gnb - .visual에서 안보이게
	$(function(){
		if(scrollPos < 1600) {
			$('nav.gnb').css({'display':'none'})
		} else {$('nav.gnb').css({'display':'block'})}
	});

	//top버튼 비주얼에서 안나타나게
	function topBtn(){
		if(scrollPos > 120){
			$('.topBtn').addClass('on');
		} else {$('.topBtn').removeClass('on')};
	}

	//로고 색깔 바꾸기
	function logo(){
		if(scrollPos > 800){
			$('.innerHeader .logo').addClass('on');
		} else {
			$('.innerHeader .logo').removeClass('on');
		}
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
$(function() {
    $('.animate').scrolla({
	mobile: true, //모바일버전시 활성화
	once: true //스크롤시 딱 한번만 하고싶을땐 true
    });    
}); 