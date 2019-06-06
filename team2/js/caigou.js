//      头部搜索小框
var ztj_yincang=document.getElementById('ztj_yincang');
var ztj_sixdiv=ztj_yincang.getElementsByTagName('div');
var ztj_canpin=document.getElementById('ztj_canpin');

for(var i=0;i<ztj_sixdiv.length;i++){
    ztj_sixdiv[i].onclick=function(){
        ztj_canpin.innerHTML=this.innerHTML;
        ztj_yincang.style.display="none";
    }
}
ztj_pinpai.onclick=function(){
    ztj_yincang.style.display="block";
}
ztj_yincang.onmouseleave=function(){
    ztj_yincang.style.display="none";
}

//  蓝线下面 一小行
var ztj_u=document.getElementById('ztj_u')
var ztj_l=ztj_u.getElementsByTagName('a')
ztj_l[7].style.borderBottom="3px solid blue";
ztj_l[7].style.paddingBottom="16px"


for(var i=0;i<ztj_l.length;i++){
    ztj_l[i].onclick=function(){
        this.style.borderBottom="3px solid blue";
        this.style.paddingBottom="16px";
        ztj_l[i].style.borderBottom="none";
        ztj_l[i].style.paddingBottom="none"
    }
}
// console.log(ztj_l)

// 供应商 采购商 小图切换
var ztj_xinx=document.getElementById('ztj_xinx')
var ztj_chs=document.getElementById('ztj_chs')
var ztj_tzc1=document.getElementById('ztj_tzc1')
var ztj_tzc2=document.getElementById('ztj_tzc2')

ztj_tzc1.style.color="red";
// ztj_tzc1.style.borderBottom="#ffffff"

ztj_tzc2.onmouseenter=function(){
    ztj_tzc1.style.color="black";
    ztj_tzc1.style.background="#afafaf";
    ztj_tzc1.style.borderBottom="#afafaf"
    ztj_xinx.innerHTML="免费发布采购单"
    ztj_tzc2.style.background="#ffffff";
    ztj_tzc2.style.borderBottom="#ffffff"
}
ztj_tzc1.onmouseenter=function(){
    ztj_tzc1.style.color="red";
    ztj_tzc1.style.background="#ffffff";
    ztj_tzc1.style.borderBottom="#ffffff"
    ztj_xinx.innerHTML="免费发布采产品信息"
    ztj_tzc2.style.background="#afafaf";
    ztj_tzc2.style.borderBottom="#afafaf"
}


// 大块的li们
// console.log($(".ztj_ava2 .ztj_ava6"))
$(".ztj_ava2 li").each(function(){
    var self=$(this)
    $(this).mouseenter(function(e){
        // console.log(self.children().children())
        self.css({background:"#afafaf"})
        self.children("a").children(".ztj_ava6").css({color:"red"}).html("查看详情")
    })
    $(this).mouseleave(function(){
        self.css({background:"#ffffff"})
        self.children("a").children(".ztj_ava6").css({color:"#666666"}).html("长期有效")
    })

})

// 五个固定定位

$(".ztj_nine1").mouseover(function(){
    $(".ztj_nine6").css({display:"block"})
    $(".ztj_nine1").css({background:"#1269d3"})
})
$(".ztj_nine1").mouseleave(function(){
    $(".ztj_nine6").css({display:"none"})
    $(".ztj_nine1").css({background:"#999999"})
})


$(".ztj_nine2").mouseover(function(){
    $(".ztj_nine7").css({display:"block"})
})
$(".ztj_nine2").mouseleave(function(){
    $(".ztj_nine7").css({display:"none"})
})


$(".ztj_nine3").mouseover(function(){
    $(".ztj_nine8").css({display:"block"})
})
$(".ztj_nine3").mouseleave(function(){
    $(".ztj_nine8").css({display:"none"})
})


$(".ztj_nine4").mouseover(function(){
    $(".ztj_nine9").css({display:"block"})
})
$(".ztj_nine4").mouseleave(function(){
    $(".ztj_nine9").css({display:"none"})
})


$("#ztj_nine5").mouseover(function(){
    $("#ztj_nine10").css({display:"block"})
})
$("#ztj_nine5").mouseleave(function(){
    $("#ztj_nine10").css({display:"none"})
})


// 楼层滚动
ztj_nine5.style.display="none";
ztj_nine5.onclick=function(){
    document.documentElement.scrollTop=0;
}

window.onscroll=function(){
    var ztj_st=document.body.scrollTop||document.documentElement.scrollTop;
    if(ztj_st>300){
        ztj_nine5.style.display="block"
    }else{
        ztj_nine5.style.display="none"
    }
}