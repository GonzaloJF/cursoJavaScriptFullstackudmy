const funcionDelCallback= ()=>{
    console.log('me ejecute despues');
}

const ejecutarMasTarde = () =>{
    setTimeout(funcionDelCallback, 3000);
};

ejecutarMasTarde();