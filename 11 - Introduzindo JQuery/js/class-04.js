// Como monitorar o movimento da Scroll
$(()=>{
    $(window).scroll(function(){
        console.log("Scroll movida!");
    })
})


// Quando usamos o e dentro dos parenteses de uma função passamos a ter acesso à todas as funções dentro deste evento

$(()=>{
    $('a').click(function(e){
        //e.preventDefault(); // Isto irá fazer com que o evento padrão que deveria ocorrer não ocorra. No caso da tag a é abrir um link, como está com e.preventDefault(); não irá abrir o link
        
        return false; // Outra forma de impedir o evento é usando o return false;
    })
})

// Para parar uma propagação como por exemplo:
// Vou criar um evento para acontecer quando eu clicar no body, logo se eu clicar numa div que está dentro do body o evento acontecerá,
// porém eu não quero que ocorra se eu clicar nessa div, somente fora dela...
$('body').click((e)=>{

    $('.bola').css('transition','0s');
    $('.bola').css('left',e.pageX);
    $('.bola').css('top',e.pageY);
    $('.bola').css('background-color','#00ffffff');
    $('.bola').css('padding','0px');

    setTimeout(()=>{
        $('.bola').css('transition','1s');
        $('.bola').css('background-color','#00ffffff');
        $('.bola').css('padding','30px');
    },10);

    setTimeout(()=>{
        $('.bola').css('background-color','#00ffff00');
    },500);

    setTimeout(()=>{
        $('.bola').css('transition','0s');
        $('.bola').css('padding','0px');
        $('.bola').css('background-color','#00ffff00');
    },1010);
})

// Agora vou IMPEDIR que esse evento ocorra quando estiver encima das divs
$('div').click((e)=>{
    e.stopPropagation();
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



// Ajeitando a barra de porcentagem...
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



// Como RECARREGAR a página
var timer;
$(window).resize(()=>{
    clearTimeout(timer); // Vai fazer parar de recarregar a página, logo a função que está sendo ativada abaixo vai ser cancelada até que a tela pare de ser redimensionada

    timer = setTimeout(()=>{
        location.href = '04%20-%20Mais%20sobre%20eventos.html';
        
    },1000)
})
