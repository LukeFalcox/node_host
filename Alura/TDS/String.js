//Tipo String
const texto = "Olá, mundo"
const texto2 = 'Olá, lindo'
const senha = "SenhaSuperSegura456!"
//Tudo que tiver em aspas sera considerados strings
const StringdeNumeros = "34567";
//CASO POR ALGUM MOTIVO MILAGROSO voce tenha que fazer uma citação voce deve usar aspas simp-les no começo e aspas duplas depois para o js enteder que é uma citação ou virse e versa
const citacao = 'O leo disse "oi"'
console.log(citacao)

// concatenação (+)

const cont1 = "Meu Nome é ";
const nome = "Israel";
console.log(cont1 + nome)

//Coisas Que podem ser realizadas com Javascript

const cidade = "belo horizonte"
const input = "Belo Horizonte"

console.log(cidade == input);

const inputMinusculo = input.toLowerCase();

console.log(cidade === input);

const senha2 = "minhaSenha123";
console.log(senha2.length)

//template string OU template literal: Com a sintaxe de Template Literals podemos substituir as aspas pelo caractere ` permitindo quebrar o texto em várias linhas:

// const texta = "Ciclo novo, novas caras. O técnico Tite fez jus à expectativa
// de novidades na seleção brasileira e divulgou a primeira convocação depois
// ..."
// const texta = `Ciclo novo, novas caras. O técnico Tite fez jus à expectativa
// de novidades na seleção brasileira e divulgou a primeira convocação depois
// ...`

//    ^
//    |
// Desbloquei o codigo acima parea verificar

//camelCase: Inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula.
//snake_case: Os espaços são substituídos pelo caractere _ (underline), com todas as palavras em letra minúscula.
//kebab-case: Similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: minha-var ou senha-do-usuario.
//PascalCase: Similar ao CamelCase, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: MinhaVar ou SenhaDoCliente.