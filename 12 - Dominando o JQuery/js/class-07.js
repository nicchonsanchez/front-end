/*
    animate({x}, y, z) - X- Entre chaves se coloca a animação que deseja, Y- tempo, Z - O que fazer dps
    setTimeout(x, y) - X= função, Y- tempo
    clearTimeout(x) - Nome da variável do setTimeout

    setInterval()
    clearInterval()
    
*/

var girarBox = ()=>{

    efeitoBox = setTimeout(() => {
            
        $('.box2').animate(
        {

            'width': 300,
            'paddingTop': 100,
            'paddingBottom': 100,
            'background': 'white',
            'color': 'black'

        }, 1000)

    }, 5000);

}


$('.box1').animate(
    {

        'width': 300,
        'paddingTop': 100,
        'paddingBottom': 100,
        'background': 'white',
        'color': 'black'

    }, 3000, ()=>{
        
        $('.box1').animate(
            {
        
                'width': '90%',
                'paddingTop': 40,
                'paddingBottom': 40,
                'background': 'unset',
                'color': 'white'
        
            },2000
        )

        girarBox();

    }
);

// Se clicar em qualquer lugar do body após ativo o setTimeout() o evento da box2 será cancelado
$('body').click(()=>{

    alert('Transição parada!');
    clearTimeout(efeitoBox);

});






// setInterval() irá realizar uma ação repetidamente até que ela seja cancelada pelo clearInterval()

var loopInterval;

loopInterval = setInterval(()=>{

    if($('body').css("background-color") == '#0d0d0d' || $('body').css("background-color") == 'rgb(13, 13, 13)'){
        
        $('body').css("background-color",'#300000');

    } else {

        $('body').css("background-color",'#0d0d0d');

    }

},1000)



// Ao clicar no body o setInterval irá parar

$('body').on('click',()=>{

    clearInterval(loopInterval);
    console.log('loopInterval cancelado!');

    $('body').css("background-color",'#0d0d0d');

})