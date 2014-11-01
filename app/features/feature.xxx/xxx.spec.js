var router = require('../../lib/router');
var Server = require('../../lib/server');
var Browser = require('zombie');

describe('Your feature XXX', function() {

    var server;
    
    beforeEach(function(done) {
        server = new Server(router);
        server.start();
        done();
    });
    
    afterEach(function() {
        server.stop();
    });

    it('expects something', function(done) {
        
        var browser = Browser.create();
        browser.visit('http://localhost:5000/feature-xxx').
            then(function() {
                return browser.fill('#new-item', 'I want my spa under the stars');
            }).
            then(function(){
                return browser.pressButton('#save');
            }).
            then(function() {
                browser.assert.text('ul#items li:nth-child(1)', 'something');
            }).
            then(done, done);
    });
    
});