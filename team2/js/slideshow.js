


var flag=true
var x=0
$(".L_iconas img").eq(0).css({
    marginLeft:0,
})
$(".switch div").eq(0).css({backgroundColor:"#666"})


// $(".switch div").click(function(){
//     if(flag){
//         flag=false
//         var index=$(this).index()
//         if(index>x){
//             $(".L_iconas img").eq(x).animate({
//                 marginLeft:-1920,
//             })
//             $(".L_iconas img").eq(index).animate({
//                 marginLeft:0,
//             },500,function(){
//                 flag=true
//             })
//             $(".switch div").eq(x).css({
//                 backgroundColor:"#dedede"
//             })
//             $(".switch div").eq(index).css({
//                 backgroundColor:"#666"
//             })
//             x=index 
            
//         }else if(index<x){
            
//             $(".L_iconas img").eq(x).animate({
//                 marginLeft:1920,
//             })
//             $(".L_iconas img").eq(index).animate({
//                 marginLeft:0,
//             },500,function(){
//                 flag=true
//             })
//             $(".switch div").eq(x).css({
//                 backgroundColor:"#dedede"
//             })
//             $(".switch div").eq(index).css({
//                 backgroundColor:"#666"
//             })
//             x=index 
            
//         }
//     }
        
// })

$(".L_iconas img").eq(0).clone().appendTo(".L_iconas")


function next(){
    if(flag){
        flag=false
        x++
        if(x==3){
            $(".switch div").eq(0).css({
                backgroundColor:"#666"
            })
        }
        if(x>3){
            x=1
            $(".L_iconas").css({marginLeft:0})
            $(".switch div").eq(x).css({
                backgroundColor:"#666"
            })
        }
        
        $(".switch div").eq(x-1).css({
            backgroundColor:"#dedede"
        })
        $(".switch div").eq(x).css({
            backgroundColor:"#666"
        })
        $(".L_iconas").animate({marginLeft:-1920*x},500,function(){
            flag=true
        })
    }
   
}


var timer=setInterval(next,2500);


$(".switch div").mouseover(function(){
    clearInterval(timer)
})
$(".switch div").mouseout(function(){
    timer=setInterval(next,2500)
})
