
$(function(){

    /*
        Slider
    */

    var indiceAtual = 0;
    var indiceMaximo = $('#slide1 .images .img').length;
    var delay = 3000;

    initialSlider();
    criandoBullets();

    function initialSlider(){
        for(let i = 0; i < indiceMaximo; i++){
            if(i==0){
                $('#slide1 .bullets').append('<span style="background: #069"></span>');
            } else {
                $('#slide1 .bullets').append('<span></span>');
            }
        }

        $('#slide1 .img').eq(0).stop().fadeIn();

        setInterval(function(){
            alternarSlide();
            bulletClick();
        }, delay)
    }


    function alternarSlide(){

        $('#slide1 .img').eq(indiceAtual).stop().fadeOut();
        indiceAtual += 1;

        if(indiceAtual == indiceMaximo)
            indiceAtual = 0;
        
        $('#slide1 .bullets span').css('background','white');
        $('#slide1 .bullets span').eq(indiceAtual).css('background','#039');
        $('#slide1 .img').eq(indiceAtual).stop().fadeIn();

    }

    
    function bulletClick(){

        $('#slide1 .bullets span').click(function(){

            $('#slide1 .images .img').eq(indiceAtual).stop().fadeOut();

            indiceAtual = $(this).index();

            $('#slide1 .images .img').eq(indiceAtual).stop().fadeIn();

            $('#slide1 .bullets span').css('background','white');
            $(this).css('background','#069');

        })

    }

})