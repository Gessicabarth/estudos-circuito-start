// Importações do projeto
let input = require('fs').readFileSync('./algoritmo1/entrada.txt','utf-8');
let lines = input.split("\n");

// ENTRADA DE DADOS
let valor1 = lines.shift();
let valor2 = lines.shift();


// PROCESSAMENTO
let v1 = parseInt(valor1);
let v2 = parseInt(valor2)
let soma = v1 + v2;


// SAIDA DE DADOS
//console.log(`Você digitou o valor ${valor1}`);
console.log(`X = ${soma}`);
