$(".f-shit").click(function(){
    $(".f_xuan").css({
        display:"block"
    })
})
$(".f_nav2>li").click(function(){
    $(this).css({
        borderBottom:"3px solid #03c", 
    })
    $(this).siblings().css({
        borderBottom:"3px solid #fff"
    })
})

// 控制采购会员供应商切换
$(".f_ov>.f_sea2").mouseout(function(){

    $(this).css({
        backgroundColor:"#f5f5f5",
        border:"1px solid #dddddd"
    })
    
    $(this).siblings().css({
        backgroundColor:"#fff", 
        border:"1px solid transparent"
    })
    console.log()
    if($(this).index()==0){
        $(".f_sea5").css({"display":"block"})
        $(".f_sea4").css({"display":"none"})
    }else if($(this).index()==1){
        $(".f_sea5").css({"display":"none"})
        $(".f_sea4").css({"display":"block"})
    }
})
// 最新商家切换

$(".f_ov1>.f_sea2").mouseover(function(){
    $(this).css({
        backgroundColor:"#fff",
        border:"1px solid transparent"
    })
    $(this).siblings().css({
        backgroundColor:"#f5f5f5",
        border:"1px solid #dddddd"
    })
    console.log($(this).index())
    if($(this).index()==0){
        $(".f_enter1").fadeIn(500)
        $(".f_enter4").fadeOut(500)
    }else if($(this).index()==1){
        $(".f_enter4").fadeIn(500)
        $(".f_enter1").fadeOut(500)
    }
})

// 选中图片,出来简介





// 主体展示 鼠标经过
function F_fun(a,b,c){
a.mouseover(function(){
    b.css({
        "width": "154",
        "height": "154",
        "border":"none"
    })
    c.css({
        color:"#0f69dc"
    })
})
a.mouseout(function(){
    b.css({
        "width": "150",
        "height": "150",
        "border":"2px solid transparent"
    })
    c.css({
        color:"black"
    })
})
}
F_fun($("#f_mainOne3a"),$("#f_mainOneimga"),$("#f_mainTona"))
F_fun($("#f_mainOne3b"),$("#f_mainOneimgb"),$("#f_mainTonb"))
F_fun($("#f_mainOne3c"),$("#f_mainOneimgc"),$("#f_mainTonc"))
F_fun($("#f_mainOne3d"),$("#f_mainOneimgd"),$("#f_mainTond"))
F_fun($("#f_mainOne3e"),$("#f_mainOneimge"),$("#f_mainTone"))
F_fun($("#f_mainOne3f"),$("#f_mainOneimgf"),$("#f_mainTonf"))
var ages=1;
$(".f_subj>.f_subj11").click(function(){
    ages++;
    if((ages%2)==0){
    $(".f_subjk2").fadeOut(500)
    $(".f_subjk").fadeIn(500)
    console.log(ages%2)
    }else{
        $(".f_subjk").fadeOut(500)
        $(".f_subjk2").fadeIn(500)
    }
})
$(".f_subj>.f_subj12").click(function(){
    ages++;
    if((ages%2)==1){
    $(".f_subjk").fadeOut(500)
    $(".f_subjk2").fadeIn(500)
    console.log(ages%2)
}else{
    $(".f_subjk2").fadeOut(500)
    $(".f_subjk").fadeIn(500)
}
    })

