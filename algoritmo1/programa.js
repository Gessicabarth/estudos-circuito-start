console.log('Olá, mundo JS');
console.log('Circuito Start');



// Importações do projeto
let teclado = require('prompt-sync')();

// ENTRADA DE DADOS
let valor1 = teclado('Digite o primeiro valor: ');
let valor2 = teclado('Digite o segundo valor: ');


// PROCESSAMENTO
let v1 = parseFloat(valor1);
let v2 = parseFloat(valor2)
let soma = v1 + v2;


// SAÍDA DE DADOS
//console.log(`Você digitou o valor ${valor1}`);
console.log(`Resultado: ${soma}`);
