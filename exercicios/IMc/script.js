function calcularIMC() {
    let idade = parseFloat(document.getElementById("idade").value);
    let genero = document.getElementById("genero").value;
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    if (isNaN(idade) || isNaN(altura) || isNaN(peso)) {
        document.getElementById("resultado").innerText = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    let imc = peso / (altura * altura);
    let resultado = "";

    if (genero === "masculino") {
        if (idade >= 18 && idade <= 24) {
            if (imc < 18.5) {
                resultado = "Abaixo do peso";
                document.getElementById('imagem').src="./img/magro.png"
            } else if (imc < 25) {
                resultado = "Peso normal";
                exibirImagem("normal.png");
            } else if (imc < 30) {
                resultado = "Sobrepeso";
                exibirImagem("sobrepeso-masculino.jpg");
            } else {
                resultado = "Obesidade";
                exibirImagem("obesidade-masculino.jpg");
            }
        } else {
            if (imc < 20.7) {
                resultado = "Abaixo do peso";
                exibirImagem("abaixo-peso-masculino.jpg");
            } else if (imc < 26.4) {
                resultado = "Peso normal";
                exibirImagem("peso-normal-masculino.jpg");
            } else if (imc < 27.8) {
                resultado = "Sobrepeso";
                exibirImagem("sobrepeso-masculino.jpg");
            } else {
                resultado = "Obesidade";
                exibirImagem("obesidade-masculino.jpg");
            }
        }
    } else {
        if (idade >= 18 && idade <= 24) {
            if (imc < 18.5) {
                resultado = "Abaixo do peso";
                exibirImagem("abaixo-peso-feminino.jpg");
            } else if (imc < 24) {
                resultado = "Peso normal";
                exibirImagem("peso-normal-feminino.jpg");
            } else if (imc < 29) {
                resultado = "Sobrepeso";
                exibirImagem("sobrepeso-feminino.jpg");
            } else {
                resultado = "Obesidade";
                exibirImagem("obesidade-feminino.jpg");
            }
        } else {
            if (imc < 19.1) {
                resultado = "Abaixo do peso";
                exibirImagem("abaixo-peso-feminino.jpg");
            } else if (imc < 25.8) {
                resultado = "Peso normal";
                exibirImagem("peso-normal-feminino.jpg");
            } else if (imc < 27.3) {
                resultado = "Sobrepeso";
                exibirImagem("sobrepeso-feminino.jpg");
            } else {
                resultado = "Obesidade";
                exibirImagem("obesidade-feminino.jpg");
            }
        }
    }

    document.getElementById("resultado").innerText = "Seu IMC é: " + imc.toFixed(2) + ". " + resultado;
}

function exibirImagem(src) {
    let imagemDiv = document.getElementById("imagem");
    imagemDiv.innerHTML = `<img src="${src}" alt="IMC Image">`;
}
