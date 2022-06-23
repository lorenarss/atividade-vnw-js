/* /* Atividade 01

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
/* 
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
} */


/* // Atividade 03 --------------------
/1 - Criar um loop que conte de 1 até 10 usando FOR


//2 - Criar um loop que conte de 10 até 1 usando WHILE


//3 - Criar um loop que conte todos os números ímpares de 1 até 100


//4- Criar um loop que conte todos os números pares de 0 a 100
 */

/* let count;

for (let count = 0; count <= 10; count++) {
  console.log(count);
}

let c =10;

while (c >= 1) {
  c--;
  console.log(c);
}

for(let impar=1; impar<=100; impar+=2){
  console.log(impar)
}

for(let par=0; par<=100; par+=2){
  console.log(par)
}



/* //atividade 04 --funções.

//1 - crie uma função que exiba uma mensagem no console

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console


*Bônus:

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
 */


/* function mensagem() {
    console.log("Eu sou uma mensagem no console");
}
mensagem;

function nome(meuNome) {
    console.log(meuNome)
}
nome("Lorena");

function gostos(name, idade, estiloMusical) {
    console.log(name , idade, estiloMusical);
}

gostos("angela", 20, "pop");

function gostos2(filme, musica) {
    console.log(filme, musica);
}

gostos2("a voltados que não foram", "uma musica")

 */

// -----Atividade 04--------------------

 // Crie um array que receba 5 itens e exiba no console.

// Utilize um método para adicionar um nome ao inicio do array.

// Utilize um método para remover o último nome do array.

// Utilize um método para adicionar dois nomes ao fim do array.

// Utilize um método para remover o primeiro nome do array.

// Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]


let dados = [ 'Lorena', 'Silva', 28 , true, 'ana']

console.log(dados)

dados.unshift('a')

console.log(dados)

dados.pop()

console.log(dados)

dados.push('Isa', 'taise')

console.log(dados)

dados.shift(0)

console.log(dados)

let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort()

numbers.sort(function(a, b) {
    return a-b //comparar a até b
})

console.log(numbers)
