//para realizar el arrow function se necesita una variable constante que contenga la funcion en forma anonima
//ejemplo:

const miFuncion2 = () =>{
    console.log("esta es parte de la funcion arrow")
}

function miFuncion (){
    console.log("se ejecuta la funcion normal")
    miFuncion2()
}

miFuncion()

//ejemplos de scope de las funciones normales y de arrows
//funcion normal 
function miFuncion3 (){
    this.miFuncion4 = function (){
        return this
    }
}

const c= new miFuncion3()

//funcion con arrow 

function miFuncion3 (){
    this.miFuncion4 = ()=>{
        return this
    }
}

//constructor

const d = new miFuncion3

d.miFuncion4

// funcion arrow dentro de otra funcion arrow

const miFuncion5 = ()=>{
    this.miFuncion6 = ()=>{
        return this
    }
}

const e = new miFuncion5()

e.miFuncion6

//observacion la funcion creada con 2 arrow no se puede llamar la que esta dentro por que le faltan los constructores.
//Una de las soluciones que se pueden integrar en este caso es pasarlas a un objeto para poder llamar a la funcion dentro de un metodo de la siguinte forma
//ejemplo de objetos con funciones arrows dentro

const objeto ={
    metodo : () =>{
        return this
    }
}
//otra cosa importante a tener en cuenta es que en las funciones de arrow se muestra siempre como un tipo de funcion window dentro de js.
//al crear un objeto con funcion normal el objeto toma el tipo de dato de la funcion.
//ejemplo de objeto con funcion normal

const objeto2 ={
    metodo(){
        return this
    }
}

//¿Que pasaria si en la const esta la arrow function y dentro de esta hay una funcion normal?

const quepasaria = () =>{
    return function mifuncionquepasaria (){
        return this
    }
}