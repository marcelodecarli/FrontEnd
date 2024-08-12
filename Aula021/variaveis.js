let nome = "marcelo"
var idade = 33
const cidade = "São Leopoldo"


function soma(a, b) {
    console.log(`A soma de ${a} + ${b} = ${a + b}`)

}

soma(5, 5);
soma(57, 3);
soma(35, 15);


let arrayAlunos = []
console.log(arrayAlunos)

let Aluno = {
    nome: "MArcelo",
    idade: 33,
    curso: "TDS"
}

let variavel;
console.log(variavel);

variavel = null
console.log(variavel);


arrayAlunos.push(Aluno)
console.log(arrayAlunos)
console.log(`Meu nome é ${nome} tenho ${idade} anos e moro na cidade com o nome de ${cidade}. `)


function maiorOuMenor(a, b) {
    if (a > b) {
        return true
    } else {
        return false
    }
}

console.log(maiorOuMenor(5, 4));
console.log(maiorOuMenor(4, 4));
console.log(maiorOuMenor(8, 4));
console.log(maiorOuMenor(78, 89));



function numero(numeroTal) {

    if (numeroTal >= 10 && numeroTal <= 20) {
        return true
    } else {
        return false
    }
}

console.log(numero(11))