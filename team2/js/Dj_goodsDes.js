// 导航条隐藏部分
$('.Dj_nGationMess').mouseenter(function () {
    $('.Dj_navHide').css({
        display: 'block'
    })
})
$('.Dj_navHide').mouseleave(function () {
    $('.Dj_navHide').css({
        display: 'none'
    })
})

// 导航条定位
$(window).scroll(function () {
    var st = $('body').scrollTop() || $('html').scrollTop()
    // console.log(st)
    if (st >= 1000) {
        
        $('.Dj_heaFix').css({
            position: 'fixed',
            top: 0
        })
        $('.Dj_heaImgFang').css({
            display:'block'
        })
        $('.Dj_oneoneone').css({
            display:'block'
        })
        $('.Dj_plus img').css({
            display:'none'
        })

    } else if (st < 1100) {
        $('.Dj_heaFix').css({
            position: 'relative'
        })
        $('.Dj_heaImgFang').css({
            display:'none'
        })
        $('.Dj_oneoneone').css({
            display:'none'
        })
        $('.Dj_plus img').css({
            display:'block'
        })
    }
})

// 楼层滚动
var leval = 0;
// 设置第一个样式默认
$('.Dj_heaFix p').eq(1).css({
    backgroundColor: '#ffffff',
    borderTop: '2px solid #e60000',
    fontWeight: 'bold',
    marginTop: -2
})

$('.Dj_heaFix p').each(function (i, val) {
    // console.log(i ,val)
    $('.Dj_heaFix p').eq(i).click(function () {
        $('.Dj_heaFix p').eq(i).css({
            backgroundColor: '#ffffff',
            borderTop: '2px solid #e60000',
            fontWeight: 'bold',
            marginTop: -4
        })
        $('.Dj_heaFix p').eq(i).siblings().css({
            backgroundColor: '#f6f6f6',
            borderTop: '2px solid #000',
            fontWeight: 'none',
            marginTop: -4
        })
        var ot = $('.Dj_leval .Dj_levalCon').eq(i-1).offset()
        $("body,html").scrollTop(ot.top-100)
        console.log(i, $('.Dj_leval .Dj_levalCon').eq(i))
    })
})
// 内容滚动
$(window).scroll(function(){
    var st = $('body').scrollTop() || $('html').scrollTop();
    $.each($('.Dj_leval .Dj_levalCon'),function(i,val){
        // console.log(i)
        var ot = $('.Dj_leval .Dj_levalCon').eq(i).offset().top;
        // console.log(ot)
        // 判断滚动位置
        if(ot <st+300){
            console.log(123)
            $('.Dj_heaFix p').eq(i+1).css({
                backgroundColor: '#ffffff',
                borderTop: '2px solid #e60000',
                fontWeight: 'bold',
                marginTop: -4
            })
            $('.Dj_heaFix p').eq(i+1).siblings().css({
                backgroundColor: '#f6f6f6',
                borderTop: '2px solid #000',
                fontWeight: 'none',
                marginTop: -4
            })
        }
        
    })
})

// 隐藏部分显示
$('.Dj_comDes .Dj_erweiMa').mouseenter(function(){
    console.log(123123)
    $('.Dj_hidErwei').css({
        display:'block'
    })
}).mouseleave(function(){
    $('.Dj_hidErwei').css({
        display:'none'
    })
})
$('.Dj_comDes .Dj_vipFive').mouseenter(function(){
    $('.Dj_hidVip').css({
        display:'block'
    })
}).mouseleave(function(){
    $('.Dj_hidVip').css({
        display:'none'
    })
})