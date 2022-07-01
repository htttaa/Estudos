// function expression / function anonymous
const sum = function(number1, number2){   // sum = somar // função anônima, não tem nome. //number1, number2 = parâmetros da função (parameters)
    // let number1 = 2
    // let number2 = 3
    console.log(number1 + number2)
    total = number1 + number2
    return total //para retornar o valor total
}

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum (number1, number2)}`)
console.log(total) //pode ser executado ao final, como uma variavel criada pelo codigo, mas antes não pode

// function é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco ('banana', 'maça')
console.log(copo)  // retorna bananamaça pois misturou o conceito e colocou no local (copo)