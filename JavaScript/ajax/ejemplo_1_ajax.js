//ajax = asynchronus JavaScript And Xml
const listaUsuarios = document.getElementById("Lista_usuarios");
const boton = document.getElementById("boton_enviar");

function reqListener(){
    const usuarios = JSON.parse(this.responseText);
    console.log(usuarios);
    const usuariosRender = usuarios.map((individuo)=> `<li>${individuo.nombre}</li>`).join("");
    console.log(usuariosRender);
    listaUsuarios.innerHTML = usuariosRender;
}

var peticion = new XMLHttpRequest();
peticion.addEventListener("load",reqListener);

function enviarDatos(){
    peticion.open(
        "POST", 
        "http://bootcamp-dia-3.camilomontoyau.now.sh/usuarios", 
        true
    );
    peticion.setRequestHeader(
        "Content-type", 
        "application/x-www-form-urlencoded"
    );
    peticion.send("nombre=Alejandro");
    setTimeout(refrescar,3000); 
}

function refrescar(){
    peticion.open("GET", "http://bootcamp-dia-3.camilomontoyau.now.sh/usuarios");
    peticion.send();    
}

boton.onclick = enviarDatos


//document tiene una funcion que lo que nos sirve es para poder obtener elementos segun el id
//esta funcion es la siguiente, document.getElementById()
//listaUsuarios.innerHTML sirve para mostrar la informacion que esta dentro del los datos dentro del array

