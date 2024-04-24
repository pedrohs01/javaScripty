/**
 * APP flex
 * @author PEDRO
 */

let etanol, gasolina
function calcular() {
    etanol = Number(frmflex.txtetanol.value)   
    gasolina = Number(frmflex.txtgasolina.value) 
    //validação de campos obrigatorio
    if (frmflex.txtetanol.value === "") {
        alert("prencha o valor do etanol")
        frmflex.txtetanol.value.focus()
    } else if (frmflex.txtgasolina.value === "") {
        alert("prencha o valor do gasolina")
        frmflex.txtetanol.value.focus()
    } else {
        if (etanol < 0.7 * gasolina) {
            document.getElementById('status').src = "imgg/etanol.png"
        } else {
            document.getElementById('status').src = "imgg/gasolina.png"
        }
    }

    //console.log(etanol)
    //console.log(gasolina)
}

function limpar() {
    document.getElementById('status').src = "imgg/flex.png"
}