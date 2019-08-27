const http = require('http');
const path = require('path');

const port = 3210;
const GetHandler = require('./module/getHandler');
const PutHandler = require('./module/putHandler');
const PostHandler = require('./module/postHandler');
const RemoveHandler = require('./module/removeHandler');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

    switch (req.method.toLowerCase()) {
        case 'get':
            new GetHandler(req, res);
            break;
        case 'post':
            new PostHandler(req, res);
            break;
        case 'put':
            new PutHandler(req, res);
            break;
        case 'delete':
            new RemoveHandler(req, res);
            break;
        case 'options':
            const headers = {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, DELETE, PUT',
                'Access-Control-Allow-Headers': 'content-type',
                'Access-Control-Max-Age': 2592000,
            }
            res.writeHead(204, headers);
            res.end();
            break;
        default:
            res.end('Invalid method');
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port: ${port}.`);
});

