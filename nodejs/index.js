const http = require('node:http');
const url = require('node:url');
const StringDecoder = require('string_decoder').StringDecoder;

const callbackDelServidor = (req, res) => {
    // obtener url desde el objeto request
    const urlActual = req.url;
    // obtener la ruta
    const urlParseada = url.parse(urlActual, true);
    const ruta = urlParseada.pathname;
    // limpiar la ruta de los slash "/"
    const rutaLimpia = ruta.replace(/^\/+|\/+$/g, "");
    // obtener el metodo http
    const metodo = req.method.toLowerCase();
    // obtener las variables del query
    const { query = {} } = urlParseada;
    console.log({ query });
    // obtener headers.
    const { headers = {} } = req;
    console.log({ headers });
    // obtener payload, en el caso de haber alguno.
    const decoder = new StringDecoder('utf-8');
    let buffer = '';
    // ir acumulando la data cuendo el request reciba un payload
    req.on('data', (data) => {
        buffer += decoder.write(data);
    });
    // terminar de acumular datos y decirle al decoder que finalece.
    req.on('end', () => {
        buffer += decoder.end();
        // ordenar la data
        const data = {
            ruta: rutaLimpia,
            query,
            metodo,
            headers,
            payload: buffer
        };

        console.log({ data });

        // elegir el manejador de la respuesta.//handler.
        let handler;
        if (rutaLimpia && enrutador[rutaLimpia]) {
            handler = enrutador[rutaLimpia];
        } else {
            handler = enrutador.noEncontrado;
        }

        // ejecutar handler para enviar la respuesta.
        if (typeof handler === 'function') {
            handler(data, (statusCode = 200, mensaje) => {
                const respuesta = JSON.stringify(mensaje);
                res.writeHead(statusCode);
                //linea donde realmente ya estamos dando la respuesta a la aplicación cliente.
                res.end(respuesta);
            });
        }
    });
    /*if(rutaLimpia === 'ruta'){
        res.end('estas en la ruta: /ruta');
    }else{
        res.end('estas en una ruta que no conzco');
    }
    */
};

const enrutador = {
    ruta: (data, callback) => {
        callback(200, { mensaje: 'Esta es /ruta' });
    },
    noEncontrado: (data, callback) => {
        callback(404, { mensaje: 'No encontrado' })
    },
}

const server = http.createServer(callbackDelServidor);

server.listen(5000, () => {
    console.log('el servidor esta escuchando peticiones en la url localhost:5000');
});