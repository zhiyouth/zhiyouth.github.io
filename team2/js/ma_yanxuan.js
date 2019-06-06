// 点击变色
$(".ma_alla").css({
	background:"#ec3901",
	color:"white"
})
$(".ma_dongxi").children().each(function(i){
	var count=0;

	$(this).click(function(){
		$(this).css({
			color:"white",
			background:"#ec3901"
		})
		$(this).siblings().css({
			color:"#666",
			background:"white"
		})

	})

})

$(".ma_rightred").children().eq(1).hide()
$(".ma_rightred1").children().eq(1).hide()
$(".ma_rightred2").children().eq(1).hide()
$("#m_kkk").click(function(){
	$("#ma_shangxia1").css({
		height:"35px",
		overflow:"hidden"
	})
	
	$(".ma_rightred").children().eq(0).hide()
	$(".ma_rightred").children().eq(1).show()
})
$("#m_kkk2").click(function(){
	$("#ma_shangxia2").css({
		height:"35px",
		overflow:"hidden"
	})
	$(".ma_rightred1").children().eq(0).hide()
	$(".ma_rightred1").children().eq(1).show()
})
$("#m_kkk3").click(function(){
	$("#ma_shangxia3").css({
		height:"35px",
		overflow:"hidden"
	})
	$(".ma_rightred2").children().eq(0).hide()
	$(".ma_rightred2").children().eq(1).show()
})



$("#m_mmm").click(function(){
	$("#ma_shangxia1").css({
		height:"145px"		
	})
	$(".ma_rightred").children().eq(0).show()
	$(".ma_rightred").children().eq(1).hide()
})

$("#m_lll2").click(function(){
	$("#ma_shangxia2").css({
		height:"58px"	
	})
	$(".ma_rightred1").children().eq(0).show()
	$(".ma_rightred1").children().eq(1).hide()
})
$("#m_lll3").click(function(){
	$("#ma_shangxia3").css({
		height:"58px"		
	})
	$(".ma_rightred2").children().eq(0).show()
	$(".ma_rightred2").children().eq(1).hide()
})

