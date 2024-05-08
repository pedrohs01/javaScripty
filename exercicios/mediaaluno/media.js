/**
 * @author Pedro
 */

let nota1, nota2, nota3, nota4, media

function calcular() {
    nota1 = Number(frmMedia.txtn1.value)
    nota2 = Number(frmMedia.txtn2.value)
    nota3 = Number(frmMedia.txtn3.value)
    nota4 = Number(frmMedia.txtn4.value)

    media = (nota1 + nota2 + nota3 + nota4) / 4

    frmMedia.txtmedia.value = media.toFixed(1)
    if (media < 4) {
        frmMedia.txtmedia.txtstatus.value = "reprovado"
    } else if (media >= 7) {
        frmMedia.txtmedia.txtstatus.value = "aprovado"
    } else {
        frmMedia.txtmedia.txtstatus.value = "recuperacao"
    }
}