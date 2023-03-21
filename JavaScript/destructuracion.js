//destructuracion de un objeto
//el orden de la destructuracion en este caso es segun el identificador que se tiene 
let miObjeto = {
    a:1, 
    b:2, 
    c:"hola",
    d:function(){
      console.log("soy una funcion")
    },
    e:true
  }
  
  miObjeto.a
  
  let{a,b} = miObjeto
  
  a
  
  b

// Destructuracion de un array
// la destructuracion de un array es de acuerdo a la posicion del elemento dentro del array
let miArray = [1,2,3,'hola', ()=>console.log('soy una funcion'),true]

miArray

let [var1,var2,var3,var4,var5] = miArray

var1
