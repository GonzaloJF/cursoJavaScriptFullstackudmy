const http = require('node:http');
const  url  = require('node:url');

const callbackDelServidor = (req,res)=>{
    // obtener url desde el objeto request
    const urlActual = req.url;
    // obtener la ruta
    const urlParseada = url.parse(urlActual, true);
    const ruta = urlParseada.pathname;
    //limpiar la ruta de los slash "/"
    const rutaLimpia = ruta.replace(/^\/+|\/+$/g, "");
    //obtener el metodo http
    console.log('reques method de la pagina: ',req.method.toLowerCase());
    // enviar una respuesta dependiendo de la ruta
    switch(rutaLimpia){
        case 'ruta':
            res.end('estas en ruta conocida');
            break;
        default:
            res.end('estas en una ruta desconocida');
    }
    
    /*if(rutaLimpia === 'ruta'){
        res.end('estas en la ruta: /ruta');
    }else{
        res.end('estas en una ruta que no conzco');
    }
    */
};

const server = http.createServer(callbackDelServidor);

server.listen(5000, ()=>{
    console.log('el servidor esta escuchando peticiones en la url localhost:5000');
});