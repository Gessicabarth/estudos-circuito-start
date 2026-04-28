/* 
BUSCA LINEAR - percorre tudo e faz uma verificação para cada elemento
BUSCA BINÁRIA - a partir de um array(lista) ordenado, divide pela metade a cada iteração
*/


// Problema: buscar o número sete nesse array(lista) - [1,2,3,4,5,6,7]

function buscaLinear(lista, elementoDeBusca){
    let indice = -1;
    let contador = 0;

    for (let i = 0; i < lista.length; i++) {
        contador++;
        if (lista[i] === elementoDeBusca) {
            console.log(`A busca linear levou ${contador} etapas`);
            indice = i;            
        }
    }
    return indice;
}

function buscaBinaria(lista, elementoDeBusca) {
    let primeiroIndice = 0;
    let ultimoIndice = lista.length - 1;
    let indiceMedio = 0;
    let contador = 0;

    while (ultimoIndice >= primeiroIndice) {

        contador++
        indiceMedio = Math.floor((primeiroIndice + ultimoIndice) / 2);   // esse método ira arredondar para o menor inteiro possível.
        
        if (elementoDeBusca > lista[indiceMedio]) {
            primeiroIndice = indiceMedio + 1;
        } else if (elementoDeBusca < lista[indiceMedio]) {
            ultimoIndice = indiceMedio - 1;
        } else {
            console.log(`A busca binária levou ${contador} etapas`);
            return indiceMedio;
        }
    }
    return -1;
}

const lista = [1, 2, 3, 4, 5, 6, 7, 8];
const elementoDeBusca = 7;
const indiceLinear = buscaLinear(lista, elementoDeBusca);
const indiceBinario = buscaBinaria(lista, elementoDeBusca);
console.log(`Busca linear - Achou o elemento no index ${indiceLinear}`);
console.log(`Busca binária - Achou o elemento no index ${indiceBinario}`);