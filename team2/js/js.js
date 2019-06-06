
// 专区  资源专区
$(".L_paretain_list-li").mouseover(function(){
    $(this).children("span").html("")
})
$(".L_paretain_list-li").mouseout(function(){
    $(this).children("span").html("0.05M")
})


// 专区  视频专区
$(".L_pertain_right-vide").mouseover(function(){
    $(this).css({opacity:"0.5"})})
$(".L_pertain_right-vide").mouseout(function(){
    $(this).css({opacity:"1"})})

$(".L_pertain_right-list-li").mouseover(function(){
    $(this).children().eq(1).html("")
})
$(".L_pertain_right-list-li").mouseout(function(){
    $(this).children().eq(1).html("11.31")
})