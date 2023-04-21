const http = require('http');

const callbackDelServidor = (req,res)=>{
    res.end('Hola mundo en un server http');
};

const server = http.createServer(callbackDelServidor);

server.listen(5000);