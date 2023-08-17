/*
    15 - Animar elementos com base no scrolltop
*/



/*
    Calcular a posição da scroll e alterar a borda do menû
*/

$(function(){

    $(window).scroll(function(){
        var windowOffY = $(window).scrollTop();
        var windowHeight = $(window).height();

        $('.sessao').each(function(){

            var elOffY = $(this).offset().top;
            if(elOffY+250 < (windowOffY + windowHeight) && elOffY+30+$(this).height() > windowOffY){

                $('nav ul li a').css('border-bottom','0');
                var target = $(this).attr('target');
                $("a[href='#"+target+"']").css('border-bottom','2px solid black');
                return;

            }

        })
    })

});



// Ancora - Scroll suave

var $doc = $('html, body');

$('a').click(function() {

    $doc.animate({

        scrollTop: $( $.attr(this, 'href') ).offset().top - document.querySelector('body header').getBoundingClientRect().height // Estou subtraindo a altura do menu

    }, 500);

    return false;

});