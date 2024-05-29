/**
 * @author pedro
 */

const fs = require('fs')

async function criarArquivo() {
    let conteudo = "professor pedro\nexemplo de usos dos recursos async - await"
    await gravarArquivo('teste.txt', conteudo)
}

async function gravarArquivo(local, conteudo) {
    try {
        await fs.promises.writeFile(local, conteudo)
        console.log("Arquivo criado com sucesso")
    } catch (error) {
        console.log(error)
    }
}

criarArquivo()