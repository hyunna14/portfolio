//visual 이미지슬라이드
$(function () {
    $(".visual .slide").slick({
        arrows: false, //화살표
        dots: true, //인디케이터 해제
        fade: true, //페이드인 효과
        autoplay: true, //자동재생
        autoplaySpeed: 4000, //재생시간
        pauseOnHover: false, //마우스 오버, 포커스시 멈추는것 해제
        pauseOnFocus: false,
    });
});


//스크롤 애니메이션
$(function(){
    $('.animate').scrolla({
        mobile:true, 
        once:false
    });
});

// 상단이동 부드럽게
$(function () {
    $(".goTop").on("click", function () {
        let top = $("body").offset().top;
        $("html, body").animate({ scrollTop: top }, 800);
    });
});

//section.sns 슬라이더
$(function(){
    $('section.sns .inner .slide').slick({
        arrows: false, //화살표
        dots: true, //인디케이터 해제
        fade: false, //페이드인 효과
        autoplay: true, //자동재생
        autoplaySpeed: 4000, //재생시간
        pauseOnHover: false, //마우스 오버, 포커스시 멈추는것 해제
        pauseOnFocus: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        scroll: true,
        draggable:true
    });
});