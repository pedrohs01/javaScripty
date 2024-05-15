/**
 * estrutura de dados 
 * objetos
 * @author Pedro
 */

const funcionario1 = {}
console.log(typeof funcionario1)
//adicionar dados a estrutura (crud create)
funcionario1.nome = "José"
funcionario1.cargo = "Pro player pain"
funcionario1.email = "kaio@gmail.com"
funcionario1.salario = 5000
funcionario1.insta = "@linker"
// listar os dados da estrutura (crud read)
console.log(funcionario1)
console.log(funcionario1.cargo)
//modificar os dados da estrtura (crud update)
funcionario1.nome = "jose de assis"
console.log(funcionario1)
//excluir dados da estrutura 
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: "Camila",
    cargo: "fazer pastel",
    email: "pastel2121@gmial.com",
    salario: 1000
}

const endereco1 = {
    logradouro: "Bat Caverna",
    cidade: "Gothan",
    estado: "Nova Jersey"
}

console.log(endereco1)

const funcionario3 = {
    nome: "kaio",
    cargo: "fazeer pastel",
    email: "pasteel2121@gmial.com",
    salario: 1001,
    ...endereco1 // uniao de 2 estrutura
}

console.log(funcionario3)

const funcionario4 = {
    nome: "jao",
    cargo: "fazeer pastel carnr",
    email: "pasteel2121@fgmial.com",
    salario: 1401,
    ...endereco1 // uniao de 2 estrutura
}

console.log(funcionario4)

const funcionario5 = {
    nome: "naruto",
    cargo: "hokage",
    email: "ninjadafolha@gmail.com",
    salario: 1500,
    trasformacao: {
        versao: "mk1",
        manga: 500,
        poder: "rasegan"
    },
    suitUp: () => {
        console.log("🦊")
    }
}

console.log(funcionario5)
console.log(funcionario5.trasformacao.versao)
funcionario5.suitUp()