/*
@author PEDRO
*/

let nota1, nota2, nota3, nota4


function calcular() {
    nota1 = Number(frmMedia.txtn1.value.replace(",", "."))
    nota2 = Number(frmMedia.txtn2.value.replace(",", "."))
    nota3 = Number(frmMedia.txtn3.value.replace(",", "."))
    nota4 = Number(frmMedia.txtn4.value.replace(",", "."))

    const resultado = (nota1 + nota2 + nota3 + nota4) / 4

    if (frmMedia.txtn1.value === "") {
        alert("Preencha o valor da nota")
    } else if (frmMedia.txtn2.value === "") {
        alert("Preencha o valor da nota")
    } else if (frmMedia.txtn3.value === "") {
        alert("Preencha o valor da nota")
    } else if (frmMedia.txtn4.value === "") {
        alert("Preencha o valor da nota")
    }else {
        if(resultado < 4 ) {
            document.getElementById('status').src = "./img/reprovado.jpg"
            alert(`A média do aluno é ${resultado}, ele está reprovado!`)
        }else if (resultado >= 7){
            document.getElementById('status').src = "./img/aprovado.jpg"
            alert(`A média do aluno é ${resultado}, ele está aprovado!`)
        }else {
            document.getElementById('status').src = "./img/recuperacao.jpg"
            alert(`A média do aluno é ${resultado}, ele está de recuperação!`)
        }
    }
}