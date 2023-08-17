/*

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