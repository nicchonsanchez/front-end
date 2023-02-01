/*
    append()
    appendTo()
    prepend()
    prependTo()
    after()
    insertAfter()
    before()
    insertBefore()
    remove()

    attr()
    setInterval
    clearInterval
*/


// Append serve para adicionar um conteúdo NO FINAL do lugar indicado

// O exemplo abaixo irá adicionar um parágrafo 'teste' em todas as classes .box

$('.box').append('<p>Teste</p>');

// Já para adicionar somente no primeiro usaremos antes do append() o eq(), como abaixo:

$('.box').eq(0).append('<p>append() antecedido por um eq(0), adiciona isto na 1ª div</p>');

// ou na terceira:

$('.box').eq(2).append('<p>append() antecedido por um eq(2), adiciona isto na 3ª div</p>');





// Tem uma outra maneira que muda a ordem do código, vc coloca o que vai adicionar e dps onde, usando o appendTo()
// Assim:

$('<p>Usando o appendTo</p>').appendTo($('.box'));

// Dá ainda pra colocar ela como uma variável para manipular depois, estilizar e etc...

var appBox = $('<p>Adicionado como uma variável</p>').appendTo($('.box'));

// Agora vou estilizar usando a variável

appBox.css('color','red');
// Esta estilização poderia ser adicionado ainda lá encima no mesmo momento da adição, como por exemplo:

$('<p>Usando o .appendTo() com .css()</p>').appendTo($('.box')).css('color','red');





// Para adicionar algo ao início da área indicada usaremos o .prepend() ou o .prependTo(), que funciona na mesma estrutura do .append() e .appendTo()

var $prepbox = $('<p>Usando o prependTo</p>').prependTo($('.box'));

$prepbox.css('color', 'green');





// Para adicionar um texto depois de um elemento usamos o after() e para adicionar antes usamos o before()

$('.box').after('<div class="aft border-gradient"><h4>h4 usando after()</h4></div>');

$('.box').before('<div class="bef border-gradient"><h4>h4 usando before()</h4></div>');


// Apenas uma estilização para a classe .border-gradient .aft e .bef
$('div.aft').css('background', 'linear-gradient(90deg, rgba(0,255,255,0.5), rgba(0,128,0,0.5))').css('margin-bottom','100px');
$('div.bef').css('background', 'linear-gradient(90deg, rgba(0,255,255,0.5), rgba(0,128,0,0.5))').css('color','white');

$('.border-gradient').css('border-width', '5px');
$('.border-gradient').css('border-style', 'solid');
$('.border-gradient').css('border-image', 'linear-gradient(90deg, aqua, green)');
$('.border-gradient').css('border-image-slice', '1');


// Temos o insertAfter() e o insertBefore() similar à estrutura de appendTo(), eles são a mesma coisa do after() e before(), porém seguindo a estrutura diferente e possibilitando a estilização

var insAft = $('<p>Texto com insertAfter</p>').insertAfter('.aft h4');
insAft.css('color', 'purple').
        css('font-size','10px').
        css('font-weight','bold');

var insBef = $('<p>Texto com insertBefore</p>').insertBefore('.bef h4');
insBef.css('color', 'purple').
        css('font-size','10px').
        css('font-weight','bold');







// para remover objetos temos o .remove() que é bem simple de utilizar

// $('*').remove(); // Isso aqui vai remover tudo da página

// Vou criar algo para excluir dps
var divTemporaria = $(`

    <div class="titulo">
        <h2>Esta div irá desaparecer em <span>5s</span></h2>
    </div>

`).prependTo('body');

divTemporaria.css('padding-top', 100).css('padding-bottom', 100);


// Pra ficar mais interessante foi solicitar que o texto seja editado a cada segundo, para trocar o 5s por 4s, 3s...
// Há duas maneiras de fazer isso.

// Maneira 1
/*
var tempoDuracao = 5;
var contagemegressiva = ()=>{
    
    $('body div:first-child span').text(tempoDuracao+"s");
    tempoDuracao --;

        setTimeout(()=>{
            if(tempoDuracao < 0){

                // Agora bora dar um sumiço nessa div
                $('body div').eq(0).remove();

                // Para parar a remoção das divs vamos matar o ciclo da função aqui
                return;
            }
            contagemegressiva();
        },1000)
}
contagemegressiva();
*/


// Maneira 2
var tempoDuracao = 5;
var contagemegressiva = setInterval(tempoRestante, 1000);

function tempoRestante(){
    tempoDuracao --;
    $('body div:first-child span').text(tempoDuracao+"s");
}

setTimeout(()=>{
    clearInterval(contagemegressiva);
    $('body div').eq(0).remove();
},tempoDuracao*1000);







// Attr() adiciona um atributo ao elemento, na seguinte eu atribui a classe titulo à terceira div da página e adicionei um css para deixar branca a cor da letra

$('body > div').eq(2).attr('class','titulo').css('color','white');
