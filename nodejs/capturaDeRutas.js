const http = require('node:http');
const  url  = require('node:url');

const callbackDelServidor = (req,res)=>{
    // obtener url desde el objeto request.    
    const urlActual = req.url;
    const urlParseada = url.parse(urlActual, true);
     // obtener la ruta.
    const ruta = urlParseada.pathname;
    // quitarle los "/" a la ruta.

    // enviar una respuesta dependiendo de la ruta
    if(ruta === '/ruta'){
        res.end('estas en la ruta: /ruta');
    }else{
        res.end('estas en una ruta que no conzco');
    }

};

const server = http.createServer(callbackDelServidor);

server.listen(5000, ()=>{
    console.log('el servidor esta escuchando peticiones en la url localhost:5000');
});