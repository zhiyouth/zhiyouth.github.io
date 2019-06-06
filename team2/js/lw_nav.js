;(function(){
    var x=0
    // 默认显示第一张
    $(".lw_carousel_imgs a").eq(0).css({
        top:0
    })
    function timesF(){
        $(".lw_carousel_imgs a").eq(x).animate({
            top:-460
        })
        if(x+1>$(".lw_carousel_imgs a").length-1){
            x=-1
        }

        $(".lw_carousel_imgs a").eq(x+1).css({
            top:460
        })
        $(".lw_carousel_imgs a").eq(x+1).animate({
            top:0
        })
        $(".lw_littleBox div").css({
            background:"#908f90"
        })
        $(".lw_littleBox div").eq(x+1).css({
            background:"black"
        })
        x++
    }

    var timer=setInterval(timesF,3000)
    // 鼠标移入图片内清除定时器
    $(".lw_carousel").mouseover(function(){
        clearInterval(timer)
    })
    // 鼠标移出图片内设置定时器
    $(".lw_carousel").mouseout(function(){
        timer=setInterval(timesF,3000)
    })

    $(".lw_littleBox div").eq(0).css({
        background:"black"
    })
    $(".lw_littleBox div").click(function(){
        var index=$(this).index();
        if(index>x){
            $(".lw_littleBox div").css({
                background:"#908f90"
            })
            $(".lw_littleBox div").eq(index).css({
                background:"black"
            })
            $(".lw_carousel_imgs a").eq(index).css({
                top:460
            })
            $(".lw_carousel_imgs a").eq(x).animate({
                top:-460
            })
            $(".lw_carousel_imgs a").eq(index).animate({
                top:0
            })
            x=index
        }else if(index<x){
            $(".lw_littleBox div").css({
                background:"#908f90"
            })
            $(".lw_littleBox div").eq(index).css({
                background:"black"
            })
            $(".lw_carousel_imgs a").eq(index).css({
                top:-460
            })
            $(".lw_carousel_imgs a").eq(x).animate({
                top:460
            })
            $(".lw_carousel_imgs a").eq(index).animate({
                top:0
            })
            x=index
        }
        
    })
    // 鼠标经过分类列表变色
    $(".lw_allcategoryList li").mouseover(function(){

        $(this).children("h4").children("a").css({
            color:"#ff5256"
        })
        $(this).children(".lw_allcategoryListBox").css({
            position:"relative",
            width:180,
            borderBottom:"1px solid #e6e6e6",
            borderTop:"1px solid #e6e6e6",
            borderRight:"1px solid white",
            left:-18,
            top:0,
            padding:"6px 0",
            paddingLeft:30
            
        })
        $(this).css({
            borderBottom: "none"
        })
        $(".lw_allcategoryList").css({
            borderLeft:"1px solid #e6e6e6"
        })
    })
    $(".lw_allcategoryList li").mouseleave(function(){
        $(this).children("h4").children("a").css({
            color:"#323232"
        })
        $(this).children(".lw_allcategoryListBox").css({
            position:"static",
            width:175,
            border:"none",
            left:-18,
            top:0,
            paddingLeft:0
        })
        $(this).css({
            borderBottom: "1px solid #f6f6f6"
        })
    })

    // 返回顶部
    $(window).scroll(function(){
        var st=$("html").scrollTop()||$("body").scrollTop();
        if(st>300){
            $(".lw_comebackTop").slideDown(300)

        }else if(st<300){
            $(".lw_comebackTop").slideUp(300)
        }
    })
    $(".lw_comebackTop").click(function(){
        $("body,html").animate({
            scrollTop:0
        })
    })
})()