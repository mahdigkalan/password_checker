$(document).ready(function(){
    $(".inp").on("input",function(e){
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

var showText = new Vue({
    el:".input-box",
    data:{
        title : "",
    }, methods: {
        showSentence : function(e){
            if(e.target.value.length < 8){
                this.title = "password is too weak !"
            }else if(e.target.value.length < 12){
                this.title = "password is not strong enogh !"
            }else{
                this.title = "password is safe and strong !"
            }
        }
    },
});