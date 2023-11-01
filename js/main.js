$(".gnb li").hover(
    function(){
        $(".sub",this).stop().slideDown(600);
    },
    function(){
        $(".sub",this).stop().slideUp(300);
    }
);

$(".tab li:eq(0)").click(
    function(){
        $(".notice").show();
        $(".gallery").hide();
        $(".tab li").removeClass("on");
        $(this).addClass("on");
        }
);
$(".tab li:eq(1)").click(
    function(){
        $(".notice").hide();
        $(".gallery").css("display","flex");
        $(".tab li").removeClass("on");
        $(this).addClass("on");
        }
);