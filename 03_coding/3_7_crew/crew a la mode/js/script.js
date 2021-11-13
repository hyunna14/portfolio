// 0. a 클릭시 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
});

//1 approach 역역
$(window).on('scroll resize', function(){
    var scrollPos = 0;
    scrollPos = $(document).scrollTop();
    fix();
    fixHeader();
    fixList();
    
    function fix() {
        if(scrollPos > 1280) {$('.fix .text').addClass('on'); }
        else {$('.fix .text').removeClass('on');}
        if (scrollPos > 2800) {$('.fix .text').removeClass('on'); }
    }
    
    function fixHeader(){
        if(scrollPos > 80){$('header').addClass('on');}
        else {$('header').removeClass('on');}
        }
    
    function fixList(){
        $('section.approach .inner .list li a').removeClass('on');
        if(scrollPos > 1250) {
            $('section.approach .inner .list li a').removeClass('on');
            $('section.approach .inner .list li:eq(0) a').addClass('on');
        } //eq() : 인덱스의 값을 가져와서 원하는 스크립트를 적용하는 선택자 메소드
        if(scrollPos > 1650){
            $('section.approach .inner .list li a').removeClass('on');
            $('section.approach .inner .list li:eq(1) a').addClass('on');
        }
        if(scrollPos > 2050) {
            $('section.approach .inner .list li a').removeClass('on');
            $('section.approach .inner .list li:eq(2) a').addClass('on');
        }
        if(scrollPos > 2550) {
            $('section.approach .inner .list li a').removeClass('on');
            $('section.approach .inner .list li:eq(3) a').addClass('on');
        }
        if(scrollPos > 2900) {
            $('section.approach .inner .list li a').removeClass('on');
        }
    }
});

//2.scrolla.js
$(function() {
    $('.animate').scrolla({
        mobile:true,
        once: false
    });
});

//3 splitting 애니메이션
 $(function () {Splitting();});

//4. gnb
$(function(){
    $('.innerHeader .gnbBtn').on('click', function(){
        $('nav.gnb').toggleClass('on');
    });
    $('.contents').on('click', function(){
        $('nav.gnb').removeClass('on');
    });
});




