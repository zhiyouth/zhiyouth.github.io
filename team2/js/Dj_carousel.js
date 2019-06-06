var count = 0;
var flag = true;
var x = 0
var Dj_carouselimages = $('.Dj_carouselImgs li')
$('.Dj_carouselnext').click(function () {
    if (flag) {
        flag = false;
        if (count >= Dj_carouselimages.length - 5) {
            count = 0;
            $('.Dj_carouselImgs').css({ marginLeft: 0})
        }else{
        count++;
        $('.Dj_carouselImgs').animate({ marginLeft: -240*count }, 500, function () {
        })
        }
        flag = true
    }
})
$('.Dj_carouselPrev').click(function () {
    if (flag) {
        count--;
        flag = false;
        if (count <0) {
            $('.Dj_carouselImgs').css({ marginLeft: -480})
            count = 2;
        }else{
            $('.Dj_carouselImgs').animate({ marginLeft: -240*count }, 500, function () {
            })
        }
        flag = true
    }
})




// Dj_carouselPrev
// Dj_carouselnext