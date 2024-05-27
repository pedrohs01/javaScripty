function calcularAutonomia() {
    var capacidade = parseFloat(document.getElementById("capacidade").value);
    var consumo = parseFloat(document.getElementById("consumo").value);

    if (capacidade && consumo) {
        var autonomia = capacidade / consumo;
        document.getElementById("resultado").innerText = "Autonomia do carro: " + autonomia.toFixed(2) + " km";
    } else {
        document.getElementById("resultado").innerText = "Por favor, preencha todos os campos.";
    }
}

function limparCampos() {
    document.getElementById("capacidade").value = "";
    document.getElementById("consumo").value = "";
    document.getElementById("resultado").innerText = "";
}
