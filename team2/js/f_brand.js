$(".f_adv4").mouseover(function(){
    $(".f_adv1,.f_adv2").css({
        display:"block"
    })
})
$(".f_adv4").mouseout(function(){
    $(".f_adv1,.f_adv2").css({
        display:"none"
    })
})

// 推荐品牌 交互
$(".f_adv333>.f_adva").mouseover(function(){
    $(this).css({
        backgroundColor:"#fff",
        borderBottom: "1px solid transparent",
        // borderLeft: "1px solid transparent",
        color:"red"
    })
    $(this).siblings().css({
        backgroundColor:"#f5f5f5",
        borderBottom: "1px solid #ddd",
        // borderLeft: "1px solid #ddd",
        color:"black"
    })
    console.log($(this).index())
    if($(this).index()==0){
        $(".f_adv5").fadeIn(500)
        $(".f_adv55").fadeOut(500)
    }else if($(this).index()==1){
        $(".f_adv5").fadeOut(500)
        $(".f_adv55").fadeIn(500)
    }
})
$(".f_adv5>.f_adv51").mouseover(function(){
    console.log($(this))
    $("f_adv51 h1").css({
    })
    $(this).animate({
        marginLeft:"7px"
    },100,function(){
        $(this).animate({marginLeft:"2px"},100,function(){
            $(this).animate({marginLeft:"7px"},100,function(){
                $(this).animate({marginLeft:"0px"},100)
            })
        })
    })
})
$(".f_adv55>.f_adv51").mouseover(function(){
    console.log($(this))
    $(this).animate({
        marginLeft:"7px"
    },100,function(){
        $(this).animate({marginLeft:"2px"},100,function(){
            $(this).animate({marginLeft:"7px"},100,function(){
                $(this).animate({marginLeft:"0px"},100)
            })
        })
    })
})

// 品牌推荐移入移出
$(".f_brand2").each(function(i,val){
    $(".f_brand2").eq(i).mouseover(function(){
        $(".f_brand21").eq(i).css({
            display:"block"
        })
    }).mouseout(function(){
        $(".f_brand21").eq(i).css({
            display:"none"
        })  
    })
})
// 楼层切换
function f_fun(a,b,c){
    console.log(a);
a.mouseover(function(){
    console.log($(".f_flooraZZ>a"));
    $(this).css({
        background: "#1093f3",
        color: "#fff"
    })
    $(this).siblings().css({
        background:" #f7f7f7",
        color:"black"
    })
    console.log($(this).index())
    if($(this).index()==0){
        b.fadeIn(500)
        c.fadeOut(500)
    }else if($(this).index()==1){
        c.fadeIn(500)
        b.fadeOut(500)
    }
})
}
f_fun($(".f_flooraZ1"),$("#f_flooraTa"),$("#f_flooraTTa"));
f_fun($(".f_flooraZ2"),$("#f_flooraTb"),$("#f_flooraTTb"));
f_fun($(".f_flooraZ3"),$("#f_flooraTc"),$("#f_flooraTTc"));
f_fun($(".f_flooraZ4"),$("#f_flooraTd"),$("#f_flooraTTd"));
f_fun($(".f_flooraZ5"),$("#f_flooraTe"),$("#f_flooraTTe"));
f_fun($(".f_flooraZ6"),$("#f_flooraTf"),$("#f_flooraTTf"));
//楼层遮罩层显示
$(".f_flooraT1").each(function(i,val){
    $(".f_flooraT1").eq(i).mouseover(function(){
        $(".f_flooraT2").eq(i).css({
            display:"block"
        })
    }).mouseout(function(){
        $(".f_flooraT2").eq(i).css({
            display:"none"
        })  
    })
})
// 品牌推荐动画
$(".f_floorg2>li").mouseover(function(){
    console.log($(this))
    $(this).animate({
        marginLeft:"7px"
    },100,function(){
        $(this).animate({marginLeft:"2px"},100,function(){
            $(this).animate({marginLeft:"7px"},100,function(){
                $(this).animate({marginLeft:"0px"},100)
            })
        })
    })
})
$(".f_floorg3>li").mouseover(function(){
    console.log($(this))
    $(this).animate({
        marginLeft:"7px"
    },100,function(){
        $(this).animate({marginLeft:"2px"},100,function(){
            $(this).animate({marginLeft:"7px"},100,function(){
                $(this).animate({marginLeft:"0px"},100)
            })
        })
    })
})