// Todas as funçoes de JQuery estão disponíveis em https://api.jquery.com/

/*
    A nível de comparação entre JS puro e Jquery, veja como se altera características do estilo do site
*/

// Aqui veremos em JavaScript
function changeBackground(color){

    document.body.style.backgroundColor = color;

}

// Já no JQuery...
//$('body').css('background','#d0d0d0');




// Continuando com exemplos da aula:

$('.artigo1').css('background-color','#fff');
$('#teste').css('transition','0.5s');
$('#teste').css('padding','20px'); // Não é possível colocar mais de um valor como o padding de 20px 2%, ou 10px 20px 30px 40px por exemplo

// É possível retornar o valor num alert ou console.log
alert($('#teste').css('background-color'));

// Colocar um tempo de espera
$(function(){
    setTimeout(()=>{
        $('#teste').css('background-color','green');
        $('#teste h2').css('color','white');
    },2000)
})

$('#teste').hover(
    () => { // Primeiro quando o mouse estiver encima
        $('#teste').css('background-color','blue');
    },
    () => { // Segundo quando o mouse estiver fora
        $('#teste').css('background-color','green');
    }
)