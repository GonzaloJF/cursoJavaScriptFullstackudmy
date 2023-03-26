const miBoton = document.getElementById("miboton");

const ejecutarCuandoleDenClickAlBoton = evento => {
    console.log(evento);
    alert("diste click al boton");
}

miBoton.addEventListener("click",ejecutarCuandoleDenClickAlBoton);