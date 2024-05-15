/**
 * @author Pedro
 */

let tot, desc, din, calc

function calcular() {
    tot = Number(frmPdv.txtTotal.value)
    desc = Number(frmPdv.txtPorcentagem.value)

    calc = (tot * desc) / 100

    frmPdv.txtDesconto.value = calc.toFixed(2)

    calc = tot - calc

    frmPdv.txtTotalDesconto.value = calc.toFixed(2)
}

function calculart() {
    din = Number(frmPdv.txtValorPago.value)
    
    calc = din - calc

    frmPdv.txtTroco.value = calc.toFixed(2)
}


