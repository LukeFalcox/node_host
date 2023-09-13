class Pessoa{
    // atributos = variveis ou cararcteristicas
    nome//instancia nome
    idade//instancia idade
    peso//instancia peso
    altura//instancia altura
    //metodos = funções ou comportamento
    //Aqui ele ria um construtor
    //O contrutor ira pegar os valore que estao sendo atribuidos pela variavel
    constructor (nome,idade,peso,altura){
        this.nome = nome 
        this.idade = idade 
        this.peso = peso 
        this.altura = altura
    }
     
    //Metodo contrutor
       
    }
    //O new serve para transforma em um construtor e assim fazer dele um objeto 
    //Aqui em baixo temos objetos vazios
    //coloque o ponteiro em cima de "Pessoa" voce vai notar que tem variavei vazias isso é o constructor
    let pessoa =  new Pessoa('Edson',40,100,1.58)
    let pessoa2 =  new Pessoa('Falco',16,77.6,1.78);
    //Pelo oque o cara do video disse é errado voce definir um objeto contrutor e depois definir oque as propriendade do objeto Pessoa vai receber...
    // pessoa.nome = "Falco"//errado..
    // pessoa.idade = 16//errado..
    // pessoa.peso = 79.9//errado..
    // pessoa2.nome = "Kaitoba"//errado..
    // pessoa2.idade = 17//errado..
    // pessoa2.peso = 65.5//errado..
    console.log(pessoa)
    console.log(pessoa2)