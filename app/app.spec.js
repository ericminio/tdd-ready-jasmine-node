var request = require('request');

describe('app', function() {

    var server;
    
    beforeEach(function() {
        server = require('./lib/app');
        server.start();
    });
    
    afterEach(function() {
        server.stop(); 
    });

    it('instatiates the server', function() {
        expect(server).toBeDefined();
    });
    
    it('starts the server on port 5000', function(done) {
        request("http://localhost:5000/lib/public/main.css", function(error, response, body) {
            expect(response.statusCode).toEqual(200);
            done();
        });       
    });
});