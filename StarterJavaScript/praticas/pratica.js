// 1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variável acima
console.log(typeof weight)

/* 3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (integer)
    * stars: Number (float)
    * isSubscribed: Boolean
*/
// let name = "Agatha"
// let age = 19
// let stars = 3.2
// let isSubscribed = true

/* 4. A variável student abaixo é de que tipo de dado? R: Object
   4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
   4.2 Mostre no console a seguinte mensagem: <name> de idade <age> pesa <weigth> kg.
    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

let student = {
    name: Agatha,
    weight: 65.4,
    age: 21
}; 
console.log(typeof student)


console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg `)

/* 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio*/

let students = [];

/* 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)*/

students = [student, joão]

// 7. Coloque no console o valor da posição zero do Array acima

console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do Array students

const joão = {
    name: joão,
    weight: 60.1,
    age: 22
}

students[1] = joão
console.log(students)

/* 9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, roda o código e veja se você acertou. (Undefined)
    console.log(a)
    var a = 1
*/

console.log(a) 
var a = 1 

