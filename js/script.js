$(document).ready(function(){
    $(".inp").on("input",function(){
        var length = $(this).val().length ;
        if(length < 8 ){
            $(this).css("background","red") ;
        }else if(length < 12){
            $(this).css("background","rgb(198, 209, 44)") ;
        }else{
            $(this).css("background","green") ;
        }
    })



});