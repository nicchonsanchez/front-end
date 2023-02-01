// Como fazer para aplicar uma ação ao CLICAR em determinado item:

$('#teste').click(()=>{
    $(".titulo").css('background-color','red');
});


// Adicionara um transition de 0.3s só pra ficar mais bacaninha a transção kkk
$("#teste").css('cursor','pointer');



// Como fazer para aplicar uma ação HOVER em determinado item:

$(".titulo").hover(()=>{
    $(".titulo").css('background-color','#ccc');
    $(".titulo h2").css('color','black');
}, ()=>{
    $(".titulo").css('background-color','rgb(40,40,40)');
    $(".titulo h2").css('color','white');
});



// Como fazer para aplicar uma ação ao deixar o item em FOCUS:

$('div textarea').focus(()=>{
    $("div.um").css('background-color','black');
})

// Como fazer para aplicar uma ação ao deixar o item TIRAR o FOCUS:
$('div textarea').blur(()=>{
    $("div.um").css('background-color','white');
})

// Para fazer os juntos fica assim:
$('div textarea').focus(()=>{
    $("div.um").css('background-color','black');
}).blur(()=>{ // Já coloca o .blur no fechamento da ação anterior
    $("div.um").css('background-color','white');
})



// Como fazer para aplicar uma ação ao MUDAR uma informação:
$('div textarea').change(()=>{
    if($('div textarea').val() == ""){
        alert("Texto APAGADO!");
    } else {
        alert("Texto alterado para:\n\n"+$('div textarea').val());
    }
})

$('div select').change(()=>{
    alert($('div select').val());
})