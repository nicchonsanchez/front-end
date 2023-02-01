// Vamos lá...
// Então, já foi usada antes, mas nesta aula o professor ensinou manipular o conteúdo do html com o .html()
// Então vou fazer o restante da página usando o .html() do JQuery, que no JS puro seria o innerHTML

$('html').html(`
    <body class="grande">
        <div class="titulo">
            <h2>02 - Manipulando textos dinamicamente</h2>
        </div>
        <!-- /.titulo -->
    </body>
`);
// O professor não havia ensinado usando essa crase pra poder usar mais de uma linha pra escrever, mas já estamos adiantados por aqui kkk



// Ficou sem o estilo hein, bora adicionar aqui o css

$('html head').html(`
    <title>02 - Manipulando textos dinamicamente</title>
    <link rel="stylesheet" href="css/class-01.css">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
`);



// Vou adicionar minha barra de percentual do scroll
// Eu poderia usar outro html(), mas seria necessário colocar um $('body').html($('body')+"texto aqui...");
// então pra evitar isso usarei o append, que vai simplesmente adicionar o código no final do conteúdo que já estiver dentro do elemento selecionado

$('body').append('<div class="percentual-rolagem"><div class="preenchimento"></div></div>');

// Vou dar uma diminuida nessa barra...
$('.percentual-rolagem').css('height','5');



// Ignore, só estou ajeitando a barra de porcentagem...
var percentual = $(window).scrollTop()*100/($('body').height()-$(window).height());
var barraPercentual = $('.percentual-rolagem .preenchimento').css('width',percentual+'%');

$(window).scroll(()=>{
    percentual = $(window).scrollTop()*100/($('body').height()-$(window).height());

    if(percentual < 100){
        barraPercentual.css('width',percentual+'%');
        barraPercentual.css('background','linear-gradient(90deg,rgb(77, 255, 0) calc(100% - 50px),rgb(0, 255, 255))');
    } else {
        barraPercentual.css('width','100%');
        barraPercentual.css('background','rgb(77, 255, 0)');
    }
});

// Só pra iniciar aqui ignore e continue lendo kkk
$(()=>{
    $('p span.res.H').html($(window).height());
    $('p span.res.W').html($(window).width());
    $('p span.scroll.X').html(Math.round($(window).scrollLeft()));
    $('p span.scroll.Y').html(Math.round($(window).scrollTop()));
});

// Monitorar o REDIMENSIONAMENTO da tela ou de um objeto
$(window).resize(function(){
    $('p span.res.H').html($(window).height());
    $('p span.res.W').html($(window).width());
});

// Aproveitando pra monitorar a SCROLL tbm
$(window).scroll(function(){
    $('p span.scroll.X').html(Math.round($(window).scrollLeft()));
    $('p span.scroll.Y').html(Math.round($(window).scrollTop()));
});



//Vou acrescentar o título mais vezes
for(i = 0; i < 2; i++){
    $('html body').append(`
        <div class="titulo">
            <h2>02 - Manipulando textos dinamicamente</h2>
        </div>
        <!-- /.titulo -->
    `);
}

/*
    IMPORTANTE: Assim como no PHP, no decorrer de uma reescrita de html se estiver usando aspas duplas para inserir o código e também usar aspas duplas para incluir atributos
    use a \ para diferenciar quais aspas são dos atributos e quais aspas são da delimitação do texto html a ser acrescentado.
    Ex:
*/

$('html body').append("<div class=\"titulo ultimo\"><h2>Último kk</h2></div>");




// Como método para criar texto no html temos tbm o text, porém ele não aceita código html, caso o escreva você presenciará o código sendo transmitido na página.
// Veja no ex abaixo.

$('.ultimo').append("<div class=\"texto-text\">").css('transition','3s'); // Criei uma div pra testar e já estilizei ela

$('.texto-text').text("<span>Viu que não deu certo? <br> Não criou Span nem BR, só transcreveu como texto...</span>");





// O text pode ser útil para adicionar texto à um textarea, porém não funciona com inputs
// No caso dos inputs podemos usar o val() que serve para verificar o valor do input ou dar um valor novo a ele
// Ex:

$('.ultimo').append('<form><input placeholder="Nome" type="text"><input placeholder="E-mail" type="email"><textarea placeholder="Texto"></textarea></form>'); // Criei os dois
$('.ultimo *').css('width','100%').css('margin-bottom','10px').css('padding','10'); // Estilizei

// Agora bora usar o val() no input
$('.ultimo input[type="text"]').val('Nicchon!');

// E o text() no textarea
$('.ultimo textarea').text('Esse é o textarea!'); // No caso do textarea, tanto usar val() quanto text() irá escrever um texto dentro dele e esse texto será o valor dele




// Agora lá vai umas funções do JS mesmo
// Já temos um input e um textarea, vou aproveitá-los. Criar um botão pra enviar
$('.ultimo form').append('<input type="button" value="Enviar">');
$('.ultimo form input[type="button"]').css('padding','10px').css('padding-left','25px').css('padding-right','25px');
$('form').css('text-align','center'); // Estilizei tudo...



$('.ultimo form input[type="button"]').click(()=>{
    alert("Texto do input:\n"+$('.ultimo form input[type="text"]').val()+"\n\nTexto do input:\n"+$('.ultimo form textarea').val())

    // split serve para separar o texto de acordo com o parâmetro designado. Abaixo designaremos o @
    var email = $('.ultimo form input[type="email"]').val().split("@");
    alert("Usuário: "+email[0]+"\n\nCorreio eletrônico: "+email[1]);


    // o .substr serve para me retornar parte da minha string
    // Dentro do parâmetro é colocado apartir de qual onde começar a me retornar e depois quantos caracteres me retornar. ex
    alert($('.ultimo form input[type="email"]').val().substr(0,3));
    // Ele vai começar do 0 (zero: primeiro caractere) e vai me retornar os seguintes 3 caracteres do email
});








