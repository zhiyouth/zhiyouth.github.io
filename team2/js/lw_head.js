;(function(){

    $(".lw_options").click(function(){
        $(".lw_option_box").fadeIn(200).css({
            backgroundColor:"white",
            zIndex:1
        })
    })
    $(".lw_option")[0].onmouseleave=function(){
            $(".lw_option_box").fadeOut(200)
    }
    $(".lw_option p").click(function(){
            var lw_options=$(this).html()
            $(".lw_options").html(lw_options)
            $(".lw_option_box").fadeOut(200)
    })
    
})()