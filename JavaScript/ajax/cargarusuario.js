const bodyUsuario = document.getElementById('body_usuario');

let usuario = {};

function tomarDatosURL(){
    return location.search.replace('?','').split('=')[1];   
}

function obtenerUsuario(){
    fetch(`http://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${tomarDatosURL()}`)
    .then(response=> response.json())
    .then(respuestaUsuario=>{
        console.log('los usuarios son: ', respuestaUsuario)
        usuario = respuestaUsuario
        render();
    })
}   

function render(){
    const usuarioRender =` <tr><td class="campo-usuario">Nombre:  </td><td>${usuario.nombre ? usuario.nombre : 'vacio'}</td></tr>
                           <tr><td class="campo-usuario">Apellido:  </td><td>${usuario.apellido ? usuario.apellido : 'vacio'}</td></tr>
                           <tr><td class="campo-usuario">Pais:    </td><td>${usuario.pais ? usuario.pais : 'vacio'}</td></tr> `                 
    console.log(usuarioRender);
    bodyUsuario.innerHTML = usuarioRender;
}

obtenerUsuario();