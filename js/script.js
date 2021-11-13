//스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
	e.preventDefault();
});

//현재 페이지 스크롤 좌표값 구하기
$(window).scroll(function () {
	var height = $(document).scrollTop();
	//console.log(height);
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


//.menuOpen 열기
$(function () {
	$('.innerHeader .menu').on('click', function () {
		$('.menuOpen .menuWrap').addClass('on');
	});
	$('.menuOpen .menuWrap .close').on('click', function () {
		$('.menuOpen .menuWrap').removeClass('on');
	});
});

//.menuOpen li 버튼 호버시 색 변경
$(function(){
	$('.menuOpen .menuWrap ul li').hover(function(){
		$(this).siblings().css({'opacity':'0.6'})
	});
	$('.menuOpen .menuWrap ul li').on('mouseleave', function(){
		$('.menuOpen .menuWrap ul li').css({'opacity':'1'})
	});
});

//section.about 스크롤 시 fix
$(window).on('scroll resize', function () {
	var scrollPos = 0;
	scrollPos = $(document).scrollTop();
	fix();
	logo();
	menuBtn();
	topBtn();

	//로고 색깔 바꾸기
	function logo(){
		if(scrollPos > 3100){
			$('.innerHeader .logo').addClass('on');
		} else {
			$('.innerHeader .logo').removeClass('on');
		} if(scrollPos > 4064){
			$('.innerHeader .logo').removeClass('on');
		}
	}
	
	//메뉴버튼 색 바꾸기
	function menuBtn(){
		if(scrollPos > 900) {$('.innerHeader .menu span').css({'background':'#9769d4'})
		} else {$('.innerHeader .menu span').css({'background':'#fff'})}
	}

	//gnb - section.coding에서 안보이게
	$(function(){
		if(scrollPos > 2674) {
			$('nav.gnb').css({'display':'none'})
		} else {$('nav.gnb').css({'display':'block'})}
		if(scrollPos > 4083) {
			{$('nav.gnb').css({'display':'block'})}
		}
	})

	//top버튼 비주얼에서 안나타나게
	function topBtn(){
		if(scrollPos > 120){
			$('.topBtn').addClass('on')
		} else {$('.topBtn').removeClass('on')}
	}
	
	//about 고정
	function fix() {
		if(scrollPos < 1280) {
			$('.about .inner .fix').addClass('ready');
		} else {
			$('.about .inner .fix').removeClass('ready');
		}
		if (scrollPos > 1280) {
			$('.about .inner .fix').addClass('on');
		} else {
			$('.about .inner .fix').removeClass('on');
		}
		if (scrollPos > 2112) {
			$('.about .inner .fix').removeClass('on');
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

//scrolla
$(function() {
    $('.animate').scrolla({
	mobile: true, //모바일버전시 활성화
	once: false //스크롤시 딱 한번만 하고싶을땐 true
    });  
}); 

//splitting
$(function(){
    Splitting();
});

$(function(){
	$('.coding .slide').slick({
		centerMode: true,
		centerPadding: '30px',
		arrows: true,  //화살표
	    dots: true, //인디케이트
	    autoplay: false, //자동재생
		slidesToShow: 7,
		slidesToScroll: 1,
		draggable: true
    });
});

/* .coding.on */
$(function(){
	$('.slick-arrow').on('click', function(){
		$('.coding').addClass('on');
		$('header').css({'display':'none'});
		$('.topBtn').removeClass('on');
	});
	$('.more_round').on('click', function(){
		$('.coding').addClass('on');
		$('header').css({'display':'none'});
		$('.topBtn').removeClass('on');
	});
	$('.coding .prev').click(function(){
		location.reload();
	});
});

//화면 벗어나면 .coding on클래스제거
$(window).on('scroll resize', function () {
	var scrollPos = 0;
	scrollPos = $(document).scrollTop();
	coding_reset();

	function coding_reset(){
		if (scrollPos < 2200){
			$('.coding').removeClass('on');
			$('header').css({'display':'block'});
			$('.topBtn').css({'display':'block'});
		} if (scrollPos > 3990){
			$('.coding').removeClass('on');
			$('header').css({'display':'block'});
			$('.topBtn').css({'display':'block'});
		} 
	}
});