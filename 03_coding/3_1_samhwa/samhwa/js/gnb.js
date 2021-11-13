//gnb
$(function(){
    var menu = $('nav .gnb > li');
    var wrap = $('innerHeader');
    var menuHeight = wrap.outerHeight();
    var subMenu = menu.find('')
    
    menu.mouseover(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var totalHeight = menuHeight + $(this).find(.'sGnbArea').height();
        wrap.stop().animate({height:totalHeight})
    });
    .mouseout(function(){
        menu.removeClass('on');
        wrap.stop().animate({height:menuHeight})
    });
});

//2depth gnb 호버시 형제요소 텍스트 색 변경
$(function(){
    $('.innerHeader .gnb > ul > li > ul li').hover(function(){
        $(this).siblings().css({'color':'#ddd'})
    });
    $('.innerHeader .gnb > ul > li > ul li').on('mouseleave', function(){
        $('.innerHeader .gnb > ul > li > ul li').css({'color':'#333'})
    });
});
