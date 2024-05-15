/**
 * fundamentos da poo
 * ecapsulamento
 * @author Pedra
 */

class user {
    //atrbutos
    constructor(login, senha) {
        this.login = login
        //encapsulamento
        let _senha = senha
        this.getSenha = () => _senha
        this.getSenha = (novaSenha) => _senha = novaSenha

    }
    // açoes(metodos)
    logar() {
        console.log("__________________")
        console.log(`Usuario: ${this.login}`)
        console.log(`Senha: ${this.getSenha}`)
        if(this.login === "admin" && this.getSenha() === "123456") {
            console.log("usuario autenticado")
        } else {
            console.log("usuario e/ou senha incorreta")
        }
    }
}

//siastema
console.clear()
const user1 = new user("admin","123")
user1.logar()
//usando o metodo para setar senha
user1.setSenha("123456")
user1.logar()