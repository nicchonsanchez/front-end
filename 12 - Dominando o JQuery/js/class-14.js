/*
    Para compreender melhor o que está sendo feito no ajax verifique os parâmetros em:
    https://api.jquery.com/jQuery.ajax/

    $.ajax({
        'url': X,
        'beforeSend': ()=>{X}. // Vai executar as ações antes da busca do url
        'error': ()=>{X}, // Caso ocorra um erro vai acontecer o que estiver nessa função
        'timeout': 10000, // Vai delimitar um tempo máximo de espera por respostas
        
        'success':()=>{X} // É o mesmo que fazer o .done() abaixo, você pode optar entre um e outro. Vai realizar o procedimento após retornar os valores solicitados pelo url do Ajax
    }).done((data)=>{
        X
    })
*/



/*
    Carregamento das páginas através do MENU
*/

$(()=>{


    ativarMenu();

    function ativarMenu(){
        $('a').click(function(){

            var href = $(this).attr('href');

            console.log(href);

            $.ajax({
                'beforeSend': ()=>{
                    $('section.pagina').html(`
                        <div class="box">
                            <p>Carregando página...</p>
                        </div>
                    `);
                },

                'timeout': 10000,

                'url': href,

                'error': ()=>{
                    alert('Erro ao carregar a página!');
                },

                'success': function(data){
                    $('#pagina').html(data);
                }
            })

            return false;

        })
    }


    colorirBox();

    function colorirBox(){
        $('.box').click(function(){

            $(this).css('background-color','red');

            console.log(this);

        })
    }

})