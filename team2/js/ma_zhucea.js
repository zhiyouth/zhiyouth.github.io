//会员名
function Tj(){
	$(".ma_hidden1").children().hide()
$(".ma_tb2shuru").bind({
	focus:function(){
		if($(".ma_tb2shuru").val()==""){
			$(".ma_hidden1").children().eq(0).show();
			$(".ma_hidden1").children().eq(3).show();

		}
	},
	keyup:function(){
		var reg=/^\w{4,20}$/;
		var userRes=reg.test(user.value);
		if(!userRes){
			$(".ma_hidden1").children().eq(0).show();
			$(".ma_hidden1").children().eq(2).show();
			$(".ma_hidden1").children().eq(1).hide();
			$(".ma_hidden1").children().eq(3).hide();
			$(".ma_hidden1").children().eq(4).hide();
		}else{
			$(".ma_hidden1").children().eq(1).show()
			$(".ma_hidden1").children().eq(0).hide();
			$(".ma_hidden1").children().eq(2).hide();
			$(".ma_hidden1").children().eq(3).hide();
			$(".ma_hidden1").children().eq(4).show();

			
		}
	}
})

// 登录密码
$(".ma_hidden1a").children().hide()
$(".ma_tb2shurua").bind({
	focus:function(){
		if($(".ma_tb2shurua").val()==""){
			$(".ma_hidden1a").children().eq(0).show();
			$(".ma_hidden1a").children().eq(3).show();
			$(".ma_hidden1a").children().eq(1).hide();
			$(".ma_hidden1a").children().eq(2).hide();
			$(".ma_hidden1a").children().eq(4).hide();
		}
	},
	keyup:function(){
		var regs=/[A-z]/;
		var regs2=/[\d]/;
		var regs3=/^.{6,12}$/;
		var userResa=regs.test(user1.value);
		var userResab=regs2.test(user1.value);
		var userResac=regs3.test(user1.value);
		// console.log(userResa,user1.value)
		if(userResa&&userResab&&userResac){
			$(".ma_hidden1a").children().eq(1).show();
			$(".ma_hidden1a").children().eq(4).show();
			$(".ma_hidden1a").children().eq(0).hide();
			$(".ma_hidden1a").children().eq(2).hide();
			$(".ma_hidden1a").children().eq(3).hide();
		}else{
			
			$(".ma_hidden1a").children().eq(0).show();
			$(".ma_hidden1a").children().eq(2).show();
			$(".ma_hidden1a").children().eq(1).hide();
			$(".ma_hidden1a").children().eq(3).hide();
			$(".ma_hidden1a").children().eq(4).hide();
		}

	}
})
// 密码确认
$(".ma_hidden1b").children().hide()
$(".ma_tb2shurub").bind({
	focus:function(){
		if($(".ma_tb2shurub").val()==""){
			$(".ma_hidden1b").children().eq(0).show();
			$(".ma_hidden1b").children().eq(3).show();
			$(".ma_hidden1b").children().eq(1).hide();
			$(".ma_hidden1b").children().eq(2).hide();
			$(".ma_hidden1b").children().eq(4).hide();
		}
	},
	keyup:function(){
		if(user1.value==user2.value){
			$(".ma_hidden1b").children().eq(1).show();
			$(".ma_hidden1b").children().eq(4).show();
			$(".ma_hidden1b").children().eq(0).hide();
			$(".ma_hidden1b").children().eq(2).hide();
			$(".ma_hidden1b").children().eq(3).hide();

		}else{
			$(".ma_hidden1b").children().eq(0).show();
			$(".ma_hidden1b").children().eq(2).show();
			$(".ma_hidden1b").children().eq(1).hide();
			$(".ma_hidden1b").children().eq(3).hide();
			$(".ma_hidden1b").children().eq(4).hide();


		}
	}
})


// 企业信息
$(".ma_hidden1c").children().hide()
$(".ma_tb3shuruc").bind({
	focus:function(){
		if($(".ma_tb3shuruc").val()==""){
			$(".ma_hidden1c").children().eq(0).show();
			$(".ma_hidden1c").children().eq(3).show();
			$(".ma_hidden1c").children().eq(1).hide();
			$(".ma_hidden1c").children().eq(2).hide();
		}
	},
	keyup:function(){
		$(".ma_hidden1c").children().eq(1).show();
		$(".ma_hidden1c").children().eq(2).show();
		$(".ma_hidden1c").children().eq(0).hide();
		$(".ma_hidden1c").children().eq(3).hide();
	}
})

//联系人

$(".ma_hidden1d").children().hide()
$(".ma_tb4shurud").bind({
	focus:function(){	
		if($(".ma_tb4shurud").val()==""){
			$(".ma_hidden1d").children().eq(0).show();
			$(".ma_hidden1d").children().eq(3).show();
			$(".ma_hidden1d").children().eq(1).hide();
			$(".ma_hidden1d").children().eq(2).hide();
			$(".ma_hidden1d").children().eq(4).hide();
		}
	},
	keyup:function(){
		var reg4=/\w/;
		var reg5=/.{5,}/;
		var userResad=reg4.test(user3.value);
		var userResae=reg5.test(user3.value);
		console.log(userResad,userResae,user3.value)
		if(userResae||userResad){
			$(".ma_hidden1d").children().eq(0).show();
			$(".ma_hidden1d").children().eq(2).show();
			$(".ma_hidden1d").children().eq(1).hide();
			$(".ma_hidden1d").children().eq(3).hide();
			$(".ma_hidden1d").children().eq(4).hide();
		}else{
			$(".ma_hidden1d").children().eq(1).show();
			$(".ma_hidden1d").children().eq(4).show();
			$(".ma_hidden1d").children().eq(2).hide();
			$(".ma_hidden1d").children().eq(0).hide();
			$(".ma_hidden1d").children().eq(3).hide();
		}
	}

})

//手机号码
$(".ma_hidden1e").children().hide()

$(".ma_tb2shurud").bind({
	focus:function(){
		if($(".ma_tb4shurud").val()==""){
			$(".ma_hidden1e").children().eq(0).show();
			$(".ma_hidden1e").children().eq(3).show();
			$(".ma_hidden1e").children().eq(1).hide();
			$(".ma_hidden1e").children().eq(2).hide();
			$(".ma_hidden1e").children().eq(4).hide();
			
		}
		else{
			$(".ma_hidden1e").children().eq(0).hide();
			$(".ma_hidden1e").children().eq(1).hide();
			$(".ma_hidden1e").children().eq(2).hide();
			$(".ma_hidden1e").children().eq(3).hide();
			$(".ma_hidden1e").children().eq(4).hide();
		}
	
	},
	keyup:function(){
		var reg5=/^1[3-9]\d{9}$/g;
		var userResaf=reg5.test(user4.value);
		if(userResaf){
			$(".ma_hidden1e").children().eq(1).show();
			$(".ma_hidden1e").children().eq(4).show();
			$(".ma_hidden1e").children().eq(2).hide();
			$(".ma_hidden1e").children().eq(0).hide();
			$(".ma_hidden1e").children().eq(3).hide();
		}else{
			$(".ma_hidden1e").children().eq(0).show();
			$(".ma_hidden1e").children().eq(2).show();
			$(".ma_hidden1e").children().eq(1).hide();
			$(".ma_hidden1e").children().eq(3).hide();
			$(".ma_hidden1e").children().eq(4).hide();
		}
	}
})


// 电子邮箱

$(".ma_hidden1f").children().hide()

$(".ma_tb2shurug").bind({
	focus:function(){
		if($(".ma_tb4shurug").val()==""){
			$(".ma_hidden1f").children().eq(0).show();
			$(".ma_hidden1f").children().eq(3).show();
			$(".ma_hidden1f").children().eq(1).hide();
			$(".ma_hidden1f").children().eq(2).hide();
			$(".ma_hidden1f").children().eq(4).hide();
			
		}
		else{
			$(".ma_hidden1f").children().eq(0).hide();
			$(".ma_hidden1f").children().eq(1).hide();
			$(".ma_hidden1f").children().eq(2).hide();
			$(".ma_hidden1f").children().eq(3).hide();
			$(".ma_hidden1f").children().eq(4).hide();
		}
	},
	keyup:function(){
		var reg6=/^\d{9}$/g;
		var userResag=reg6.test(user5.value);
		if(userResag){
			$(".ma_hidden1f").children().eq(1).show();
			$(".ma_hidden1f").children().eq(4).show();
			$(".ma_hidden1f").children().eq(2).hide();
			$(".ma_hidden1f").children().eq(0).hide();
			$(".ma_hidden1f").children().eq(3).hide();
		}else{
			$(".ma_hidden1f").children().eq(0).show();
			$(".ma_hidden1f").children().eq(2).show();
			$(".ma_hidden1f").children().eq(1).hide();
			$(".ma_hidden1f").children().eq(3).hide();
			$(".ma_hidden1f").children().eq(4).hide();
		}
	}
})

//填写推荐人

$(".ma_hidden1g").children().hide()
$(".ma_tb2shuruh").keyup(function(){	
	$(".ma_hidden1g").children().eq(0).show();			
	$(".ma_hidden1g").children().eq(1).show();
})

// 点击我已阅读勾选
var count=0;
$(".ma_selceta").click(function(){
	$("#ma_ljhidden").hide();
	count++;
	if(count%2==0){
		$("#ma_ljhidden").show();
	}

})

// 验证码
var stra="abcdefghijklmopqrstuvwxyz0123456789";
function random(a,b){
    return Math.floor(Math.random()*(b-a+1))+a;
}
var code="";
function codeFun(){
    code="";
    for(var i=0;i<6;i++){
        code+=stra.charAt(random(0,stra.length-1));
    }

    ma_btn.innerHTML=code;
}
ma_btn.onclick=codeFun;
console.log(ma_btn.onclick)
ma_ipt.onblur=function(){

    if(this.value!==code){
        alert("验证码错误")
        codeFun();
    }else{
        alert("验证成功")
    }

}

// 点击个人会员注册实现切换
var mouseflag=true;
$(".ma_topyouqing").show()
$(".ma_topyouqing2").hide();

$(".ma_grhuiyuan").click(function(){
	$(".ma_topyouqing").hide();
	$(".ma_topyouqing2").show();
	$("#ma_qyhide").hide();
	$("#ma_qymchide").hide();
	// $(".ma_grhuiyuan").css("color","#FF6600")
	// 点击后颜色变化
	$(".ma_qyhuiyuan").css({
		color:"black",
		borderBottom:"3px solid  white"
	})
	$(".ma_grhuiyuan").css({
		color:"#FF6600",
		borderBottom:"3px solid  #FF6600"
	})
	// 点击后单选框变化
	$("#ma_bbb")[0].checked=true
	// [0]转换为js对象
	$("#ma_bbb2")[0].checked=true


})

$(".ma_qyhuiyuan").click(function(){
	$(".ma_topyouqing2").hide();
	$(".ma_topyouqing").show();
	$("#ma_qyhide").show();
	$("#ma_qymchide").show();
	$(".ma_qyhuiyuan").css({
		color:"#FF6600",
		borderBottom:"3px solid  #FF6600"
	})
	$(".ma_grhuiyuan").css({
		color:"black",
		borderBottom:"3px solid  white"
	})
	$("#ma_aaa")[0].checked=true
	$("#ma_aaa2")[0].checked=true
})

// 滑动个人会员注册实现切换
$(".ma_grhuiyuan").css({
	borderBottom:"3px solid  white ",
	color:"black"
})
$(".ma_qyhuiyuan").css({
	borderBottom:"3px solid  #FF6600 ",
	color:"#FF6600"
})
$(".ma_grhuiyuan").mouseenter(function(){
	if($(".ma_grhuiyuan").css("color","black")){
		$(".ma_grhuiyuan").css({
			color:"#FF6600",
			borderBottom:"3px solid  #FF6600 "
		})
	}
	
})

$(".ma_grhuiyuan").mouseleave(function(){
	
		$(".ma_grhuiyuan").css({
			color:"black",
			borderBottom:"3px solid  white"
		})
		
	
})

$(".ma_qyhuiyuan").mouseenter(function(){
	if($(".ma_qyhuiyuan").css("color","black")){
		$(".ma_qyhuiyuan").css({
			color:"#FF6600",
			borderBottom:"3px solid  #FF6600 "
		})
		
		
	}
	
})
$(".ma_qyhuiyuan").mouseleave(function(){
	
		$(".ma_qyhuiyuan").css({
			color:"#FF6600",
			borderBottom:"3px solid  #FF6600 "
		})

	
})
}
Tj()

//表单提交
// var arr=[$(".ma_tb2shuru").val(),$(".ma_tb2shurua").val(),$(".ma_tb2shurub").val()]
// console.log(arr)

// $("form").submit(function(){

// 	for(var i=0;i<arr.length;i++){
// 		if(arr[i]==""){
// 			alert("请全部填完再提交")
// 			return false
// 		}else{
// 			return true
// 		}

// 	}
	
// 	Tj()
// })
$(".ma_hidden1i").children().hide()
document.onclick=function(){
	var res=$(".ma_zcbody input")
	$.each(res,function(i,val){
		// console.log(val.value)
		$("form").submit(function(){
			if(val.value==""){
				console.log(val.value)
				$(".ma_hidden1i").children().eq(0).show()
				$(".ma_hidden1i").children().eq(1).show()
				// alert("请全部填完再提交")
				return false
			}
		})

	})
}	