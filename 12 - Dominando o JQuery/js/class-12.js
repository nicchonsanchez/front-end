/*

    .match()
    
    - Vai verificar ser há determinado conteúdo dentro.
    - Dentro do march escrevemos palavras diretamente dentro do match() usamos entre parras ou aspas, assim: .match(/barrel/) ou .match("barrel").
    - Demais parâmetros como [A-Z] ou [A-Za-z0-9] usamos entre barras, como /[A-Z]/
    - Se não usar o case insensitive ele vai levar em consideração que maiúsculo e minúsculo são diferentes
    
    .match("teste") // Vai procurar a palavra teste
    .match(/[A-Z]/) // Vai procurar por caracteres entre A e Z maiúsculos
    .match(/[A-Za-Z0-9]/) // Vai procurar por caracteres entre A e Z maiúsculos, menúsculos e números de 0 à 9
    .match(/[A-Z]{3}/) // Vai verificar se há exatamente 3 caractéres entre A e Z maiúsculos juntos
    .match(/[A-Z]{3,6}/) // Mesma coisa de cima porém não precisa ser exatamente 3, pode ser entre 3 e 6
    .match(/[A-Z]{3,}/) // Mesma coisa de cima porém como não há um segundo número significa que pode ser de 3 para cima
    .match(/^(.*?)teste/) // O ^ vai garantir que a busca comece do início já o (.*?) vai fazer com que pegue tudo o que há antes do 'teste' e retorne no array
    .match(/^(.*?)@(.*?)$/) // O (.*?) vai fazer com que pegue tudo o que há antes e depois do @ e retorne no array o ^ vai garantir que a busca comece do início e o $ vai delimitar até onde vai nossa busca, no caso em questão será até o final



    .split() // Reparticiona uma string de acordo com o parâmetro desejado como .split(" ") vai usar o espaço como parâmetro para dividir a string ou .split(",") que vai usar a vírgula
*/


$(()=>{


    var frase = 'Do a barrel roll barrel'; // Usa essa frase na página do google kkk, do nada lembrei disso

    var verificacao = frase.match("barrel");
    // ou então poderia ser var verificacao = frase.match(/barrel/);

    console.log(verificacao);

    /* 
    
        Este console me retornou:

        Array(1)
            0:"barrel"
            groups:undefined
            index:5
            input:"Do a barrel roll"
            length:1

        o 0 é o intem encontrado
        o index é a partir de qual caractere que se inicia a palavra "barrel", que foi o que produrei
        o input é o temxo completo onde foi procurado o "barrel"
        o length é a quantidade de restornos no array que ele gera, no caso aí só gerou um que é o 0
    


        Com isto podemos fazezr pesquisas para saber se existe um resultado conforme o que produramos:
    */

        var usuarios = [
            {
                'usuario':'nicchonsanchez',
                'nome':'Nicchon Sanchez Pinto',
                'idade':'22'
            },
            {
                'usuario':'sanchezhugo',
                'nome':'Hugo Tavares Sanchez Pinto',
                'idade':'27'
            },
            {
                'usuario':'sanchezjuliana3002',
                'nome':'Juliana Sanchez Pinto',
                'idade':'19'
            },
            {
                'usuario':'natalia.sanchez.pinto',
                'nome':'Natália Sanchez Pinto',
                'idade':'12'
            },
            {
                'usuario':'duda.sanchez.pinto',
                'nome':'Maria Eduarda Sanchez Pinto',
                'idade':'9'
            }
        ];

        var usuarioProcurado = 'nicchonsanchez';

        var resultadoPesquisa = "";

        usuarios.forEach((value,index) => {
            if(usuarios[index]['usuario'].match(usuarioProcurado) != null){

                resultadoPesquisa = `
                    Usuário existente!
                    Cadastro número: ${index}
                    Usuário: ${usuarios[index]['usuario']}
                    Nome: ${usuarios[index]['nome']}
                    Idade: ${usuarios[index]['idade']}
                `;

            }
        });

        if(resultadoPesquisa != ""){
            console.log(resultadoPesquisa);
        } else {
            console.log("Usuário não está oresente no banco de dados!");
        }


        // Para verificar se há letras maiúsculas e a quantidade usamos [A-Z] entre barras, como abaixo
        var frase2 = "Teste Esta Frase AQUI!";
        
        console.log(frase2.match(/[A-Z]/));
    
        // ou de A-Z de a-z, de 0-9 e etc usamos [A-Za-z0-9] entre barras, como abaixo
        console.log(frase2.match(/[A-Za-z0-9]/));

        // Vai verificar se há exatamente 3 caractéres entre A e Z maiúsculos juntos
        console.log(frase2.match(/[A-Z]{3}/));

        // Mesma coisa de cima porém não precisa ser exatamente 3, pode ser entre 3 e 6
        console.log(frase2.match(/[A-Z]{3,6}/));





        // O (.*?) vai fazer com que pegue tudo o que há antes do 'Frase' e retorne no array
        console.log(frase2.match(/Tes(.*?)Frase/));

        /*
        
            0:"Teste Esta Frase"
            1:"Teste Esta "
            groups:undefined
            index:0
            input:"Teste Esta Frase AQUI!"
            length:2

            me gerou 2 resultados o 0 do array que é o procurado
            e o 1 que é o que está antes do parâmetro estabelecido que é a palavra 'Frase'
        
        */





        // O (.*?) vai fazer com que pegue tudo o que há antes e depois do @ e retorne no array o ^ vai garantir que a busca comece do início e o $ vai delimitar até onde vai nossa busca, no caso em questão será até o final
        var email = 'nicchonsanchez@gmail.com'

        console.log(email.match(/^(.*?)@(.*?)$/));

        /*
        
            0:"nicchonsanchez@"
            1:"nicchonsanchez@gmail.com"
            2:"gmail.com"
            groups:undefined
            index:0
            input:"nicchonsanchez@gmail.com"
            length:3

            se não tivesse usado o $ no final do parâmetro delimitando que a busca seja até o final do 2 seria vazio, ficaria 2:"" e o 0 ficaria 0:"nicchonsanchez"
        
            Com isto posso encontrar o usuário e o servidor pelo email assim
        */
    
        var desmembrar = email.match(/^(.*?)@(.*?)$/);

        // Para retornar o usuário puxaremos o 1 do array (tudo antes do @)
        console.log(desmembrar[1]);

        // Para retornar a hospedagem puxaremos o 2 do array (tudo depois do @)
        console.log(desmembrar[2]);





        // Se o @ estivesse entre parênteses ele seria um dos retornos no array o 1 seria o que há antes dele, ele seria o 2 e o 3 seria o restante
        console.log(email.match(/^(.*?)(@)(.*?)$/));

        /*
        
            0: "nicchonsanchez@gmail.com"
            1: "nicchonsanchez"
            2: "@"
            3: "gmail.com"
            groups: undefined
            index: 0
            input: "nicchonsanchez@gmail.com"
            length: 4
        
        */

})










/*

    AGORA VAMOS DAR INÍCIO AO PROCESSO DE VALIDAÇÃO DOS CAMPOS DO FORMULÁRIO

*/


$(()=>{

    $('form#cadastro').submit(()=>{

        // Vamos pegar os valores dos inputs
        var nome = $('input[name=name]').val();
        var telefone = $('input[name=telefone]').val();
        var email = $('input[name=email]').val();

        // Verificando se os campos do formulário estão corretos
        if(verificarNome(nome) == false){

            campoInvalido($('input[name=name]'));
            return false;

        } else if(verificarTelefone(telefone) == false){

            campoInvalido($('input[name=telefone]'));
            return false;

        } else if (verificarEmail(email) == false){

            campoInvalido($('input[name=email]'));
            return false;

        } else {

            alert('Formulário enviado com sucesso!')

        }

    })










    // Funções para verificar os campos do formulário

    function verificarNome(nome){
        // Verificar se está vazio
        if(nome == "")
            return false;
        

        var qntNomes = nome.split(' ').length;
        var divisaoNomes = nome.split(' ');

        // Há mais de 2 nomes?
        if(qntNomes >= 2){

            for(i = 0; i < qntNomes; i++){

                if(divisaoNomes[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                    
                } else {
                    console.log(`
                        O ${i+1}º nome não bate com um verdadeiro, verifique se escreveu corretamente.
                        Lembrando que a primeira letra de cada nome deve ser escrita em maiúsculo e não aceitamos tudo escrito em maiúsculo.
                    `)

                    return false;
                }
            } /* /for */

        } else {
            console.log("O nome não bate a condição NOME COMPLETO");
            return false;
        }
    }

    function verificarTelefone(telefone){
        // Verificar se está vazio
        if(telefone == "")
            return false;

        if(telefone.match(/[0-9 \-\(\)]{8,}$/) == null)
            return false;
    }

    function verificarEmail(email){
        if(email == "")
            return false;

        if(email.match(/^[a-z0-9-_.]{1,}@[a-z.]{1,}$/) == null)
            return false
    }


    // Estilização dos campos inválidos
    function campoInvalido(campo){

        campo.addClass('campo-invalido');
        campo.data('invalido','true');
        campo.val('Valor invalido');

        campo.focus(()=>{
            campo.val('');
            campo.removeClass('campo-invalido');
        })
    }

})


//










/*

    Conteúdo copiado da Aula 11

    show() / faz o elemento aparecer
    hide() / faz o elemento desaparecer

    Revendo:
    fadeIn() / faz o elemento aparecer através do aumento gradual de opacidade

*/



// Abrir formulário
$(()=>{

    $('#abrir-formulario.btn').click(()=>{
        $('#formulario.bg').fadeIn();
    })

})


// Fechar formulário
$(()=>{

    var fecharForm = $('.bg, .closeBtn');
    var bg = $('.bg');

    fecharForm.click(()=>{
        bg.fadeOut();
    })

    $('form').click((e)=>{
        e.stopPropagation();
    })

})