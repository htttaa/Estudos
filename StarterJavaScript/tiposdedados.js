/*

String
* Cadeia de caracteres

"" // aspas duplas(se dentro do texto for utilizado aspas duplas, utilizar aspas simples para identificar o texto 'Olá "tudo bem" ')
'' // aspas simples (se dentro do texto for utilizado aspas simples, utilizar aspas duplas para identificar o texto "Olá 'tudo bem' ")
`` // template literals ou template strings (posso utilizar dentro do texto "" e '', e pode ter quebra de linha, e pode utilizar expressões de linguagem dentro dela (interpolação))

*/

console.log('Mayk')

/*
 Number
  * números
    33 // inteiros (pode ser positivo e negativo)
    12.5 // reais - float
    NaN // Not a number
    Infinity // infinito
*/

console.log(33) // pode ocorrer uma expressão aqui
console.log(33 * 12.5) // expressão
console.log(33 * "ola") // NaN
console.log(33 * Infinity) // Booleano: falso
console.log(Infinity) // infinito não é tão comum (precisa ser I maiúsculo)

/* 
    Boolean
      * Booleano
        somente 2 valores
        True // verdadeiro
        False // falso

    Necessário para realizar as lógicas de programação
*/

/* 
    * Undefined
        Indefinido
        Não existe

    * Null
        Nulo
        Objeto que não há nada dentro
        Diferente de indefinido
        Existe
*/

/* 
    * Object (dado estrutural)
        Objeto
        Propriedades / atributos
        Funcionalidades / Métodos
    { propriedade: "valor" }
*/

console.log({
    name: "Agatha", 
    Idade: 19,
    andar: function() {
        console.log('Andar')
    }
})

/*
    * Array (Vetores)
        Uma lista
        Agrupamento de dados
    ["Agatha", 19, andar]
*/

console.log([Agatha, 19, andar])

