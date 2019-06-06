var page=1;//记录页面
$(".th_contentSafebox1right").click(function(){
		$(".th_all_content").css("display","none");
		$(".th_all_content2").css("display","block");
		page=2
	$(".th_contentSafebox1left ").toggleClass("th_choosed")
	$(".th_contentSafebox1right ").toggleClass("th_choosed")
})
$(".th_contentSafebox1left").click(function(){
		$(".th_all_content").css("display","block");
		$(".th_all_content2").css("display","none");
		page=1
	$(".th_contentSafebox1left ").toggleClass("th_choosed")
	$(".th_contentSafebox1right ").toggleClass("th_choosed")
})
var timer=setInterval(next,3000)
var imgurl_arr=["images/th_slider01.jpg","images/th_slider02.jpg","images/th_slider03.jpg","images/th_slider04.png","images/th_slider05.jpg"];
var num=0;//记录当前页码
$.each(imgurl_arr,function(i,val){
	$("<img src='"+val+"'>").appendTo($(".th_sliderImgs"));
	$(".th_sliderImgs").children().eq(i).css({
		position: "absolute",
		left: 666,
		top:0
	});
})
$.each(imgurl_arr,function(i){
	$("<div></div>").appendTo(".th_slidertap");
})
$(".th_slidertap div").mouseover(function(){
	// console.log($(this).index())
	var index=$(this).index();
	$(this).css("background","white");
	$(this).siblings().css("background","transparent");
	if(index>num){
		$(".th_sliderImgs").children().eq(index).css("left",666);
		$(".th_sliderImgs").children().eq(num).stop().animate({left:-666},700);
		$(".th_sliderImgs").children().eq(index).stop().animate({left:0},700);
		num=index
	}
	if(index<num){
		$(".th_sliderImgs").children().eq(index).css("left",-666);
		$(".th_sliderImgs").children().eq(num).stop().animate({left:666},700);
		$(".th_sliderImgs").children().eq(index).stop().animate({left:0},700);
		num=index
	}
})
$(".th_slidertap").children().eq(0).css("background","white")
function next(){
	$(".th_sliderImgs").children().eq(num).stop().animate({left:-666},700);
	if(num+1==imgurl_arr.length){
		num=-1
	}
	$(".th_sliderImgs").children().eq(num+1).css("left",666);
	$(".th_sliderImgs").children().eq(num+1).stop().animate({left:0},700);
	$(".th_slidertap").children().eq(num).css("background","transparent")
	num++
	$(".th_slidertap").children().eq(num).css("background","white")
	if(num+1==imgurl_arr.length){
		$(".th_slidertap").children().eq(0).css("background","white")
	}
}
$(".th_sliderImgs").children().eq(0).css("left",0);
$(".th_slidertap").mouseover(function(){
	clearInterval(timer)
})
$(".th_slidertap").mouseout(function(){
	timer=setInterval(next,3000)
})
var qa_arr=["我的产品能否+互联网","品牌影响力提升","降低广告成本","从零开始","官网建设&升级","通过互联网获取潜在客户","团队组建与管理","全球机会在哪里","如何提升客户转化"]
$.each(qa_arr,function(i,val){
	var myli=document.createElement("li");
	var mydiv=document.createElement("div");
	var myp=document.createElement("p");
	var myul=document.getElementsByClassName('th_qa')[0]
	$(mydiv).html("Q").css({
		background:"#2668db",
		color:"white",
		fontWeight:700,
		fontSize:14,
		textAlign:"center",
		width:24,
		paddingTop:2,
		height:22,
		borderRadius:12,
		float:"left"
	});
	$(myp).html(val).css({
		float:"left",
		color:"#262626",
		fontSize:15,
		marginLeft:11
	})
	myli.appendChild(mydiv);
	myli.appendChild(myp);
	myul.appendChild(myli);
	// console.log(($(".th_qa li")).eq(i))
})
$(".th_qa li p").mouseenter(function(){
	$(this).css({
		fontWeight:700,
		color:"#2769dc"
	})
})
$(".th_qa li p").mouseleave(function(){
	$(this).css({
		fontWeight:400,
		color:"#262626"
	})
})
function ran(a,b){
	return Math.floor(Math.random()*(b-a+1))+a
}
setInterval(function(){
	var num=ran(0,9);
	var html=$(".th_qa div").eq(num).html();
	if(html=="Q"){
		html=$(".th_qa div").eq(num).html("A").css("background","#2faa18")
	}else{
		$(".th_qa div").eq(num).html("Q").css("background","#2668db")
	}
},1000);
// -----------------------------------------------------
var textnum1=0,textnum2=1,textnum3=2,textnextnum=3;
var textnum1b=0,textnum2b=1,textnum3b=2,textnextnumb=3;
$(".th_contentSafebox2rightbox4divs").children().eq(textnum1).css("top",0)
$(".th_contentSafebox2rightbox4divs").children().eq(textnum2).css("top",24)
$(".th_contentSafebox2rightbox4divs").children().eq(textnum3).css("top",48)
$(".th_content2Safebox2rightbox4divs").children().eq(textnum1b).css("top",0)
$(".th_content2Safebox2rightbox4divs").children().eq(textnum2b).css("top",24)
$(".th_content2Safebox2rightbox4divs").children().eq(textnum3b).css("top",48)
function textNext(){
	if(page==1){
		if(textnum1>$(".th_contentSafebox2rightbox4divs").children().length-1){textnum1=0}
		$(".th_contentSafebox2rightbox4divs").children().eq(textnum1).animate({top:-24});
		if(textnum2>$(".th_contentSafebox2rightbox4divs").children().length-1){textnum2=0}
		$(".th_contentSafebox2rightbox4divs").children().eq(textnum2).animate({top:0});
		if(textnum3>$(".th_contentSafebox2rightbox4divs").children().length-1){textnum3=0}
		$(".th_contentSafebox2rightbox4divs").children().eq(textnum3).animate({top:24});
		if(textnextnum>$(".th_contentSafebox2rightbox4divs").children().length-1){textnextnum=0}
		$(".th_contentSafebox2rightbox4divs").children().eq(textnextnum).css("top",72);
		$(".th_contentSafebox2rightbox4divs").children().eq(textnextnum).animate({top:48});
		textnum1++;
		textnum2++;
		textnum3++;
		textnextnum++;
	}
	if(page==2){
		if(textnum1b>$(".th_content2Safebox2rightbox4divs").children().length-1){textnum1b=0}
		$(".th_content2Safebox2rightbox4divs").children().eq(textnum1b).animate({top:-24});
		if(textnum2b>$(".th_content2Safebox2rightbox4divs").children().length-1){textnum2b=0}
		$(".th_content2Safebox2rightbox4divs").children().eq(textnum2b).animate({top:0});
		if(textnum3b>$(".th_content2Safebox2rightbox4divs").children().length-1){textnum3b=0}
		$(".th_content2Safebox2rightbox4divs").children().eq(textnum3b).animate({top:24});
		if(textnextnumb>$(".th_content2Safebox2rightbox4divs").children().length-1){textnextnumb=0}
		$(".th_content2Safebox2rightbox4divs").children().eq(textnextnumb).css("top",72);
		$(".th_content2Safebox2rightbox4divs").children().eq(textnextnumb).animate({top:48});
		textnum1b++;
		textnum2b++;
		textnum3b++;
		textnextnumb++;
	}

}
var textTimer=setInterval(textNext,1000);
if(page==1){
	$(".th_contentSafebox2rightbox4divs").mouseenter(function(){
		clearInterval(textTimer)
	})
	$(".th_contentSafebox2rightbox4divs").mouseleave(function(){
		textTimer=setInterval(textNext,1000);
	})
}
if(page==2)
$(".th_content2Safebox2rightbox4divs").mouseenter(function(){
	clearInterval(textTimer)
	$(".th_content2Safebox2rightbox4divs").mouseleave(function(){
		textTimer=setInterval(textNext,1000);
	})
})
var textHtml=["<p></p>供应:广东铝蜂窝芯生产厂家",
"<p></p>供应:ALTECH PP-H A 4940/506",
"<p></p>供应:新闻.义乌到昆明汽车大巴客车直",
"<p></p>供应:Axpoly PP19 1024 Axion PP耐",
"<p></p>供应:专业生产大豆输送机 轻型输送机",
"<p></p>供应:御夫王老**乳膏 草本乳膏老**软",
"<p></p>供应:供水用大口径内8710防腐螺旋钢"]
var textHtml2=["<p></p>求购:电磁阀ZS22061B",
"<p></p>求购:箱变检修变S11-",
"<p></p>求购:合金刀头YG14什么价格",
"<p></p>求购:240×115×90外墙装饰砖 住宅外",
"<p></p>求购:合金刀头YG14什么价格",
"<p></p>求购:周转箱",
"<p></p>求购:SEW 电机型号SA37DT71D4 90"]
$(".th_contentSafebox2rightbox3 p").eq(0).mouseenter(function(){
	$(this).css({
		fontWeight:700,
		color:"#2768db"
	})
	$(this).siblings().css({
		fontWeight:400,
		color:"#262626"
	})
	$.each(textHtml,function(i,val){
		$(".th_contentSafebox2rightbox4divs div").eq(i)[0].innerHTML=val

	})
})
$(".th_content2Safebox2rightbox3 p").eq(0).mouseenter(function(){
	$(this).css({
		fontWeight:700,
		color:"#2768db"
	})
	$(this).siblings().css({
		fontWeight:400,
		color:"#262626"
	})
	$.each(textHtml,function(i,val){
		$(".th_content2Safebox2rightbox4divs div").eq(i)[0].innerHTML=val

	})
})
$(".th_contentSafebox2rightbox3 p").eq(2).mouseenter(function(){
	$(this).css({
		fontWeight:700,
		color:"#2768db"
	})
	$(this).siblings().css({
		fontWeight:400,
		color:"#262626"
	})
	$.each(textHtml2,function(i,val){
		$(".th_contentSafebox2rightbox4divs div").eq(i)[0].innerHTML=val

	})
})

$(".th_content2Safebox2rightbox3 p").eq(2).mouseenter(function(){
	$(this).css({
		fontWeight:700,
		color:"#2768db"
	})
	$(this).siblings().css({
		fontWeight:400,
		color:"#262626"
	})
	$.each(textHtml2,function(i,val){
		$(".th_content2Safebox2rightbox4divs div").eq(i)[0].innerHTML=val

	})
})
$(".th_contentSafebox2rightbox3 p").mouseleave(function(){
	$(this).css("color","#262626")
})
$(".th_content2Safebox2rightbox3 p").mouseleave(function(){
	$(this).css("color","#262626")
})

var textnum21=0,textnum22=1,textnum23=2,textnextnum2=3;
$(".th_contentSafebox2rightbox6divs").children().eq(textnum21).css("top",0)
$(".th_contentSafebox2rightbox6divs").children().eq(textnum22).css("top",24)
$(".th_contentSafebox2rightbox6divs").children().eq(textnum23).css("top",48)
//-------------------------------------------------------------- 
var textnum21b=0,textnum22b=1,textnum23b=2,textnextnum2b=3;
$(".th_content2Safebox2rightbox6divs").children().eq(textnum21b).css("top",0)
$(".th_content2Safebox2rightbox6divs").children().eq(textnum22b).css("top",24)
$(".th_content2Safebox2rightbox6divs").children().eq(textnum23b).css("top",48)
function textNext2(){
	if(page==1){
		if(textnum21>$(".th_contentSafebox2rightbox6divs").children().length-1){textnum21=0}
		$(".th_contentSafebox2rightbox6divs").children().eq(textnum21).animate({top:-24});
		if(textnum22>$(".th_contentSafebox2rightbox6divs").children().length-1){textnum22=0}
		$(".th_contentSafebox2rightbox6divs").children().eq(textnum22).animate({top:0});
		if(textnum23>$(".th_contentSafebox2rightbox6divs").children().length-1){textnum23=0}
		$(".th_contentSafebox2rightbox6divs").children().eq(textnum23).animate({top:24});
		if(textnextnum2>$(".th_contentSafebox2rightbox6divs").children().length-1){textnextnum2=0}
		$(".th_contentSafebox2rightbox6divs").children().eq(textnextnum2).css("top",72);
		$(".th_contentSafebox2rightbox6divs").children().eq(textnextnum2).animate({top:48});
		textnum21++;
		textnum22++;
		textnum23++;
		textnextnum2++;
	}
	if(page==2){
		if(textnum21b>$(".th_content2Safebox2rightbox6divs").children().length-1){textnum21b=0}
		$(".th_content2Safebox2rightbox6divs").children().eq(textnum21b).animate({top:-24});
		if(textnum22b>$(".th_content2Safebox2rightbox6divs").children().length-1){textnum22b=0}
		$(".th_content2Safebox2rightbox6divs").children().eq(textnum22b).animate({top:0});
		if(textnum23b>$(".th_content2Safebox2rightbox6divs").children().length-1){textnum23b=0}
		$(".th_content2Safebox2rightbox6divs").children().eq(textnum23b).animate({top:24});
		if(textnextnum2b>$(".th_content2Safebox2rightbox6divs").children().length-1){textnextnum2b=0}
		$(".th_content2Safebox2rightbox6divs").children().eq(textnextnum2b).css("top",72);
		$(".th_content2Safebox2rightbox6divs").children().eq(textnextnum2b).animate({top:48});
		textnum21b++;
		textnum22b++;
		textnum23b++;
		textnextnum2b++;
	}

}
var textTimer2=setInterval(textNext2,2000);
if(page==1){
	$(".th_contentSafebox2rightbox6divs").mouseenter(function(){
		clearInterval(textTimer2)
	})
	$(".th_contentSafebox2rightbox6divs").mouseleave(function(){
		textTimer2=setInterval(textNext2,2000);
	})
}
if(page==2){
	$(".th_content2Safebox2rightbox6divs").mouseenter(function(){
		clearInterval(textTimer2)
	})
	$(".th_content2Safebox2rightbox6divs").mouseleave(function(){
		textTimer2=setInterval(textNext2,2000);
	})
}
var textHtml21=["<p></p>供应:广东铝蜂窝芯生产厂家",
"<p></p>供应:ALTECH PP-H A 4940/506",
"<p></p>供应:新闻.义乌到昆明汽车大巴客车直",
"<p></p>供应:Axpoly PP19 1024 Axion PP耐",
"<p></p>供应:专业生产大豆输送机 轻型输送机",
"<p></p>供应:御夫王老**乳膏 草本乳膏老**软",
"<p></p>供应:供水用大口径内8710防腐螺旋钢"]
var textHtml22=["<p></p>求购:电磁阀ZS22061B",
"<p></p>求购:箱变检修变S11-",
"<p></p>求购:合金刀头YG14什么价格",
"<p></p>求购:240×115×90外墙装饰砖 住宅外",
"<p></p>求购:合金刀头YG14什么价格",
"<p></p>求购:周转箱",
"<p></p>求购:SEW 电机型号SA37DT71D4 90"]
$(".th_contentSafebox2rightbox5 p").eq(0).mouseenter(function(){
	$(this).css({
		fontWeight:700,
		color:"#2768db"
	})
	$(this).siblings().css({
		fontWeight:400,
		color:"#262626"
	})
	$.each(textHtml21,function(i,val){
		$(".th_contentSafebox2rightbox6divs div").eq(i)[0].innerHTML=val

	})
})
$(".th_content2Safebox2rightbox5 p").eq(0).mouseenter(function(){
	$(this).css({
		fontWeight:700,
		color:"#2768db"
	})
	$(this).siblings().css({
		fontWeight:400,
		color:"#262626"
	})
	$.each(textHtml21,function(i,val){
		$(".th_content2Safebox2rightbox6divs div").eq(i)[0].innerHTML=val

	})
})
$(".th_contentSafebox2rightbox5 p").eq(2).mouseenter(function(){
	$(this).css({
		fontWeight:700,
		color:"#2768db"
	})
	$(this).siblings().css({
		fontWeight:400,
		color:"#262626"
	})
	$.each(textHtml22,function(i,val){
		$(".th_contentSafebox2rightbox6divs div").eq(i)[0].innerHTML=val

	})
})
$(".th_content2Safebox2rightbox5 p").eq(2).mouseenter(function(){
	$(this).css({
		fontWeight:700,
		color:"#2768db"
	})
	$(this).siblings().css({
		fontWeight:400,
		color:"#262626"
	})
	$.each(textHtml22,function(i,val){
		$(".th_content2Safebox2rightbox6divs div").eq(i)[0].innerHTML=val

	})
})
$(".th_contentSafebox2rightbox5 p").mouseleave(function(){
	$(this).css("color","#262626")
});
$(".th_content2Safebox2rightbox5 p").mouseleave(function(){
	$(this).css("color","#262626")
});
var sflag=true;
var stnum=0;
var navnum=0;
$(window).scroll(function(){
	var scrollTop=$("body").scrollTop()||$("html").scrollTop()
	if((scrollTop>$(".th_all_content").offset().top)&&sflag&&page==1){
		$(".th_fixedview").eq(0).animate({top:0},100);
		sflag=false;
		$(".th_rightside").fadeIn()
	}
	if((scrollTop<=$(".th_all_content").offset().top)&&!sflag&&page==1){
		$(".th_fixedview").eq(0).animate({top:-70},100)
		sflag=true;
		$(".th_rightside").fadeOut()
	}
	if((scrollTop>$(".th_all_content2").offset().top)&&sflag&&page==2){
		$(".th_fixedview").eq(0).animate({top:0},100);
		sflag=false;
		$(".th_rightside").fadeIn()
	}
	if((scrollTop<=$(".th_all_content2").offset().top)&&!sflag&&page==2){
		$(".th_fixedview").eq(0).animate({top:-70},100)
		sflag=true;
		$(".th_rightside").fadeOut()
	}	
	if(stnum<scrollTop){
		$(".th_ggtail").css({bottom:-158})
		$(".th_ggtail02").css({bottom:150})
	}else{
		$(".th_ggtail").css({bottom:0})
		$(".th_ggtail02").css({bottom:-150})
	}
	stnum=scrollTop;
	//  nav
	var H=window.innerHeight;
	if(page==2){
		if($(".th_AC2floorcontent>div").eq(0).offset().top-H/2<scrollTop){
			$(".th_nav_content").fadeIn()
		}else{
			$(".th_nav_content").fadeOut()
		}
		$.each($(".th_floor_content"),function(i){
			if($(".th_floor_content").eq(i).offset().top-H/2<scrollTop){
				var index=$(".th_floor_content").eq(i).index()/2;
				$(".th_nav_content").children().eq(1).children().eq(index).addClass("th_nav_contentC")
				$(".th_nav_content").children().eq(1).children().eq(index).siblings().removeClass("th_nav_contentC")
			}
		})
	}
})
$(".th_nav_content").children().eq(1).children().click(function(){
	// console.log(1)
	// var scrollTop=$("body").scrollTop()||$("html").scrollTop()
	var H=window.innerHeight;
	var index=$(this).index();
	var h=$(".th_AC2floorcontent>div").eq(index).offset().top-95;

	$("html,body").animate({
		scrollTop:h
	},1000)
	navnum=index;
	// console.log(index,h)
})
	// $.each($(".th_AC2floorcontent>div"),function(i,val){
	// })

//  to top

$(".th_nav_content div").children().mouseenter(function(){
	$(this).addClass("th_nav_contentC");
})
$(".th_nav_content div").children().mouseleave(function(){
	// $(this).removeClass("th_nav_contentC");
	$(".th_nav_content").children().eq(1).children().eq(navnum).siblings().removeClass("th_nav_contentC")
})


$(".th_totop").click(function(){
	$("body,html").animate({
		scrollTop:0
	},800)
})
$(".th_AC1leftbox1div1box").click(function(){
	var html=$(".th_AC1leftbox1div1").html();
	$(".th_AC1leftbox1div1").html($(this).html());
	$(this).html(html)
	$(".th_AC1leftbox1div1box").css("display","none")
})
$(".th_AC1leftbox1div1").mouseenter(function(){
	$(".th_AC1leftbox1div1box").css("display","block")
})
$(".th_AC1leftbox1div1box").mouseleave(function(){
	$(".th_AC1leftbox1div1box").css("display","none")
})


$(".th_AC1lefttableft li>div").eq(0).css("display","block")
$(".th_AC1lefttableft li>p").eq(0).css({
	backgroundColor: "#e8edf2",
	borderRight:"3px solid #2769dc",
})
$(".th_AC1lefttableft p").mouseenter(function(){
	$(this).next().css("display","block")
	$(this).parent().siblings().each(function(){
		$(this).children().eq(1).css("display","none")
	})
	$(this).parent().siblings().each(function(){
		$(this).children().eq(0).css({
			backgroundColor: "#f7f9fa",
			borderRight:"2px solid transparent",
		})
	})
	$(this).css({
		backgroundColor: "#e8edf2",
		borderRight:"3px solid #2769dc",
	})
})