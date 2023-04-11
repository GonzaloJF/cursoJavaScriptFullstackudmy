//ajax = asynchronus JavaScript And Xml
const listaUsuarios = document.getElementById("body_usuarios");
const boton = document.getElementById("boton_enviar");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const pais = document.getElementById("pais");
const indice = document.getElementById("indice");
const limpiar = document.getElementById("limpiar")
let usuarios = [];
let botonesEliminar = null;
let botonesEditar = null;

//
//Funcion de mostrar datos
//

function render(){
    const usuariosRender = usuarios
    .map((individuo,indice)=>{ 
                return `<tr>
                        <td>${individuo.nombre ? individuo.nombre : 'vacio'}</td>
                        <td>${individuo.apellido ? individuo.apellido : 'vacio'}</td>
                        <td>${individuo.pais ? individuo.pais : 'vacio'}</td>
                        <td><a class="ver" href="./index2.html?usuario=${indice}" >Ver</a></td>
                        <td><button class="editar" data-indice=${indice} >Editar</button></td>
                        <td><button class="eliminar" data-indice=${indice} >Eliminar</button></td>
                        </tr>`
                    })
    .join("");
    console.log(usuariosRender);
    listaUsuarios.innerHTML = usuariosRender;
    botonesEliminar = document.getElementsByClassName("eliminar");
    botonesEditar = document.getElementsByClassName("editar");
    Array.from(botonesEliminar).forEach( botonEliminar => {
        botonEliminar.onclick = eliminarDatos;        
    });
    Array.from(botonesEditar).forEach(botonEditar => {
        botonEditar.onclick = editarDatos;
    })
}
//
//Funcion de enviar los datos
//
function enviarDatos(e){
    e.preventDefault();
    let accion = e.target.innerText;
    console.log("accion: ", accion);
    const datos = {        
        nombre: nombre.value,
        apellido: apellido.value,
        pais: pais.value
    }
    var url = null;
    var method = null
    if(accion === 'Crear'){
        url = 'http://bootcamp-dia-3.camilomontoyau.now.sh/usuarios';
        method= 'POST';
    }else if(accion === 'Editar'){
        if(indice.value){
            url= `http://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${indice.value}`;
            method = 'PUT';
        }else{
            return;
        }
    }else{
        return;
    }
    
    fetch(url, {
      method, // or 'PUT'
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos),// data can be `string` or {object}!
    }).then(res =>{
        console.log("response", res);
        return res.json() 
    })
    .then(response => {
        console.log('Success:', response)
        refrescar();
        limpiezaDeTexto();
    })
    .catch((razon)=>{
        console.log(razon);
        limpiezaDeTexto();
    })
    
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

function editarDatos(e){
    e.preventDefault();
    console.log("Editar un usuario",e);
    if(e.target.dataset.indice ){
        const usuario = usuarios[ e.target.dataset.indice ];
        nombre.value = usuario.nombre ? usuario.nombre: '';
        apellido.value = usuario.apellido ? usuario.apellido : '';
        pais.value = usuario.pais ? usuario.pais : '';
        indice.value = e.target.dataset.indice;
        boton.innerText = 'Editar';
    }else{
        boton.innerText = 'Crear';
    }    
}

function eliminarDatos(e){
    e.preventDefault();
    console.log("Eliminar usuario",e);
    var url = `http://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${e.target.dataset.indice}`;

    
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

function limpiezaDeTexto(){
    boton.innerText='Crear';
    nombre = '';
    apellido = '';
    pais = ''
}

boton.onclick = enviarDatos
limpiar.onclick = limpiezaDeTexto

//Recordatorio CRUD= Create, Read, Update, Delete, Listar.