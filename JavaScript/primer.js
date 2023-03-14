/**********Primeros pasos en JavaScript comienzo de Variables**********/
var variable = 'este es un tipo de variable generico'
const variable2 = 'este es un tipo de variable constante'
let variable3 = 'este es un tipo de variable donde el nombre estara bloqueado'

let string1 = 'estoy haciendo un curso de javaScript'
let string2 = 'Estoy aprendiendo bien javaScript'
let resultado= `${string1} ${string2}`

//typeof variable, sirve para revisar que tipo de variable es.

/*********comienzo de estudios de objetos*******************/
let string3 = 'nuevo string'
typeof string3
let numero1 = 2
typeof numero1
let objeto = {
    propiedad1: 'Texto1',
    propiedad2: 2,
    propiedad3: {

    }
}
typeof objeto
objeto.propiedad1
typeof objeto.propiedad1
objeto.propiedad2
typeof objeto.propiedad2
objeto.propiedad3
typeof objeto.propiedad3
null
/***********Final del estudio de objetos********************/
/**Estudio de más primitivas**/
//variables undefined, booleanos.
undefined
typeof undefined
let var1 = undefined
let var2 = true
let var3 = false
let var4 
typeof var1
typeof var2
typeof var3
typeof var4
//symbol
typeof Symbol()
/**Final de las primitivas**/

/**Expresiones= es todo lo que esta al lado derecho de la variable definida**/
let algo ='primera expresion'
var algo2= 2
const algo3= true

/**Json y objeto windows **/
//este es un json
//{
//    prop1:1,
//    prop2:2
//}

//'JavaScript object notation'= Json

let persona={
    nombre:'Juan Carlos',
    apellido:'Carvajal',
    email:'juanc@gmail.com'
}

persona.nombre
persona.apellido
persona.email

/**Window, alert, document**/

window.innerWidth

alert('hola mundo')

window.alert('hola mundo')

/**anidamiento y scope**/

var z='soy la primera variable'
{
    let i='cierto texto'
    let u='otra cosa'
    {
        const r=3
        var j=2
        {
            u=5
            u
        }
        r
        j
    }
    i
    u
}
z