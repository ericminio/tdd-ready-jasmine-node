var cheerio = require('cheerio');

describe('XXX html', function() {

    var page;
    
    beforeEach(function() {
        this.addMatchers({ 
    		toHaveElement: function(selector) {
    		    var found = this.actual(selector).length > 0;
        		this.message = function() {
        			return 'Expecting given page to contain element ' + selector;
        		};
        		return found;
        		
    		}
    	}); 
    });
    
    beforeEach(function() {
        page = cheerio.load(require('fs').readFileSync('./app/features/feature.xxx/lib/xxx.html').toString());
    });
    
	it('has a title', function() {			
		expect(page('title').text()).toContain('XXX');
	});		
	
	it('has an input field', function() {
	    expect(page).toHaveElement('input#new-item'); 
	});
	
	it('has a save button', function() {
	    expect(page).toHaveElement('button#save'); 
	});
	
	it('has a list', function() {
	    expect(page).toHaveElement('ul#items'); 
	});
	
});