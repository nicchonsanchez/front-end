/*

    clone() / para clonar o objeto



    Revisão:

    appendTo() / Serve para adicionar um conteúdo ou mover um elemento NO FINAL do lugar indicado

*/


$(()=>{

    // Vamos criar a variável de clonagem dos h2 e h3 de dentro do #b2
    var cloneH2 = $('#b2 h2').clone();
    var cloneH3 = $('#b2 h3').clone();

    // Agora vamos adicionar o h2 na #b1
    $('#b1').html(cloneH2);



    // Adicionar o clone do h3 usando o appendTo() no p´roprio #b3
    cloneH3.appendTo('#b3');
    


});



// SÓ ESTILIZANDO MSM
$('#b2 h3').css({
    'text-align': 'center',
    'color': 'red'
})