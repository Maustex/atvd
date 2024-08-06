// 1

let numbers = [1, 2, 3, 4, 5];
let triplo = numbers.map(x => x * 3);
console.log(triplo);

// 2

let num = [1, 2, 3, 4, 5];
let conversao = num.map(x => x.toString());
console.log(conversao);

// 3

let frutas = ["maçã", "banana", "laranja"];
let Manipulacao = frutas.map(fruta => fruta.toUpperCase());
console.log(Manipulacao);

// 4

let pessoas = [{ nome: "Alice", idade: 25 }, { nome: "Bob", idade: 30 }, { nome: "Charlie", idade: 35 }];
let nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes);

// 5

let number = [1, 2, 3, 4, 5];
let quadrado = number.map(x => x * x);
console.log(quadrado);

// 6

let meuArray = [1, 2, 3];
meuArray[0] = 4;
console.log(meuArray);

let minhaString = "Olá";

// 7

// localStorage.setItem('key', 'value');
// let value = localStorage.getItem('key');
// console.log(value);
// key = chave, value = valor

// 8

let stringPrimitiva = 'Olá';
let referencia = { saudacao: 'Olá' };

console.log(stringPrimitiva);      
console.log(referencia.saudacao); 

// 9

let arraySimples = [1, 2, 3];
let arrayMulti = [[1, 2], [3, 4]];

console.log(arraySimples);
console.log(arrayMulti); 
