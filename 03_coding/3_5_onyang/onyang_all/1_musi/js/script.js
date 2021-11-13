//스크립트 위로 튕기는 것 방지
$(document).on("click", 'a[href="#"]', function (e) {
    e.preventDefault();
});

// 상단이동 부드럽게
$(function () {
    $(".goTop").on("click", function () {
        let top = $("body").offset().top;
        $("html, body").animate({ scrollTop: top }, 1000);
    });
});

// 스크롤 애니메이션
$(function () {
    $(".animate").scrolla({
        mobile: true,
        once: false, 
    });
});
