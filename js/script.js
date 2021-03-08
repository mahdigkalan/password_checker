var showText = new Vue({
    el:".input-box",
    data:{
        title : "",
        text : "",
    }, methods: {
        showSentence : function(e){
            var input = e.target ;
            var length = e.target.value.length ;
            if(length < 8){
                this.title = "password is too weak !" ;
                input.style.background = "red" ;
                this.text = input.value ;
            }else if(length < 12){
                this.title = "password is not strong enogh !" ;
                input.style.background = "yellow" ;
                this.text = input.value ;
            }else{
                this.title = "password is safe and strong !"
                input.style.background = "green" ;
                this.text = input.value ;
            }
        },
        showEvent:function(e){
            var code = e.charCode ;
            if(code == 32 ){
                e.preventDefault();
                
            }
        }
    },
});