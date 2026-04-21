function primeiraFuncao(){


    console.log("Hello World das funções");
    
}

primeiraFuncao();


// Argumentos/ parâmetros
function dizerNome(nome) {

    console.log("O nome é: " + nome);

}

dizerNome("Gessica");
dizerNome("Gabriel");
dizerNome("Megui");


let nomeDoBancoDeDados = "João";

dizerNome(nomeDoBancoDeDados);


// return
function soma(a,  b) {
    let soma = a + b;
    return soma;
}

let somaUm = soma(2, 5);
console.log(somaUm);

let somaDois = soma(3, 4);
console.log(somaDois);

console.log(soma(4, 5));

