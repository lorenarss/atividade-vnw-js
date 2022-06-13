/* Atividade 01

let aluno = "lorena"
let numero = 20

let anoAtual = 2022

let subtracao = anoAtual - numero
console.log(subtracao)
let adicao = subtracao + anoAtual

console.log(adicao)

console.log("Estou mexendo no console.log")

let quartaFeira = true

console.log(quartaFeira)

console.log(typeof quartaFeira)
 */

//atvidade 02 -------

let age = 12;
let human = true;
let birthday = "janeiro";
let name1 = "Raissa";
let sobrenome = "Silaaaava";

if (age > 18) {
    console.log("Você é maior de 18 anos");
}

if (age >= 18 && human ==true) {
    console.log("você é humano e maior de idade");
} else {
    console.log("você é menor de idade e não humano");
}

if (birthday == "janeiro" || birthday == "dezembro") {
    console.log("seu aniversário é em janeiro ou dezembro");
} else {
    console.log("seu aniversŕio não é me janeiro e nem dezembro");
}

if (name1.startsWith("r") ){
    console.log("Seu nome começa com a letra R");
} else {
    console.log("seunome não começa com R");
}

if (sobrenome.length > 6 || sobrenome.startsWith("e") ) {
    console.log("Seu sobrenomee tem mais de 6 caracteres OU começa com a letra e")
    
} else {
    console.log("seu nome tem menos de 6 caracteres, e não começa com a letra e")
}
