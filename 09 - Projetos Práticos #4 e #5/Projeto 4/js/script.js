// Menu mobile
$('nav.mobile').click(function(){
    $('nav.mobile').find('ul').slideToggle();
})

// Ancora - Scroll suave
var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - document.querySelector('body header').getBoundingClientRect().height // Estou subtraindo a altura do menu
    }, 500);
    return false;
});




/*
$menuMobile = document.querySelector('header nav.mobile');
$menuMobileUl = document.querySelector('header nav.mobile ul');

$menuMobile.addEventListener(
    "click",
    function(){
        if($menuMobileUl.style.display == "none"){
            $menuMobileUl.style.display = "block";
        } else {
            $menuMobileUl.style.display = "none";
        }
    }
);
*/