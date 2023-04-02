const miPromesa = new Promise((resolve, reject)=>{
    const tiemporejected = Math.floor(Math.random()*10000)+1000;
    const tiemporesolved = Math.floor(Math.random()*10000)+1000;  
    console.log("el tiempo del rejected es: ",tiemporejected);
    console.log("el tiempo del resolved es: ",tiemporesolved);
    setTimeout (()=>{
        reject("La promesa falló");
    },tiemporejected);
    setTimeout(() => {
        resolve("La promesa esta resuelta"); 
    }, tiemporesolved);
})

miPromesa.then(
    (respuesta)=>console.log(respuesta),
    razon=>console.log(razon)
) ;