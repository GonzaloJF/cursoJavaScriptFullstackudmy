function sumar(num1,num2){
    return num1 + num2;
}

function restar(num1,num2){
    return num1 - num2;
}

function multi(num1,num2){
    return num1 * num2;
}

function multifuncion(num1,num2,operacion){
    const resultado = operacion(num1,num2);
    console.log(resultado);
}

console.log(sumar(4,3));
console.log(restar(4,2));
console.log(multi(2,8));