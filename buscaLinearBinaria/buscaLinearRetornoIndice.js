function buscaLinear (array, elemento) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] === elemento) {
            return i;
        }
    }
    return -1;
}