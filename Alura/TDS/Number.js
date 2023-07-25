//TDS = Tipos De Dados

// Tipo Number 
// Seus operadores + - * /
// + significa soma
// - significa subtração
// * significa multiplicação
//  significa divisão
const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operarcaoMat = primeiroNumero + segundoNumero ;
const operarcaoMat2 = primeiroNumero - segundoNumero ;
const operarcaoMat3 = primeiroNumero * segundoNumero ;
const operarcaoMat4 =  primeiroNumero / segundoNumero ;

console.log(operarcaoMat)
console.log(operarcaoMat2)
console.log(operarcaoMat3)
console.log(operarcaoMat4)
console.log("=======")
//ponto flutuante =sao valores com valores decimais

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemzZero = .5;

const OpercomPontoFlutuante = pontoFlutuanteSemzZero / numeroPontoFlutuante;

console.log(OpercomPontoFlutuante);
console.log("=======")
//NaN = Not a Number => Sao coisas que nao sao numeros

var a = 10
var b = 0
console.log(a/b) // Infinity

var a = 0
var b = 0
console.log(a/b) // Vai Retonar NaN Pois isso é um caso especial
console.log("=======")
//Se voce quiser ordenar Numeros e Strings basta criar listas e colocar a função sort
//Essa função ordenará as coisas
//Dica: O Vscode ja muda o codigo assim que a função é colocada
var lista = [1,8,5,2,6]
lista.sort();
console.log(lista)

console.log("=======")


var n1 = 3;
var n2 = 4;
var contl = n1*3;
var op = (n1 ** n2) + n1 * n2 /2 * 22  - (n1 * 2 / 0,5);
console.log(op)
//Caso voce queira arredondar um float voce pofe usar uma funçao chamada Math.round()
//Existe tambem a funçao toFixed() que arredonda o numero para cima 
//outra coisa tambem  é  a função chamada toLocaleString() que converte o numero para uma sring,ja trtando a questao do arrendondamento e convertendo para a moeda do país que queremos
//Math.ceil() que retorna o maior número inteiro que é maior que o número passado, por exemplo Math.ceil(11.123), o valor fica 12
//Math.floor() que retorna o menor número inteiro que é menor que o número passado, por exemplo Math.floor(11.789), o valor fica 11