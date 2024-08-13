// function verificaIdade(a) {
//     if (a < 18) {
//         return "menor de idade"
//     } else if (a >= 18 && a < 65) {
//         return "adulta"
//     } else {
//         return "idosa"
//     }
// }


// console.log(verificaIdade(18));



// function converteNota(a) {

//     let nota = parseInt(a)

//     switch (nota) {
//         case 0:
//             return "F"
//         case 1:
//             return "E"
//         case 2:
//             return "D"
//         case 3:
//             return "C"
//         case 4:
//             return "B"
//         case 5:
//             return "A"
//         default:
//             return "Nota inválida"
//     }
// }

// console.log(converteNota(0));

/*Crie uma função tabuada que receba um número como parâmetro e imprima a tabuada desse número de 1 a 10. Use um laço for para fazer isso.*/

// function tabuada(a) {
//     for (let i = 1; i < 11; i++) {
//         console.log(`${i} x ${a} = ${i * a}`);
//     }
// }

// tabuada(2)
// console.log("-------------------------------------------------")
// tabuada(4)
// console.log("-------------------------------------------------")
// tabuada(7)
// console.log("-------------------------------------------------")
// tabuada(9)




// function contagemRegressiva(a) {

//     while (a > 0) {
//         a = a - 1
//         console.log(a)
//     }
// }
// contagemRegressiva(111)

/*Crie uma função calculadora que receba três parâmetros: dois números e uma string representando a operação (+, -, *, /). A função deve retornar o resultado da operação entre os dois números.*/


// function calculadora(a,b,c) {

//     switch (b) {
//         case "*":
//             return a * c 
//         case "+":
//             return a + c 
//         case "-":
//             return a - c 
//         case "/":
//             return a / c 
//         default:
//             break;
//     }
    
// }

// console.log(calculadora(8, "/", 10))



let soma = (a,b) => a+b
console.log(soma(10,7))