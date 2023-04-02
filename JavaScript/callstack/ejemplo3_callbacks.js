const miBoton = document.getElementById("miboton");

const ejecutarCuandoleDenClickAlBoton = evento => {
    console.log(evento);
}

miBoton.addEventListener("click",ejecutarCuandoleDenClickAlBoton);

ejecutarCuandoleDenClickAlBoton();