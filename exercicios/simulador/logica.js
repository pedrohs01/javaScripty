/**
 * JS - Simulador lógicos
 * @author PEDRO
 */

let valor // valor racebido 1 acender 2 apagar 3 quebrar
let quebrada = false // estado da lâmpada
let sw1 = false // cheves
let sw2 = false //chaves

let path = window.location.pathname // Obter o caminho da página
// alert(path)

function simular(valor) {
    //chaves
    if (valor === 1 && sw1 === false) {
        document.getElementById("sw1").src = "img/swon.png"
        sw1 = true
    } else if (valor === 1 && sw1 === true) {
        document.getElementById("sw1").src = "img/swoff.png"
        sw1 = false
    } else if (valor === 2 && sw2 === false) {
        document.getElementById("sw2").src = "img/swon.png"
        sw2 = true
    } else if (valor === 2 && sw2 === true) {
        document.getElementById("sw2").src = "img/swoff.png"
        sw2 = false
    }


    //quebrar a lampada
    if (valor === 3) {
        let beep = new Audio()
        beep.src = "./sound/glassbreaking.wav"
        beep.play()
        document.getElementById("lamp").src = "./img/broken.jpg"
        quebrada = true
    }
    
    //and 
    if (quebrada === false && path === "/exercicios/simulador/and.html") {
        if (sw1 === true && sw2 === true) {
            document.getElementById("lamp").src = "./img/on.jpg"
        } else {
            document.getElementById("lamp").src = "./img/off.jpg"  
        }
    }

    //or
    if (quebrada === false || path === "/exercicios/simulador/or.html") {
        if (sw1 === true && sw2 === true) {
            document.getElementById("lamp").src = "./img/on.jpg"
        } else {
            document.getElementById("lamp").src = "./img/off.jpg"  
        }
    }
    
    //not
    if (quebrada === false && path === "/exercicios/simulador/not.html") {
        if (!sw1) {
            document.getElementById("lamp").src = "./img/on.jpg"
        } else {
            document.getElementById("lamp").src = "./img/off.jpg"  
        } 
    }
        
}