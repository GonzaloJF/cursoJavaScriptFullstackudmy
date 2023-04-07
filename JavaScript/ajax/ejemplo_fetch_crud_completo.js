//ajax = asynchronus JavaScript And Xml
const listaUsuarios = document.getElementById("body_usuarios");
const boton = document.getElementById("boton_enviar");
const nombre_usuario = document.getElementById("nombre");
const apellido_usuario = document.getElementById("apellido");
const pais_usuario = document.getElementById("pais");
let boton_elimminar = null; 
let usuarios = [];

//
//Funcion de mostrar datos
//

function render(){
    const usuariosRender = usuarios
    .map((individuo,indice)=> `<tr>
                        <td>${individuo.nombre ? individuo.nombre : 'vacio'}</td>
                        <td>${individuo.apellido ? individuo.apellido : 'vacio'}</td>
                        <td>${individuo.pais ? individuo.pais : 'vacio'}</td>
                        <td><button class="eliminar" data-indice=${indice} >Eliminar</button></td>
                        </tr>`)
    .join("");
    console.log(usuariosRender);
    listaUsuarios.innerHTML = usuariosRender;
    boton_elimminar = document.getElementsByClassName("eliminar");
}
//
//Funcion de enviar los datos
//
function enviarDatos(e){
    e.preventDefault();
    const datos = {
        nombre: nombre_usuario.value,
        apellido: apellido_usuario.value,
        pais: pais_usuario.value
    }
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
//llamado a la funcion de refrescar la pagina
refrescar();
//
//Funcion que sirve para refrescar la página y mostrar los datos dentro de la tabla
//
function refrescar(){
    fetch('http://bootcamp-dia-3.camilomontoyau.now.sh/usuarios')
    .then(response=> response.json())
    .then(respuestaUsuarios=>{
        console.log('los usuarios son: ', respuestaUsuarios)
        usuarios = respuestaUsuarios
        render();
    })
}

function eliminarDatos(e){
    e.preventDefault();

    var url = `http://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${indice}`;

    
    fetch(url, {
      method: 'DELETE', // or 'PUT'
    

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

boton.onclick = enviarDatos

//Recordatorio CRUD= Create, Read, Update, Delete, Listar.