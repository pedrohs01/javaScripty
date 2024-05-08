/**
 * estudo das funçoes usando a sintaxe moderna da linguagem 
 * @author Pedro
 * @link https://pedro.com.br
 */

console.clear()

function hello() {
    console.log("hello fuction")
}

hello()
console.log(typeof hello)

const hello2 = function() {
    console.log("hello fuction assiggned")
}
hello2()
console.log(typeof hello2)

const hello3 = () => {
    console.log("hello arrow fuction assiggned")
}

hello3()
console.log(typeof hello3)

const hello4 = _=> console.log("hello arrow fuction assiggned simplified")

hello4()
console.log(typeof hello4)

// funcoes simoples com retorno
function somarS(num1, num2) {
    return console.log(num1 + num2)
}

somarS(2, 3)
console.log(typeof somarS)


let somarA = function(num1, num2) {
    return console.log(num1 + num2)
}

somarS(2, 3)
console.log(typeof somarA)

let somarAF = (num1, num2) => {
    return console.log(num1 + num2)
}

somarS(2, 3)
console.log(typeof somarAF)


let somarAFS = (num1, num2) => console.log(num1 + num2)


somarS(2, 3)
console.log(typeof somarAFS)
