const proxy = require('http-proxy-middleware');
module.exports = function(app) {
 app.use(
     '/api',
     proxy({
         target: 'api.eventful.com/json',
         changeOrigin: true,
     })
 )
};