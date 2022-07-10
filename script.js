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

// -----Atividade 05--------------------

 // Crie um array que receba 5 itens e exiba no console.

// Utilize um método para adicionar um nome ao inicio do array.

// Utilize um método para remover o último nome do array.

// Utilize um método para adicionar dois nomes ao fim do array.

// Utilize um método para remover o primeiro nome do array.

// Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]


/* let dados = [ 'Lorena', 'Silva', 28 , true, 'ana']

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
 */


///----------Atividade 06 "Objeto"

// Crie um objeto que receba ao menos três propriedades sobre você.

// Adicione uma nova propriedade sem alterar seu objeto inicial.

// Remova uma propriedade desse objeto.

//Mostre no console todas as propriedades desse objeto.

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

// Mostre no console o nome de um amigo de cada lista.


let lorena = new Object();

lorena.idade = 28;
lorena.altura = 1.60;
lorena.endereco = 'Passagem bom futuro, 328';

console.log(lorena);

lorena.amigos = 'Pedro';
console.log(lorena);
delete lorena.idade;
console.log(lorena);

const props = Object.keys(lorena);
console.log(props);

//---------------

let cadastro = [];
let amigoP1 = [];
amigoP1.push('Ana', 'Pedro', 'Joao', 'Rita');

let person1 = {
    nome: 'pessoa1',
    idade: 18,
    telefone: '00-9999-9999',
}
person1.amigos = amigoP1;
console.log(person1);

let person2 = {
    nome: 'pessoa2',
    idade: 18,
    telefone: '00-9969-9999',
}
let amigoP2 = [];
amigoP2.push('vivi', 'diogo', 'carla', 'debora');
person2.amigos = amigoP2;

let person3 = {
    nome: 'pessoa3',
    idade: 23,
    telefone: '00-9949-9999',
}
let amigoP3 = [];
amigoP3.push('thiago', 'babi', 'joca', 'Arlindo');
person3.amigos = amigoP3;

let person4 = {
    nome: 'pessoa4',
    idade: 34,
    telefone: '00-9994-9999',
}
let amigoP4 = [];
amigoP4.push('ze', 'jojo', 'victor', 'paula');
person4.amigos = amigoP4;

let person5 = {
    nome: 'pessoa5',
    idade: 55,
    telefone: '00-9993-9999',
}
let amigoP5 = [];
amigoP5.push('gugu', 'pietro', 'julia', 'maria');
person5.amigos = amigoP5;

cadastro.push(person1, person2, person3, person4, person5);
console.log(amigoP1[0], amigoP2[1], amigoP3[2], amigoP4[3], amigoP5[0]);