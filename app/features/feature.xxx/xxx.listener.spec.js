var $ = require('jquery')(require("jsdom").jsdom().parentWindow);
var XXX = require('./lib/xxx.listener');

describe('XXX listener', function() {

    var listener = new XXX($);

    it('can be instantiated', function() {
        expect(listener).toBeDefined();
    });
    
    it('has a clicked method', function() {
        expect(typeof listener.clicked).toBe('function'); 
    });
    
    describe('clicked', function() {

        beforeEach(function() {
    		$('body').append('<input id="new-item"/>');
            $('body').append('<ul id="items"></ul>');

    		$('#new-item').val('make the world better');    		
    		listener.clicked();
        });
        
        afterEach(function() {
            $('#new-items').remove();
            $('#items').remove();
        });

        it('adds the new items in the list the task list', function() {
            expect($('ul#items li:nth-child(1)').text()).toEqual('make the world better'); 
        });

    });
});