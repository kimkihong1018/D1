$(function(){
    // 메뉴
    $(".main > li").mouseover(function(){
        $(this).find(".sub").stop().slideDown();
    })
    $(".main > li").mouseout(function(){
        $(".sub").stop().slideUp();
    })

    // var n = 0;

    // setInterval(function(){
    //     n = (n + 1) % 4 ; // 0 1 2 3

    //     // if(n < 4){
    //     //     n++
    //     // }else{
    //     //     n = 0;
    //     // }


    //     // if(n == 4){
    //     //     n=0;
    //     // }else{
    //     //     n++;
    //     // }


    //     $(".top_move").animate({top : n * (-400) + "px"},500)




    // },3000)


    setInterval(function(){
        $(".top_move").animate({top : "-400px"},500,function(){
            $(".top_move").append($(".top_move li").eq(0))
            $(".top_move").css({top : "0"})
        })



    },3000)


    $(".contents h2").click(function(){
        $(".contents h2").removeClass("on");
        $(this).addClass("on");
        $(".contents ul").hide();
        $(this).next().css({display : "flex"});
    })//click

    $(".p_click").click(function(){
        $(".pop").show();

    })
    $(".close").click(function(){
        $(".pop").hide();

    })



})