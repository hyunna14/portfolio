//스크립트 위로 튕기는 것 방지
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
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
        mobile: true, //모바일버전시 활성화
        once: true, //스크롤시 딱 한번만 하고싶을땐 true
    });
});

/*slcik
$('.slide').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});*/

$(function() {
                $(".New ul").slick({
                    arrows: true,
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplaySpeed: 1800,
                    pauseOnHover: true,
                    pauseOnFocus: true
                });
            });