/**
 * Tipagem dinamica 
 * constante de variaveis
 */

console.clear()
console.log("STRINGS_________________")
let nome = "Pedro"
console.log(nome)
console.log(typeof(nome))
nome = "pedrinho"
console.log(nome)
console.log(nome.replace("pe","dro"))
//concatenação
console.log("Professor: " + nome)
console.log(`Professor: ${nome}`)

console.log("NUMBERS_________________")
let peso = 62
let altura = 1.65
console.log(typeof (peso))
console.log(typeof (altura))
console.log(Number.isInteger (peso))
console.log(Number.isInteger (altura))
let imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`)

console.log("BOOLEANS_________________")
let sw = true
console.log(typeof(sw))
console.log(`chave: ${sw}`)

// ATENÇÃO !!!
console.log(10 / 0)
console.log("3" + 2)
console.log("3" - 2)
console.log("3" * 2)
console.log("3" / 2)
console.log("3x" - 2)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)



