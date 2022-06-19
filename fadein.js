$(document).ready(function() { //document라는 객체의 준비가 끝나면 == 로드가 완료되면
    $(window).scroll( function(){ //스크롤 되면 실행
        $('.des1').each( function(i){ //객체 가져오기

            var bottom_of_element = $(this).offset().top + $(this).outerHeight(); //offset == 절대좌표
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},1000);
            }
        });
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.des2').each( function(i){

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},1000);
            }
        });
    });
});
