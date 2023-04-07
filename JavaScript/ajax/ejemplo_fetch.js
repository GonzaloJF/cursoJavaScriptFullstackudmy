//ajax = asynchronus JavaScript And Xml
const listaUsuarios = document.getElementById("body_usuarios");
const boton = document.getElementById("boton_enviar");
const nombre_usuario = document.getElementById("Nombre_usuario");
let usuarios = [];

function render(){
    const usuariosRender = usuarios
    .map((individuo)=> `<tr><td>${individuo.nombre}</td></tr>`)
    .join("");
    console.log(usuariosRender);
    listaUsuarios.innerHTML = usuariosRender;
}

function enviarDatos(){
    const datos = {nombre: nombre_usuario.value}
    var url = 'http://bootcamp-dia-3.camilomontoyau.now.sh/usuarios';

    
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(datos), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res =>{
        console.log("response", res);
        return res.json() 
    })
    .catch(error => console.error('Error:', error))
    .then(response => {
        console.log('Success:', response)
        refrescar();
    });
    
}

refrescar();

function refrescar(){
    fetch('http://bootcamp-dia-3.camilomontoyau.now.sh/usuarios')
    .then(response=> response.json())
    .then(respuestaUsuarios=>{
        console.log('los usuarios son: ', respuestaUsuarios)
        usuarios = respuestaUsuarios
        render();
    })
}

boton.onclick = enviarDatos
