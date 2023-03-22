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

//En caso de querer omitir los primeros datos dentro de un array, se puede hacer de la siguiente manera

let[var7,var6, ...resto] = miArray

resto

//Para poder cambiar datos dentro de los objetos por medio de la destructuración es de la siguiente manera:

miObjeto

let miObjeto2 = miObjeto

miObjeto2

miObjeto2.c="otra cosa"

miObjeto

//copia superficial

miObjeto3 = {...miObjeto}

miObjeto3

miObjeto3.c = "string totalmente nuevo"

miObjeto3

miObjeto