//a 클릭했을 때 위로 튕기는 이벤트 제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//gnb메뉴
$(function(){
    $('.innerHeader .menuOpen').on('click', function(){
        $('.gnb').addClass('on');
    });
    $('.gnb .close').on('click', function(){
        $('.gnb').removeClass('on');
    });
});

/*$(function(){
    $('대상자').on('이벤트', function(){ //.on은 이벤트 매소드임
        //동작이 실행될 이벤트내용=> 이벤트핸들러
    })
})*/

/*fixHeader*/
var scrollPos = 0;
scrollPos = $(document).scrollTop();
fixHeader();

$(window).on('scroll resize', function(){
    scrollPos = $(document).scrollTop();
    fixHeader();
});

//fixHeader함수만들기
function fixHeader(){
    if(scrollPos >150)
        $('header').addClass('on');
    else {
        $('header').removeClass('on');
    }
}

//스크롤 애니메이션
$(function(){
    $('.animate').scrolla({
        mobile:true,
        once:true
    });
});

/*상단이동 부드럽게*/
$(function() {            
    $('.goTop').on('click', function() {
        var top = $('body').offset().top;
        $('html, body').animate({scrollTop : (top)}, 400);  
    });     
});  


//.top-visual 이미지슬라이드
    $(function() {
        $(".visual .slide").slick({
            arrows: true, //화살표
            dots: false, //인디케이터 해제
            fade: true, //페이드인 효과
            autoplay: true, //자동재생
            autoplaySpeed: 4000, //재생시간
            pauseOnHover:false, //마우스 오버, 포커스시 멈추는것 해제
            pauseOnFocus:false
        });
    }); 