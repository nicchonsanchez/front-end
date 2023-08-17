$.fn.meuplugin = function(options){
    // Determinando configurações padrões
    var settings = $.extend({
        // Esses são os padrões
        color: '#061e4e',
        backgroundColor: '#fefefe',
    }, options);

    // Alterando configurações com base nos padrões determinados no Script
    return this.css({
        color: settings.color,
        backgroundColor: settings.backgroundColor,
    })
}