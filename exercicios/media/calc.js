/*
@author PEDRO
*/

let n1, n2, n3, n4 
function calcular() {
    n1 = Number(frmflex.txtn1.value)   
    n2 = Number(frmflex.txtn2.value) 
    n3 = Number(frmflex.txtn3.value)
    n4 = Number(frmflex.txtn4.value)

    //validação de campos obrigatorio
    if (frmflex.txtn1.value === "") {
        alert("prencha o valor da n1")
        frmflex.txtn1.value.focus()
    } else if (frmflex.txtn2.value === "") {
        alert("prencha o valor da n2")
        frmflex.txtn2.value.focus()
    } else if (frmflex.txtn3.value === "") {
        alert("prencha o valor da n3")
        frmflex.txtn3.value.focus()
    } else if (frmflex.txtn4.value === "") {
        alert("prencha o valor da n4")
        frmflex.txtn4.value.focus() }
    
    }
