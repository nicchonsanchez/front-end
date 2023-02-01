/* 
    submit()
    html()
*/

/*
    O formulário é bem simples.
    Só vamos pegar o val() dos inputs e devolvê-los em outra div.
*/

var numCadastros = 0;

$('form.contato').submit(()=>{

    numCadastros++;

    var container = $('<div></div>').appendTo('body');
    container.attr('class','bg-gradient').attr('id','cad'+numCadastros);

    container.html(`
    
        <p onclick="delCad('cad`+numCadastros+`')" class="del" style="cursor: pointer;">X</p>

        <div class="cadastro bl-center bg-unset">
            <h2 class="numero-cadastro">Cadastro `+numCadastros+`</h2>
            <p class="mb10">Nome: `+$('form.contato input[type="text"]').val()+`</p>
            <p class="mb10">E-mail: `+$('form.contato input[type="email"]').val()+`</p>
            <p class="mb10">Telefone: `+$('form.contato input[type="tel"]').val()+`</p>
        </div>

    `);

    return false;

})


// Botão de deletar
function delCad(cad){

    $("#"+cad).remove();

}