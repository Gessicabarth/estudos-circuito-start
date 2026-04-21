
// quando criamos uma vcariável no JS usando conchetes, criamos um vetor. 
let frutas = ["abacaxi", "maça", "banana", "melão",];
// indices:      0         1        2         3

console.log(frutas[1]);
console.log(frutas[0]);
console.log(frutas[3]);
console.log(frutas[4]);       // como podemos notar, ao rodar este código esta linha irá dar undefined pois nosso array vai só ate o índice 3
console.log(frutas[2]);

// o comando .length me fala qual o tamanho do array, observe não devolve os indices e sim a quantidade de frutas que tem nesta lista
console.log(frutas.length + "\n");


console.log(frutas + "\n");

// o .table mostra uma tabela com os indices e nomes 
console.table(frutas);


frutas[1] = "jabuticaba";
console.table(frutas);



let boletim = [[8,7,9,3],[4,5,8,6]];
console.log(boletim);


// mostra a posição 2 do indice 1 que no caso é a segunda linha de notas
console.log(boletim[1][2]);

console.table(boletim);

