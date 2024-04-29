/**
 * JS - Simulador lógicos
 * @author PEDRO
 */

let valor // valor racebido 1 acender 2 apagar 3 quebrar
let quebrada = false // estado da lâmpada

function simular(valor) {
    
    //quebrar a lampada
    if (valor === 3) {
        let beep = new Audio()
        beep.src = "./sound/glassbreaking.wav"
        beep.play()
        document.getElementById("lamp").src = "./img/broken.jpg"
        quebrada = true
    }
    
        
}