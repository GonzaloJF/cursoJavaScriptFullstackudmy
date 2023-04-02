setTimeout(() => {
    console.log("ejecución 1")
    setTimeout(()=>{
        console.log("ejecución 2")
        setTimeout(() => {
            console.log("ejecución 3")
            setTimeout(() => {
                console.log("ejecución 4")
            }, 10000);
        }, 2000);
    },4000)    
}, 3000);