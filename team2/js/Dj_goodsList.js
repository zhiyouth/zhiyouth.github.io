$('.Dj_goodsBtn').click(function () {
    $('.triangle').css({
        display: 'block'
    })
})
$('.Dj_mouseOut').mouseout(function () {
    // console.log(1232)
    $('.triangle').css({
        display: 'none'
    })
})

// tab点击时添加下划线
$('.Dj_tab > span').click(function () {
    console.log(123)
    $(this).css({
        borderBottom: '2px solid #0033cc',
    })
    $(this).siblings().css({
        borderBottom: '2px solid #ffffff',
    })
})

// 最高价 最低价
$('.Dj_choiceGoods  p').mouseover(function () {
    $('#Dj_hide').css({
        display: 'block'
    })
})
$('.Dj_choiceGoods  p').mouseout(function () {
    $('#Dj_hide').css({
        display: 'none'
    })
})
// 综合排序
$('.Dj_Date').mouseover(function () {
    $('.Dj_newDate').css({
        display: 'block'
    })
})
$('.Dj_Date').mouseout(function () {
    $('.Dj_newDate').css({
        display: 'none'
    })
})
$('.Dj_sort').mouseover(function () {
    $('.Dj_priceSort').css('display', 'block')
})
$('.Dj_sort').mouseout(function () {
    $('.Dj_priceSort').css('display', 'none')
})

// 最新供应滚动条固定

$(window).scroll(function () {
    var st = $('body').scrollTop() || $('html').scrollTop()
    if (st >= 900) {
        $('.Dj_latestSupply').css({
            position: 'fixed',
            width:180,
            top: -50,
            padding: 10
        })
    } else if (st < 900) {
        $('.Dj_latestSupply').css({
            position: 'relative',
            padding: 0,
            marginTop: 50
        })
    }
})


