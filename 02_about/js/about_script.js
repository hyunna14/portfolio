//svgAni
$(function(){
	$('.line_svg').find('path').each(function(i, path){
		var length = path.getTotalLength();
		//alert(length);
		});
});

//skills-원형차트
$(window).ready(function(){
    draw(95, '.pie-chart1', '#9769d4');
    draw(90, '.pie-chart2', '#9769d4');
    draw(95, '.pie-chart3', '#9769d4');
    draw(80, '.pie-chart4', '#9769d4');
    draw(85, '.pie-chart5', '#cfca80');
    draw(80, '.pie-chart6', '#cfca80');
    draw(50, '.pie-chart7', '#cfca80');
    draw(75, '.pie-chart8', '#cfca80');
  });
  
  function draw(max, classname, colorname){
    var i=1;
      var func1 = setInterval(function(){
        if(i<max){
            color1(i,classname,colorname);
            i++;
        } else{
          clearInterval(func1);
        }
      },10);
  }
  function color1(i, classname,colorname){
    $(classname).css({
          "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
    });
};

//scrolla
$(function() {
  $('.animate').scrolla({
	  mobile: true, //모바일버전시 활성화
	  once: true //스크롤시 딱 한번만 하고싶을땐 true
  });    
});