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
        var browser = new Browser();
        browser.visit('http://localhost:5000/ericminio').
            then(function() {
                return browser.fill('#new-item', 'I want my spa under the stars');
            }).
            then(function(){
                return browser.pressButton('#save');
            }).
            then(function() {
                expect(browser.text('ul#items li:nth-child(1)')).toEqual('something');
                done();
            }).
            fail(function(error) {
            	expect(error.toString()).toBeNull();
            	done();
        	});
    });
    
});