var http = require('http');
//our récupérer la page demandée par le visiteur, on va faire appel à un nouveau module de Node appelé "url"
var url = require('url');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write('Bien le bonjour');
    res.end();
});
server.listen(9080);