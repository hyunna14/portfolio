//스크립트 위로 튕기는 것 방지
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//2 gnb
$(function(){
    setGnb();
    
    function setGnb(){
        $('.innerHeader .gnb > li > a').on('mouseenter focus', function(){
            $('.innerHeader').addClass('on');
            $('.innerHeader .gnb > li .inner').addClass('on');
            $('header').css({'border':'none'});
        });
        $('header').on('mouseleave', function(){
            $('.innerHeader').removeClass('on');
            $('.innerHeader .gnb > li .inner').removeClass('on');
            $('header').css({'border':'1px solid rgba(255,255,255,0.1)'});
        });
    }
});

//2 풀페이지 스크롤
$(function(){
    $('#fullPage').fullpage({
        fingersonly: true,
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage','fifthPage', 'sixthPage', 'seventhPage'],
        menu: '.rightNav',
         afterLoad: function(anchorLink, index){
         if(index == 2){ //두번째 페이지에 카운트업
            $('.count').counterUp({delay: 10, time: 550});
         }
            if(index == 3){ //세번째 페이지에 카운트업
            $('.count2').counterUp({delay: 10, time: 550});
            }
      }
    });
});

//3 이미지슬라이드
$(function(){
    $(".visual").slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2800,
        pauseOnHover: false,
        pauseOnFocus: false,
        customPaging: function(slider, i){
            var tit = $(slider.$slides[i]).find('.dot').html(); //html .dot에 써준 내용을 dots에 넣을 것임
            return '<div class="pager-tit" class=' + i + '>'+ tit + '</div>';
        }
    });
});


//4 이미지슬라이드 _ 넓이 높이 스크립트
$(function() {
    var winW = $(window).width(), 
        winH = $(window).height(),
        list = $('.visual .list');
   list.css({width: winW+'px', height: winH+'px'});
});  
