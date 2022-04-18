$(function(){
    //.submenu_wrap 숨긴다.
    $(".sub").hide();
    //#gnb li에 마우스를 올리면,
    $("#nav li").mouseenter(function(){
        //.submenu_wrap이 슬라이드다운된다.
        $(".sub").stop().slideDown();
    });
    //#header(#gnb li+.submenu_wrap)에 마우스를 벗어나면,
    $("#header").mouseleave(function(){
        //.submenu_wrap이 슬라이드업된다.
      $(".sub").stop().slideUp();
  });
});
