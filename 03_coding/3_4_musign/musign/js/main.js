'use strict';

//1. gnb 마우스 오버, 포커스시 밑줄
$(function () {
	$('.gnb li a').on('mouseenter focus', function () {
		var bar = $(this).position().left;
		var width = $(this).width();
		$('span.bar').css({
			'left': bar + 'px',
			'width': width + 'px',
			'opacity': 1
		});
	});
	$('.gnb li a').on('mouseleave', function () {
		$('span.bar').css({
			'left': 0,
			'opacity': 0
		});
	});
});

//2.circleBox .svgAni 애니메이션
$(function () {
	$('.svgAni').find('path').each(function (i, path) {
		var length = path.getTotalLength();
		//alert(length);
	});
});

//3. 스크롤 애니메이션
$(function () {
	$('.animate').scrolla({
		mobile: true,
		once: false
	});
});

//4. 배경색 변경
$(window).on('scroll resize', function () {
	var scrollTop = 0;
	scrollTop = $(document).scrollTop();
	bgColor();

	function bgColor() {
		if (scrollTop > 1400) {
			$('body').addClass('on');
		} else {
			$('body').removeClass('on');
		}
		if (scrollTop > 2700) {
			$('body').removeClass('on');
		}
	}
});

//menuOpen 햄버거메뉴
$(function(){
    $('.menuOpen button.open').on('click', function(){
        $('.menuOpen .menuWrap').addClass('on');
    });
    $('.menuOpen .menuWrap .close').on('click', function(){
        $('.menuOpen .menuWrap').removeClass('on');
  });
});
