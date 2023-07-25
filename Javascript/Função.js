// //Começo função : é uma definição de codigo que pode ser executada uma unica vez executando tudo que há dentro dela
// startProgram();

// function startProgram() {
//   let userName = "Bro";
//   let age = 21;

//   happyBirthday(userName, age);
// }

// function happyBirthday(username, age) {
//   console.log("Happy Birthday tou you");
//   console.log("Happy Birthday tou you");
//   console.log("Happy Birthday dear", username);
//   console.log("Happy Birthday tou you");
//   console.log("You are", age,"years old");
//   return username
// }
// // return : Pelo que sei a variavel area ira retornar o valor de result
// let area;
// let width;
// let heigth;

// width = window.prompt("Enter width");
// heigth = windo.prompt("Enter heigth")

// area = getArea(width, heigth)

// console.log(area);

// function getArea(width, heigth) {
//   let result = width * heigth
//   return result
// }
// //array
// let fruit = ["apple", "orange", "banana",];

// fruits[2] = "coconout" 

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])

// //
// sum(2,3, displayConsole())

// function sum(x,y, callback) {
//   let result = x + y
//   callback(result)
// }

// function displayConsole(output) {
//   console.log(output)
// }
/*
Função: trecho de codigo que só é executado quando é chamado

  Função Void (vazia)
  Função com Parametro(s)
  Função Return
  Função Arrow

  Aviso: Tente fazer com que sua ação tenha uma ação principal
    Por exemplo:
          Crie uma função apenas para somar
          Outra para mutiplicar
          e para dividir
  Nao tente criar uma função que faz tudo
*/


//Função vazia
let valor = 20;
function incrementa() {
  console.log("Estou dentro da função")
  valor = valor + 30 // O obejetivo aqui é so haver uma alteração no codigo e só fazer isso
}

incrementa() // invocando a função
console.log(valor)


//Função com Parametro(s)

let nome = "Falco"
function mostraNome(Nome) {
  console.log(Nome)
}
mostraNome(nome);
mostraNome("Matheus");

function soma(Primeironumero, Segundonumero){
 const somadosnumeros =  Primeironumero + Segundonumero
 console.log(somadosnumeros)
}
soma(10,4);
soma(6,5)
//Seguinte esse tipo de função é onde o parametro dela recebe o valor e com isso existe varias formas de muda-la

//Função Return
function carros(Marca,Ano,Tipo) {
  return "["+Marca+"]","["+Ano+"]","["+Tipo+"]"
}
const carro = carros("Volksvagen",1999,"Manual")
const carro2 = carros("Ford",2010,"Automatico")
console.log(carro)
console.log(carro2)
//Essa função funciona da seguinte forma: Envia os dados, faz oque foi pedida e (return) retorna ovalor guardando o valor em uma variavel 

//Arrow Function = è um afunção simplificada

const multi = (n1,n2) => {
  const mult = n1 + n2
  return mult
}

const multiplicação = multi(2,9)

console.log(multipliicação)