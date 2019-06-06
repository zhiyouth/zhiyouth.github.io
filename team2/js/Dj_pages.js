// pages分页

function paging(Dj_page, obj, f) {
    console.log(1231232)
    var page = obj.page;
    var total = obj.total;
    var num = obj.num;
    // 默认第一个
    $('.Dj_pageContent span').eq(0).css({
        color: '#ffffff',
        backgroundColor: '#1269d3'
    })
    // 省略部分
    function render() {
        var html = '';
        // 后面省略
        if (page <= (num + 1) / 2) {
            for (var i = 1; i <= num - 2; i++) {
                if (i == page) {
                    html += "<span class='num' style='background:#1269d3;color:#ffffff'>" + i + "</span>"
                } else {
                    html += "<span class='num'>" + i + "</span>";
                }
            }
            html += "<span>..</span>";
            html += "<span class='num'>" + total + "</span>"
        }

        // 前后省略
        if (page > (num + 1) / 2 && page <= total - (num + 1) / 2) {
            html += "<span class = 'num'>1</span>";
            html += "<span>...</span>";
            // 中间按钮显示个数
            for (var i = page - (num - 5) / 2; i <= page + (num - 5) / 2; i++) {
                if (i == page) {
                    html += "<span class='num' style='background:#1269d3;color:#ffffff'>" + i + "</span>"
                } else {
                    html += "<span class='num'>" + i + "</span>"
                }
            }
            html += "<span>..</span>"
            html += "<span class='num'>" + total + "</span>"
        }
        // 前面省略
        if (page > total - (num + 1) / 2) {
            html += '<span class="num">1</span>';
            html += '<span>...</span>';
            for (var i = total - (num + 1) / 2; i <= total; i++) {
                if (i == page) {
                    html += "<span class='num' style='background:#1269d3;color:#ffffff'>" + i + "</span>"
                } else {
                    html += "<span class='num'>" + i + "</span>"
                }
            }
        }
        $('.Dj_pageContent').html(html)
    }
    render();
    // 点击下一页
    $('.Dj_pageNext').click(function () {
        page++
        // console.log(page)
        if (page >= total) {
            page = total
            encodeURI(page)
        }
        render();
        f(page)

    })
    // 点击上一页
    $('.Dj_pagePrev').click(function () {
        page--

        if (page < 1) {
            page = 1
        }
        render();
        f(page)

    })
    $('.Dj_pageContent').click(function (e) {
        // $('.Dj_pageNext').css({background: '#1269d3'})
        // $('.Dj_pagePrev').css({background: '#1269d3'})
        if (e.target.className == 'num') {

            page = parseInt(e.target.innerHTML);
            render();
            f(page);
            if (page == total) {
                end(page)
            }
            if (page <= 1) {
                start(page)
            }

        }
    })
    function end(en) {
        $('.Dj_pageNext').css({ background: '#dedede' })
        if (page < total) {
            $('.Dj_pageNext').css({ background: '#1269d3' })
        }
    }
    function start(en) {
        $('.Dj_pagePrev').css({ background: '#dedede' })
        if (page > 1) {
            $('.Dj_pagePrev').css({ background: '#1269d3' })
        }
    }
}

var el = $('.Dj_page')
paging(el[0], {
    page: 1,
    total: 100,
    num: 9,
}, function (page) {

})