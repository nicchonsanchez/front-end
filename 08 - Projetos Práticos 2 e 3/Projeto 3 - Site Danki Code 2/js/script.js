// MENU MOBILE
$('.mobile-menu').click(function(){

    $('.mobile-menu').find('ul').slideToggle();
    
})


// Ancora - Scroll suave
var $doc = $('html, body');

$('a').click(function() {

    $doc.animate({

        scrollTop: $( $.attr(this, 'href') ).offset().top //- document.querySelector('body header').getBoundingClientRect().height // Estou subtraindo a altura do menu

    }, 500);

    return false;

});



// Slider

$(function(){

    // Iniciando Slide

    var delay = 3000;
    var curIndex = 0;
    var slideSingleQnt = $('#nosso-time .sobre-autor').length;

    initSlider();
    autoPlay();

    function initSlider(){
        slideSingleQnt = $('#nosso-time .sobre-autor').length;
        var sizeContainer = 100*slideSingleQnt;
        var sizeBox = 100/slideSingleQnt;

        $('.slide-content').css({'width': sizeContainer+'%'});
        $('.sobre-autor').css({'width': sizeBox+'%'});


        // Bullets

        for(let i = 0; i < slideSingleQnt; i++){

            if(i == 0){
                $('#nosso-time .slider-bullets').append('<span style="background-color: black;"></span>');
            } else {
                $('#nosso-time .slider-bullets').append('<span></span>');
            }

        }

        bulletClick();
    }


    // Slide Change

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == slideSingleQnt){
                curIndex = 0;
            }
            goToSlider(curIndex);
        }, delay)
    }

    function goToSlider(curIndex){
        var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('#slider-equipe .slide-content').offset().left;
        $('#slider-equipe').stop().animate({'scrollLeft':offSetX+'px'});

        $('.slider-bullets span').css({'background-color':'rgb(200, 200, 200)'});
        $('.slider-bullets span').eq(curIndex).css({'background-color':'black'});
    }

    function bulletClick(){

        $('#nosso-time .slider-bullets span').click(function(){

            curIndex = $(this).index();

            console.log(curIndex);

            var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('#slider-equipe .slide-content').offset().left;
            $('#slider-equipe').stop().animate({'scrollLeft':offSetX+'px'});

            $('.slider-bullets span').css({'background-color':'rgb(200, 200, 200)'})
            $('.slider-bullets span').eq(curIndex).css({'background-color':'black'})

            console.log(curIndex);
        })

    }

    $(window).resize(function(){
        $('#slider-equipe').stop().animate({
            'scrollLeft':0
        })
    })

})