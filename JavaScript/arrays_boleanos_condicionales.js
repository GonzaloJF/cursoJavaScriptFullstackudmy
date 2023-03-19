
/**arrays**/

const miArray=[ 1, 2, 3, 'hola', 28, {a:1} ]

miArray

typeof miArray

var iterador = miArray [Symbol.iterator]();

iterador.next().value

miArray.push(10);

/**boleanos y condicionales**/

true == 1
false == 0
!"hola"

//coercion 

!!"f"

true + true

//ejemplo para if y else

const persona2 ={
    nombre : "Billie",
    apellido:"Eillish",
    edad: 17
}

if(persona.edad > 18){
    console.log("esta persona puede tomar alcohol")
}else{
    console.log("esta persona no puede tomar alcohol")
}

/**loops for y while**/

let miArray2 = [];
miArray2.push(1)

for(let i=0; i<10; i++){
    miArray2.push(i);
}

miArray2

miArray3 = []
let control= 20
while(control < 30){
    miArray3.push(control);
}

miArray3

/**while y foreach**/

let miArray4 = [];
let control2 =0;
while(contro2<100){
    miArray4.push(control2)
    if(control%5 === 0){
        control2 = control2 +2
    } else {
        control2 = control2 + 1
    }
}

let miArray5 = ['Hola','Buen día','adiós'];

function convertirenMayusculas(texto){
    const respuesta = texto.toUpperCase()
    console.log(respuesta)
}

miArray5.forEach(convertirenMayusculas)

/*otra forma de representar la funcion de foreach*/

function miForeach(array, funcionAejecutar){
    funcionAejecutar(array[0])
    funcionAejecutar(array[1])
    funcionAejecutar(array[2])
}

miForeach(miArray5,convertirenMayusculas)

/** .map utilización en forma de ejemplo **/

let miArray6 = ['Hola','Buen día','adiós'];

let resutlado= miArray6.map(convertirenMayusculas)

resultado

/* funcion filter*/

let miArray7 = [1,2,3,4,5,6,7,8,9]

function SoloPares(numeroactual){
    return numeroactual % 2 === 0
}

let resultado2 = miArray7.filter(SoloPares)
resultado2

//otra forma de escribirlo

const solopares = (numeroactual) => numeroactual % 2 === 0

let resultado3 = miArray7.filter(solopares)
resultado3