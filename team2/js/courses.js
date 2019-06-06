



// 生态学院  最新发布轮播
;(function(){

    // 默认显示
    $(".L_new_cut-box").eq(0).css({marginLeft:0})
    // 文本
    $("<p class='new-box-text1'>日常办公</p><p class='new-box-text2'>精选-使用企业微信的5个技巧</p><p class='new-box-text3'>企业/微信/技巧/</p>").appendTo($(".L_new_cut div"))
    // 宽
    $(".L_new_cut").css({width:$(".L_new_cut").children(".L_new_cut-box").length*1200})
    // 克隆添加最后
    $(".L_new_cut-box").eq(0).clone().appendTo($(".L_new_cut"));
    // 自定轮播
    var x=0
    var flag=true
    function fun(){
        
        if(flag){
            flag=false
            x++
            if(x==4){
                x=1;
                $(".L_new_cut").css({marginLeft:0},1500)
            }
            $(".L_new_cut").animate({marginLeft:-1200*x},1500,function(){
                flag=true
            })
        }
        
    }
    var timer=setInterval(fun,4000);

    // 停止动画
    $(".L_new_icon-direction").mouseover(function(){
        clearInterval(timer)
    })
    // 继续动画
    $(".L_new_icon-direction").mouseout(function(){
        timer=setInterval(fun,4000);
    })


    // 下一页
    $(".L_new_icon-right-direction").click(function(){
        
        if(flag){
            flag=false
            x++
            if(x==4){
                x=1;
                $(".L_new_cut").css({marginLeft:0},1500)
            }
            $(".L_new_cut").animate({marginLeft:-1200*x},1500,function(){
                flag=true
            })
        }
        
    })

    // 上一页
    $(".L_new_icon-left-direction").click(function(){
        
        if(flag){
            flag=false
            x--
            if(x<0){
                x=2;
                $(".L_new_cut").css({marginLeft:-1200*(x+1)},1500)
            }
            $(".L_new_cut").animate({marginLeft:-1200*x},1500,function(){
                flag=true
            })
        }
        
    })

    // 左右切换  触碰变背景
    $(".L_new_icon-left-direction").mouseover(function(){
        $(this).css({
            background:"url(WDTI2BD_03.png) no-repeat"
        })
    })
    $(".L_new_icon-left-direction").mouseout(function(){
        $(this).css({
            background:"url(X_YV@_03.png) no-repeat"
        })
    })

    $(".L_new_icon-right-direction").mouseover(function(){
        $(this).css({
            background:"url(WDTI2BD_03.png) no-repeat"
        })
    })
    $(".L_new_icon-right-direction").mouseout(function(){
        $(this).css({
            background:"url(WD4_2BD_05.png) no-repeat"
        })
    })


    // 背景图变大
    $(".L_new_cut0").mouseover(function(){
        $(this).css({
            transform: "scale(1.1)"
        })
    })
    $(".L_new_cut0").mouseout(function(){
        $(this).css({
            transform: "scale(1)"
        })
    })


// 轮播自执行结束
})()
























