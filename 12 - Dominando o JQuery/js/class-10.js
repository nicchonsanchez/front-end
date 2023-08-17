/*

    "Ajax nada mais é do que quando mandamos uma solicitação pro servidor, seja interna ou externa, e a gente obtém uma resposta dele", - Prof. Guilherme Grillo

    ajax()
    done() / É executado após a requisição e obtenção do resultado do ajax acima

*/

$(()=>{

    // Aqui eu uso o $ e diretamente um ponto já para usar todos os paâmetros do JQuery
    $.ajax({

        'url': 'retorno-do-ajax.html', // Para onde vamos mandar a informação


        /*
            Os parâmetros abaixo ainda dentro destas chaves do ajax não estarão sendo usados nesta aula pois se trata de conteúdo de back-end
        */
        'method': 'post', // método do envio das informações post ou get

        // O que vamos enviar:
        data:{
            'nome': 'Nicchon',
            'idade': 22,
        }

    }).done((data)=>{ // Aqui estamos usando o parâmetro data (poderia ter qqr outro nome) na função, que com este poderemos acessar o resultado que veio do ajax acima

        $(data).prependTo('body');

    });

});