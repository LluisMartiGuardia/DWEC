// function suma(a, b){
//     return a+b;
// }

// let suma = new Function("a", "b", "return a+b");

// let c = suma(4,6);
// console.log(c);


//Recursividad
function factorial(numero){
    if(numero == 0){
        return 1;
    }else{
        return (numero * factorial(numero-1));
    }
}

console.log(factorial(10));



function fibonacci(numero, limite){
    var numero2=0;
        while(numero2<limite){
            numero2 = numero+numero;
            return numero2+=numero;
        }
}

console.log(fibonacci(1));



function unaFuncion(a, b){
    console.log(a);
    console.log(a+b);
}

unaFuncion("hola");