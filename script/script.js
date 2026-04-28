console.log('Olá Mundo!');

// o var não é mais recomendado para declaração de variáveis, por não ter o que se chama de block scoping (scopo de bloco)
var mensagem = 'Olá Mundo!'

alert(mensagem);


//--------------------------------------------------------------------------------------------------------------------------------------------------


// usaremos let e cosnt para declaração de variável
// ao usar let é possivel alterar a variavel no decorrer do código mesmo após declarada
// ao usar const não é possivel alterar a variavel apos declarada

let mensagem1 = 'Olá Mundo!'

mensagem1 = 'olá'


//--------------------------------------------------------------------------------------------------------------------------------------------------

// Strings
const mensagem2 = 'Olá Mundo!'

console.log(mensagem2.length)

const nome = 'Gessica'
const sobrenome = 'Barth'

// podemos concatenar com o +
console.log('Meu nome é ' + nome + ' ' + sobrenome);

// ou podemos concatenar com o tamplate string
console.log(`Meu nome é ${nome} ${sobrenome}`);

// podemos também usar o toUpperCase(), que vai deixar todo o meu texto com letras maiusculas, mesmo tendo escrito com letra minuscula ele
console.log(`Meu nome é ${nome.toLocaleUpperCase()} ${sobrenome}`);

// podemos também usar o toLowerCase(), que vai deixar todo o meu texto com letras minusculas, independente de como eu o escrevi
console.log(`Meu nome é ${nome.toLocaleUpperCase()} ${sobrenome.toLowerCase()}`);



//--------------------------------------------------------------------------------------------------------------------------------------------------

// utilizando o split() que corta a String em uma lista
const nomes = 'Gessica,Megui,Gabriel'

console.log(nomes.split(","));



 
// Números
const numero = 5;

console.log(numero);

// toString()  tranforma o numero que é int em uma String
console.log(numero.toString());
console.log(typeof numero.toString());




// Booleanos
false
true

console.log(2 == 3);
console.log(2 == 2);




// Null & Undefined

// isso quer dizer que o x não tem nenhum valor, como se o x fosse vazio
const x = null;


// é como se a variável não tivesse sido definida ainda. Como se eu disse para o JavaScript "cara eu não sei o que vou colocar auqi dentro"
const y = undefined;




// temos um tipo de variável chamada lista, onde conseguimos guardar varios valores dentro de uma lista
const lista = [1, 2,3,4,5,6,7,8,]

// e temos os objetos
const objetos = {nome: "Gessica", numero: 1,}