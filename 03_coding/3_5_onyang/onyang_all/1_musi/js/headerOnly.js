//gnb
$(function () {
    setGnb();
    function setGnb() {
        $(".innerHeader nav .gnb > li a").on("mouseenter focus", function () {
            $("header").addClass("on");
            $(".innerHeader nav .gnb > li .inner").addClass("on");
        });
        $("header").on("mouseleave", function () {
            $("header").removeClass("on");
            $(".innerHeader nav .gnb > li .inner").removeClass("on");
        });
    }
});

// fixHeader
let scrollPos = 0;
scrollPos = $(document).scrollTop();
fixHeader();

$(window).on("scroll resize", function () {
    scrollPos = $(document).scrollTop();
    fixHeader();
});

//fixHeader 함수
function fixHeader() {
    if (scrollPos > 150) {
        $("header").addClass("scrolled");
    } else {
        $("header").removeClass("scrolled");
    }
}
