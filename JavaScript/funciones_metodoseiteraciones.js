/** Funciones **/

function sumar(num1, num2){
    console.log(arguments);
    const resultado = num1 + num2;
    return resultado;
}

const r = sumar(1,2)
const t = sumar(-6,7)
const z = sumar(r,t)

r
t
z

sumar(3,6)

/**Metodos e iteraciones**/

const persona1 = {
    nombre: 'Maria',
    apellido: 'Martinez',
    id: 5,
    nombreCompleto: function(){
        console.log(arguments);
        return `${this.nombre} ${this.apellido}`
    }
}

persona1.nombreCompleto()