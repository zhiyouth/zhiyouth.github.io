// 放大镜与轮播
// lunbo
$('.Dj_glassLunBtn img').each(function(i,val){
   
    $('.Dj_glassLunBtn img').eq(i).click(function(){
        $('.Dj_glassView img')[0].src = this.src
        $('.Dj_maGlass img')[0].src = this.src
        // console.log(val)
    })
})
// 放大镜
$('.Dj_glassView img').mousemove(function(e){
    $('.Dj_maGlass').css({
        display:'block'
    })
    var x = e.clientX
    var y = e.clientY-334
    // console.log(x,y)
    if(x < 300/2/2){
        x = 300/2/2
    }else if(x>450-300/2/2){
        x = 450-300/2/2
    }
    if(y < 300/2/2){
        y = 300/2/2
    }else if(y>300-300/2/2){
        y = 300-300/2/2
    }
    // 放大镜
    $('.Dj_maGlass img').css({
        left: -x*2+300/2
    })
    $('.Dj_maGlass img').css({
        top: -y*2+300/2
    })
}).mouseout(function(){
    $('.Dj_maGlass').css({
        display:'none'
    })
})