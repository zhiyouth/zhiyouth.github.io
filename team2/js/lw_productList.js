;(function(){
    // 倒计时
    $(".lw_LIMITEDtimehours").html(11)
    $(".lw_LIMITEDtimeminte").html(59)
    $(".lw_LIMITEDtimesecond").html(59)
    var secound=parseInt($(".lw_LIMITEDtimesecond").html());
    var minte=parseInt($(".lw_LIMITEDtimeminte").html());
    var hours=parseInt($(".lw_LIMITEDtimehours").html());
    setInterval(function(){

        secound--
        if(secound<0){
            minte--;
            secound=59
        }
        if(minte<0){
            hours--;
            minte=59
        }
        if(hours<0){
            secound=59;
            minte=59;
            hours=11
        }
        $(".lw_LIMITEDtimesecond").html(secound)
        $(".lw_LIMITEDtimeminte").html(minte)
        $(".lw_LIMITEDtimehours").html(hours)
    },1000)
    $(".lw_LIMITEDtime span").css({
        fontSize:14,
        color:"#ff0000",
        fontWeight:"bolder"
    })
    // 商品轮播
    var x=0
    setInterval(function(){
        x++
        
        if(x>4){
            x=0
            $(".lw_fooosp").css({
                marginLeft:0
            })
        }
        $(".lw_fooosp").animate({
            marginLeft:x*-196
        })
    },3000)

    // 新品推荐轮播
    var y=0
    $(".lw_hotnext").click(function(){
        y++
        if(y>6){
            y=0
            $(".lw_hotprocont").animate({
                marginLeft:0
            })
        }
        $(".lw_hotprocont").animate({
            marginLeft:y*-206
        })
    })
    $(".lw_hotprev").click(function(){
        y--;
        if(y<0){
            y=5;

        }
        $(".lw_hotprocont").animate({
            marginLeft:y*-206
        })
    })
    var timesss=setInterval(solid,3000)
    $(".lw_hottuijainbox").mouseover(function(){
        clearInterval(timesss)
    })
    $(".lw_hottuijainbox").mouseout(function(){
        timesss=setInterval(solid,3000)
    })
    function solid(){
        y++
        
        if(y>6){
            y=0
            $(".lw_hotprocont").animate({
                marginLeft:0
            })
        }
        $(".lw_hotprocont").animate({
            marginLeft:y*-206
        })
    }

    // 楼层滚动

    var fools=document.getElementsByClassName("foollist")
    var foola=document.getElementsByClassName("lw_floorbox")[0]
    $(window).scroll(function(){
        var st=$("html").scrollTop()||$("body").scrollTop();
        var h=window.innerHeight;
        for(var i=0;i<fools.length;i++){
            var ot=fools[i].offsetTop;
            if(ot<=st+h/2-100){
                for(var j=0;j<foola.children.length;j++){
                    foola.children[j].style.background="#d30e4f"
                    foola.children[j].style.color="white"
                }
                foola.children[i].style.background="aqua";
            }
        }
        if(st>300){
            $(".lw_floorbox").fadeIn(300)
        }        
        if(st<300){
            $(".lw_floorbox").fadeOut(300)
        }

    })
    var foolb=foola.getElementsByTagName("li")
    for(var i=0;i<foolb.length;i++){

        foolb[i].index=i;

        foolb[i].onclick=function(){
            var st=$("html").scrollTop()||$("body").scrollTop();
            $("html,body").animate({scrollTop:fools[this.index].offsetTop})
        }
        
    }


})()