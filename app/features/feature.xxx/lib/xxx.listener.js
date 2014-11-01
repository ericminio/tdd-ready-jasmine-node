function XXX($) {  
    this.page = $
};

XXX.prototype.clicked = function() {
    this.page('ul#items').append('<li>' + this.page('#new-item').val() + '</li>');
};

var module = module || {}
module.exports = XXX;