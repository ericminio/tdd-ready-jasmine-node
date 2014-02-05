var router = require('./lib/router.js');

describe('Router', function() {

    describe('Prod configuration:', function() {
	
		it('has routes', function() {
			expect(router.routes.length).toBeGreaterThan(0);
		});

		it('maps task list request', function() {
			expect(router.endPointOf({ url: '/ericminio' })).toBe(require('./features/feature.xxx/lib/xxx.endpoint'));
		});
		
		it('maps static content request', function() {
			expect(router.endPointOf({ url: '/anything-else' }).toString()).toEqual(servecontent('app/li/public').toString());
		});
		
	});
		
});