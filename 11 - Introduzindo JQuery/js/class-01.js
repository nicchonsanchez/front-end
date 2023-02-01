// No JavaScript normal geralmente iniciamos o código com:
window.onload = function(){
    alert('JS');
}

// No JQuery temos 2 maneira de iniciar
// Em ambos os casos irão funcionar assim que a página carregar, porém talvez não dê tempo para as imagens e demais arquivos carregarem. Para isso usaremos uma outro código
$(function(){
    alert('JQuery 1');
})
// ou então:
$(document).ready(function(){
    alert('JQuery 2')
})


// Para esperar tudo carregar prinmeiro, incluindo imagens, videos e etc usaremos o seguinte código
$(window).on('load', function(){
    alert('JQuery - Este irá carregar somente depois que todos os outros arquivos estejam carregados')
})