/*
    on() - click, scroll, resize, focus, blur, hover, keyup, keydown
    keyup()
    keydown()
    index()

    removeClass()
*/



// Vou estilizar um pouco a página
$('.box').css('text-align','center');
$('.box h2').css('margin-bottom','15px');
$('.titulo').css('color','white');


// Aplicação simples para alterar o css com ao clicar num link
$('.titulo a.btn').click(()=>{

    $('.box.invisible').css('display','block');

    aparecerBtn();
    

    return false; // Para não recarregar a página

})


// Fazendo conforme o modelo acima, usando o .click(), fica impossibilitado de que os '.titulo a.btn' adicionados depois no site usando o html() possam realizar juntamente esta função.
// Para que esta função seja executada a partir de qualquer '.titulo a.btn', seja ele adicionado antes ou depois do código referente à função usaremos o on(), da maneira abaixo
// Usarei outro botão que será adicionado na segunda box, a invisível

$('body').on('click', 'a.alerta',()=>{

    alert('Charraaannn!');

    $('.box').removeClass('new'); // Vou remover a classe new das .box com o removeClass(), para depois adicionar o botão somente nas .box que são novas
    
    var newBox = $('<div class="box new" style="text-align:center;"></div>').appendTo($('body'));
    var btnAlertNew = $('<a href="">Criar nova div!</a>').appendTo($('.box.new'));
    $('<a href="" class="del">X</a>').appendTo($('.box.new'));
    $('<input type="text" class="use-this">').appendTo($('.box.new'));
    btnAlertNew.attr('class','btn alerta');

    return false; // Para não recarregar a página

})

var aparecerBtn = ()=>{

    setTimeout(()=>{

        var btnAlert = $('<a href="">Clique aqui para criar uma div!</a>').appendTo($('.box.invisible'));
        btnAlert.attr('class','btn alerta');
        
    },1000);

}



/*
    O keyup() realiza uma açõa a cada tecla que você apertar enquanto estiver escrevendo em algum lugar (input, textarea e etc...)
*/

$('input#keyup-active').keyup(()=>{

    $('.texto-keyup').text($('input#keyup-active').val());

})




/*
    Vamos colorir as box usando a função keyup() na referência do this
*/
$('.box').on('click', 'a.del', ()=>{

    $('.box').eq($(this).index()).remove();
    return false;

})

// keydown() é a quase a mesma coisa do keyup(), a diferença é que o keyup() execulta a ação quando se solta a tecla e o keydown() quando de aperta ela
$('body').on('keydown','.use-this',function(){

    $(this).css('background','#000').css('color','white');
    console.log($(this).index());

})