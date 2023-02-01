// Há três formas de verificar a largura de um objeto

// O .width() vai verificar sem levar em consideração o padding e a borda
$('.titulo').width();

console.log($('.titulo').width());


// O .innerWidth() vai considerar o padding, mas não a borda
$('.titulo').innerWidth();

console.log($('.titulo').innerWidth());


// Já o .outerWidth() vai considerar o padding e a borda, porém não pegará a margem
$('.titulo').outerWidth();

console.log($('.titulo').outerWidth());

// Maaassss, se colocarmos o parâmetro true no outerWidth ele irá considerar a margem
$('.titulo').outerWidth(true);

console.log($('.titulo').outerWidth(true));


// Sempre que for colocar uma nova largura num objeto use o método abaixo pra evitar problemas:
$('#teste').css('width','600'); // Mesmo se não colocar o px no final do número ele já vai considerar como pixel


/*
    O MESMO VALE PARA O HEIGHT. TODOS OS CASOS ACIMA
*/











// Ignore, só estou ajeitando a barra de porcentagem...
var percentual = $(window).scrollTop()*100/($('body').height()-$(window).height());
var barraPercentual = $('.percentual-rolagem .preenchimento').css('width',percentual+'%');

$(window).scroll(()=>{
    percentual = $(window).scrollTop()*100/($('body').height()-$(window).height());

    if(percentual < 100){
        barraPercentual.css('width',percentual+'%');
        barraPercentual.css('background','linear-gradient(90deg,rgb(77, 255, 0) calc(100% - 50px),rgb(0, 255, 255))')
    } else {
        barraPercentual.css('width','100%');
        barraPercentual.css('background','rgb(77, 255, 0)')
    }
})
// Só pra iniciar aqui ignore e continue lendo kkk
$(()=>{
    $('p span.res.H').html($(window).height());
    $('p span.res.W').html($(window).width());
    $('p span.scroll.X').html(Math.round($(window).scrollLeft()));
    $('p span.scroll.Y').html(Math.round($(window).scrollTop()));
})

// Monitorar o REDIMENSIONAMENTO da tela ou de um objeto
$(window).resize(function(){
    $('p span.res.H').html($(window).height());
    $('p span.res.W').html($(window).width());
})

// Aproveitando pra monitorar a SCROLL tbm
$(window).scroll(function(){
    $('p span.scroll.X').html(Math.round($(window).scrollLeft()));
    $('p span.scroll.Y').html(Math.round($(window).scrollTop()));
})