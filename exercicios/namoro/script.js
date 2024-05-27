document.getElementById("pedidoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var nome = document.getElementById("nome").value;
    var nomeParceiro = document.getElementById("nomeParceiro").value;
    var mensagem = document.getElementById("mensagem").value;
    var resposta = document.querySelector('input[name="resposta"]:checked').value;

    var respostaDiv = document.getElementById("resposta");
    if (resposta === "sim") {
        respostaDiv.innerHTML = `<p>${nome}, você gostaria de namorar ${nomeParceiro}?</p><p>${mensagem}</p><p>Resposta: Sim, eu aceito!</p>`;
    } else {
        respostaDiv.innerHTML = `<p>${nome}, você gostaria de namorar ${nomeParceiro}?</p><p>${mensagem}</p><p>Resposta: Não, desculpe.</p>`;
    }
});
