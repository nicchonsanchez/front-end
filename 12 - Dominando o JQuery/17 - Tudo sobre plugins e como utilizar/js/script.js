$(function(){

    // JS Socials - Compartilhar site

    $('.artigos article .share-redes-sociais').jsSocials({

        shares: ["facebook", "linkedin", "whatsapp", "email", "pinterest", "googleplus", "stumbleupon"]

    })



    // Mask - Máscara de inputs

    $('input[type="CPF"]').mask('999.999.999-99');
    $('input[type="tel"]').mask('(99) 99999-9999');
    $('input[type="date"]').mask('99/99/9999');
    $('input[type="CEP"]').mask('99.999-999');


})