// 扫码登录和切换
$(".ma_tabdenglu2").hide();
$(".ma_topdenglu").css("background","#f1f4f7")
$(".ma_topzhuce").click(function(){
	$(".ma_tabdenglu1").show();
	$(".ma_tabdenglu2").hide();
	$(this).css({
		background:"white",
		color:"#2769dc"
	})
	$(".ma_topdenglu").css({
		background:"#f1f4f7",
		color:"black"
	})

	
})
$(".ma_topdenglu").click(function(){
	$(this).css({
		background:"white",
		color:"#2769dc"
	})
	$(".ma_topzhuce").css({
		background:"#f1f4f7",
		color:"black"
	})
	$(".ma_tabdenglu1").hide();
	$(".ma_tabdenglu2").show();

})

$(".ma_erweima2").hide()
$(".ma_erweihuadong").mouseenter(function(){
	$(".ma_erweima1").stop().animate({
		marginLeft:10
	},300,function(){
		$(".ma_erweima2").show()
	})	
})

$(".ma_erweihuadong").mouseleave(function(){
	$(".ma_erweima2").hide()
	$(".ma_erweima1").stop().animate({
		marginLeft:90
	})	
})
// 账号注册表单提交

$("form").submit(function(){
	if($(".ma_zhanghao").val()==""){
		alert("请输入账号");
		return false
	}
	if($(".ma_mima").val()==""){
		alert("请输入密码");
		return false
	}
	var reg=/^\w{6,16}$/;
	var userRes=reg.test(user.value);
	if(!userRes){
		alert("密码格式不对");
		return false
	}else{
		return true
	}
		
})

