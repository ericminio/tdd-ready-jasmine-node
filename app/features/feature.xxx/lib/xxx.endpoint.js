var fs = require('fs');

module.exports = function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    var html = fs.readFileSync('./app/features/feature.xxx/lib/xxx.html').toString();
    
    response.write(html);
    response.end();
};