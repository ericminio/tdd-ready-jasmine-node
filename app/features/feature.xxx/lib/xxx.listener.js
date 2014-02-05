var require = require || function() {};
var $ = $ || require('jquery');

function XXX() {  
};

XXX.prototype.clicked = function() {
    $('ul#items').append('<li>' + $('#new-item').val() + '</li>');
};

var module = module || {}

module.exports = XXX;