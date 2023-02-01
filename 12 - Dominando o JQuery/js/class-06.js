/*
    fadeOut(X,Y) - X= Tempo de duração, Y= O que ocorrerá depois (pode colocar uma function)
    fadeIn(X,Y) - Mesma coisa do fadeOut() 

    slideToggle(X,Y) - Mesma coisa do fadeOut() 


    Para mais animações podemoos consultar o site: https://api.jquery.com/animate/
    Mais efeitos na seção de efeitos: https://api.jquery.com/category/effects/
*/

// Para fazer um elemento sumir diminuindo a opacidade e depois dando display none usamos o fadeOut()
/*
setTimeout(()=>{

    $('.box1').fadeOut(1000, ()=>{

        // Para fazer um elemento aparecer usamos fadeIn()
        $('.box2').fadeIn(2000, ()=>{

            alert('Animação concluída!');

        });

    });

},2000)
*/



// Para fazer um objeto oculto aparecer abrindo de cima pra baixo, tipo um menu, usamos o slideToggle()

$('header ul li').eq(0).click(()=>{

    $('.el1').slideToggle(2000);

})

$('header ul li').eq(1).click(()=>{

    $('.el2').slideToggle(2000, ()=>{

        //location.href="https://nicchon.com";
        if(document.querySelector('.el2').style.display == 'block'){
            alert('Elemento 02 aberto');
        } else {
            alert('Elemento 02 fechado');
        }

    });

})