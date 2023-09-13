//tudo oque colocar . é um objeto
let carro ={
    marca: "VM",
    peco:1000,
    andar: function(){
        return console.log('andou')
    }
}

console.log(carro.andar())//<- usa o () para ativr a função

function $(sla) {
    return{
        hide(){
            console.log('Esconder o '+ sla)
        }
    }
}
$("Henrique").hide()
//Explicando ele criou uma função chamada $ e dentro dela criou um objeto so que para acessar o objeto voce precisa colocar o nome da funnção .oque voce quer acessar
//Outro exemplo
function exemplo() {
    return{
        nome:"Luis",
        Sobrenome:"Falco",
        casal:"Bruno X Guilherme"
    }

}
console.log(exemplo().casal)

// function greet(){
//     return{
//         message:'Hello'
//     }
// }
// console.log(greet().message)

// function greet() {
//     return
//     {
//       message: 'Hello'
//     }
//   }
//   console.log(greet().message);

///A diferença é que as chaves deveriam estar conectadas no return para o codigo funcionar