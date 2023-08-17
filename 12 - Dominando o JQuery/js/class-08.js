/*

    addClass() / Adiciona classe ao objeto
    removeClass() / Remove a classe de um objeto
    find() / Serve para achar um elemento dentro de outro elemento, mas pode ser subtituico pelo modelo de CSS como $('header nav .menu') invés de $(header).find('nav').find('.menu')
    attr() / adiciona um atributo à tag ou verifica o falor de uma atributo na tag

    No .css podemos usar chaves dentro dos parênteses e ir colocando as característidas da mesma forma que quando usamos o método .animate().
    Os números fora de parágrafo são convertidos em px Ex abaixo:
    .css({
        'width': '100%',
        'margin-bottom': 30
    })

    Revendo:
    remove() / Remove o objeto

*/

setTimeout(()=>{

    // Vai adicionar a classe classe-adicionada à .box
    $('.box').addClass('classe-adicionada');


    setTimeout(()=>{

        //$('.classe-adicionada').remove();

        $('.box').removeClass('classe-adicionada');

    },2000);

},1000);


// Usando o find...
$('.box').find('.d1').find('.d2').find('.d3').css('color', 'red'); // poderia ser resumido usando $('.box .d1 .d2. .d3').css('color', 'red')



// A tag Nick foi uma tag personalizada que criamos o atributo 'meuatributo' também

$('nick').css({

    'color': 'green',
    'background': 'white',
    'width': '100%',
    'max-width': 800,
    'margin': 'auto',
    'margin-bottom': 30,
    'padding': 30,
    'display': 'block',
    'text-align': 'center'

});



$('nick').attr('attrjq','Adicionada com o JQuery'); // Adicionamos uma atributo attrjq

// Agora vamos usar o valor do atributo já presente na tag nick para mostrar num alert
alert($('nick').attr('meuatributo'));