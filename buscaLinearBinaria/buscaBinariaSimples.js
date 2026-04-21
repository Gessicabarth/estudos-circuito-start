function buscabinaria (array, elemento) {

    let primeiroIndice = 0;
    let ultimoIndice = array.length-1;
    let indiceDoMeio = (array.length-1 /2)|0;


    while (primeiroIndice <= ultimoIndice) {
        
        if (array[primeiroIndice] === elemento || array[ultimoIndice] === elemento || array[indiceDoMeio] === elemento ) {
            return true;
        } else if (elemento < array[indiceDoMeio]) {
            ultimoIndice = indiceDoMeio - 1;
        } else {
            primeiroIndice = indiceDoMeio + 1;
        }
        indiceDoMeio = (primeiroIndice + ultimoIndice) / 2;
    }
    return false;
}