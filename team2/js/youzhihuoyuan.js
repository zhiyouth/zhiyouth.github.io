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
ztj_l[1].style.borderBottom="3px solid blue";
ztj_l[1].style.paddingBottom="16px"


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

//  小轮播图

var ztj_xiao11=ztj_xiaolun.getElementsByTagName('div')
ztj_xiao11[0].style.display="block";

var ztj_bian1=0,ztj_xxx=1
ztj_xiao4.onclick=function(){
    ztj_xiao11[ztj_bian1].style.display="none";

    ++ztj_xxx
    ++ztj_bian1;

    if(ztj_bian1>ztj_xiao11.length-1){
        ztj_bian1=0;
        ztj_xxx=1;
    }
    ztj_nei.innerHTML="0"+ztj_xxx;
    ztj_xiao11[ztj_bian1].style.display="block"
}

ztj_xiao3.onclick=function(){
    ztj_xiao11[ztj_bian1].style.display="none"
    --ztj_xxx;
    --ztj_bian1;
    if(ztj_bian1<0){
        ztj_bian1=ztj_xiao11.length-1;
        ztj_xxx=ztj_xiao11.length;
    }
    ztj_nei.innerHTML="0"+ztj_xxx;
    ztj_xiao11[ztj_bian1].style.display="block"
}


// 大轮播
var ztj_daluntu=ztj_dalun.getElementsByClassName('ztj_dalun1');
// console.log(ztj_daluntu)
ztj_daluntu[0].style.display="block";

var ztj_p=0;

ztj_da2.onclick=function(){
    ztj_daluntu[ztj_p].style.display="none";
    ztj_p++
    
    if(ztj_p>ztj_daluntu.length-1){
        ztj_p=0;
    }
    ztj_daluntu[ztj_p].style.display="block"
}
ztj_da1.onclick=function(){
    ztj_daluntu[ztj_p].style.display="none";
    ztj_p--
    
    if(ztj_p<0){
        ztj_p=ztj_daluntu.length-1;
    }
    ztj_daluntu[ztj_p].style.display="block"
}
// $(".ztj_dalun1:first").show();
// var ztj_p=0;
// $("#ztj_da2").click(function(){

//     $(".ztj_dalun1:eq("+ztj_p+")").fadeOut(200);
//     ztj_p++;
//     if(ztj_p>1){
//         ztj_p=0;
//     }
//     $(".ztj_dalun1:eq("+x+")").fadeIn(200);
// })

// $("#ztj_da1").click(function(){

//     $(".ztj_dalun1:eq("+ztj_p+")").fadeOut(200);
//     ztj_p--;
//     if(ztj_p<0){
//         ztj_p=2;
//     }
//     $(".ztj_dalun1:eq("+x+")").fadeIn(200);
// })
 

// 最后的轮播图

$("#ztj_seven1 li").eq(0).clone().appendTo($("#ztj_seven1"));

    $("#ztj_seven1").css({
		width:$("#ztj_seven1").children().length*parseFloat($("#ztj_seven1").children().eq(0).css("width"))
	})

    var ztj_zzx=0;

    var ztj_flag=true;
    
    function ztjNext(){

    $("#ztj_seven1").animate({marginLeft:-240},500,function(){
        $("#ztj_seven1").css({marginLeft:0})
        $("#ztj_seven1 li").eq(0).appendTo($("#ztj_seven1"))
    });

}

var ztj_timer=setInterval(ztjNext,2000)


ztj_six8.onmouseover=function(){

    clearInterval(ztj_timer);

}

ztj_six8.onmouseout=function(){

    ztj_timer=setInterval(ztjNext,2000);
    
}

ztj_six7.onmouseover=function(){

    clearInterval(ztj_timer);

}

ztj_six7.onmouseout=function(){

    ztj_timer=setInterval(ztjNext,2000);
    
}



	$("#ztj_six8").click(function(){
		if(ztj_flag){
	    	ztj_flag=false;
			ztj_zzx++;
			if(ztj_zzx==5){
				ztj_zzx=1;
				$("#ztj_seven1").css({marginLeft:0});
			}
			$("#ztj_seven1").animate({marginLeft:-240*ztj_zzx},400,function(){
				ztj_flag=true;
			});
		}
	})

    $("#ztj_six7").click(function(){
        if(ztj_flag){
            ztj_flag=false;
            ztj_zzx--;
            if(ztj_zzx<0){
                ztj_zzx=3;
                $("#ztj_seven1").css({marginLeft:-240*(ztj_zzx+1)});
            }
            $("#ztj_seven1").animate({marginLeft:-240*ztj_zzx},400,function(){
                ztj_flag=true;
            });
        }
    });









// $("#ztj_six8").click(function(){
//     $("#ztj_seven1").animate({marginLeft:-240},500,function(){
//         $("#ztj_seven1").css({marginLeft:0})
//         $("#ztj_seven1 li").eq(0).appendTo($("#ztj_seven1"))
//     })
// })

// $("#ztj_six7").click(function(){
//     $("#ztj_seven1").animate({marginLeft:240},500,function(){
//         $("#ztj_seven1").css({marginLeft:0})
//         $("#ztj_seven1 li").last().appendTo($("#ztj_seven1"));
//     })
// })
 
// function ztjNext(){

//     $("#ztj_seven1").animate({marginLeft:-240},500,function(){
//         $("#ztj_seven1").css({marginLeft:0})
//         $("#ztj_seven1 li").eq(0).appendTo($("#ztj_seven1"))
//     });

// }
// // $("#ztj_six8").click(ztjNext,2000);
// var timer=setInterval(ztjNext,2000)









// 最后五个定位
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