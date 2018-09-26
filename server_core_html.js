var http = require('http');
var url = require('url');
var querystring = require('querystring');
var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    res.writeHead(200, { "Content-Type": "text/html" });
    if (page == '/') {
        res.write('page dacceil ');
        if ('prenom' in params && 'nom' in params) {
            res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
        } else {
            res.write('Vous devez bien avoir un prénom et un nom, non ?');
        }
    } else if (page == '/page1') {
        res.write('la premiere page ');
        if ('prenom' in params && 'nom' in params) {
            res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
        } else {
            res.write('Vous devez bien avoir un prénom et un nom, non ?');
        }

    } else if (page == '/page2') {
        res.write('la deuxieme page ');
    } else {
        //res.write('la page que vous avez demandé n\'existe pas');
        res.writeHead(500);
    }

    res.end();
});
server.listen(8080);