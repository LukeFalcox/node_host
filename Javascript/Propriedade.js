//callback uma função que executada retorna outa função
const inserirNome = (callback) => {
    let name = 'Falco';
    callback(name)
}
const frase = (name2) =>{
    console.log("Nome:" + name2 ) 
}
inserirNome(frase)

//pelo oque entendi o inserir nome esta amrmazenado a frse que é outra função e quando o callback é chamado a função frase é executada recebendo o name
let data = [
    {name:"Luke", age:16, sallary:5420,driverLicense:false},
    {name:"Bonnie", age:16, sallary:6713,driverLicense:false},
    {name:"Helzexy", age:17, sallary:2034,driverLicense:true},
    {name:"Peidocapeid", age:17, sallary:10045,driverLicense:true},
    {name:"Guizao", age:16, sallary:3450,driverLicense:false},
]

//1- Propriedade .find(element => element > val), ele acha o primeiro elemento de um array que  atenda a condição (ele cria dentro dele uma arrow function)



const found = data.find((x) => x.age > 16)
console.log(found)

//Resumindo ele ve que foi o primeiro atender a condição e coloca na variavel
//1.1- Propriedade definida e dentro dela uma arrow function x recebe o valor do  array e verifica se o primeiro valor é mairo que 10 se nao for pula para o proximo e retorna o valor que for maior que 10




//2-Propriedade .map(element => element * val), essa propriedade modifica cada elemnto do array pela propriedade feita


const map = data.map((x) => x.sallary + 300)//aqui ele pega o x e faz uma mutiplicação e substitui oque estiver dentro do array

console.log(map)

//Resumindo ele faz uma modificação no array    ww

//3-Propriedade .filter(element => element * val), cria um novo array com os elemntos que forem aprovados

const filter = data.filter((x) => x.driverLicense === true)

console.log(filter)

//Resumindo se a condição for atendida o valor ira entra em um novo array 

//4-Propriedade .every(element => element * val),testa se todos os elementos do array passam pelo teste se todos os elemtos nao forem true o resultado ira da false ja se forem true ira da true; 

const every = data.every((x) => x >= 5000)

console.log(every)

//Resumindo retorna:True se tudo for true,se tiver algo em false retorna false

//Propriedade .forEach(), executa uma dada função em cada elemento de um array.


data.forEach((x) => console.log(x))

//Propriedade .forEach(), executa uma dada função em cada elemento de um array.