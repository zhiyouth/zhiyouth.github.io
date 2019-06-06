;(function(){
    $(".left_picsmbox img").eq(0).css({
        border: "1px solid red"
    })
    $(".left_picsmbox img").click(function(){
        $(".left_picsmbox img").css({
            border: "1px solid #dedede"
        })
        $(".left_picbig").attr({
            src:$(this).attr("src")
        })
        $(this).css({
            border: "1px solid red"
        })
    })
    var a=1;
    var flag=true
    $(".inc_lw").click(function(){
        a++;
        $(".num_lw").attr({value:a})
    })
    $(".red_lw").click(function(){
        a--;
        if(a<1){
            flag=false
        }else(
            flag=true
        )
        if(flag){
            $(".num_lw").attr({value:a})
        }
    })
    // 排行
    $(".ph_rm").mouseover(function(){
        $(".rx_list").css({
            display:"none"
        })
        $(".lw_line1").css({
            display:"none"
        })
        $(".rm_list").css({
            display:"block"
        })
        $(".lw_line2").css({
            display:"block"
        })
        $(".ph_rx").css({
            background: "#f7f7f7",
            color: "#777777"
        })
        $(".ph_rm").css({
            background: "#ffffff",
            color: "black"
        })
    })
    $(".ph_rx").mouseover(function(){
        $(".rm_list").css({
            display:"none"
        })
        $(".lw_line2").css({
            display:"none"
        })
        $(".rx_lists").css({
            display:"block"
        })
        $(".lw_line1").css({
            display:"block"
        })
        $(".ph_rx").css({
            background: "#ffffff",
            color: "black"
        })
        $(".ph_rm").css({
            background: "#f7f7f7",
            color: "#777777"
        })
    })

    // 右部详情点击

    $(".lw_proxqboxs").click(function(){

        $(".xqboxxx,.lwlulua1,.lwlulua2,.lw_big_imgsss").css({
            display:"block"
        })
        $(".pjboxxx,.lwlulub1,.lwlulub2,.jlboxxx,.lwluluc1,.lwluluc2").css({
            display:"none"
        })

    })
    $(".lw_propjbox").click(function(){

        $(".pjboxxx,.lwlulub1,.lwlulub2").css({
            display:"block"
        })
        $(".xqboxxx,.lwlulua1,.lwlulua2,.jlboxxx,.lwluluc1,.lwluluc2,.lw_big_imgsss").css({
            display:"none"
        })

    })
    $(".lw_jyjl").click(function(){

        $(".jlboxxx,.lwluluc1,.lwluluc2").css({
            display:"block"
        })
        $(".xqboxxx,.lwlulua1,.lwlulua2,.pjboxxx,.lwlulub1,.lwlulub2,.lw_big_imgsss").css({
            display:"none"
        })

    })

})()