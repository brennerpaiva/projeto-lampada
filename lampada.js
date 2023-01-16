const lamp = document.getElementById('lamp');
const button = document.getElementById('lampButton');


function lampBroke() {
    lamp.src = 'imagens/quebrada.jpg'
}

function verifyLamp () {
    return lamp.src.indexOf ('quebrada') > -1
}

function verifyturnOn () {
     return lamp.src.indexOf('ligada') > -1
}

function verifyturnOff () {
    return lamp.src.indexOf('desligada') > -1
}


function onOff (){
    if (!verifyLamp() && verifyturnOff()){
        lamp.src = 'imagens/ligada.jpg'
    } else if (!verifyLamp() && verifyturnOn()) {
        lamp.src = 'imagens/desligada.jpg'
    }
}


// function lampOn() {
//     if (!verifyLamp() && !verifyturnOff){ 
//     lamp.src = 'imagens/ligada.jpg'; 
//     button.textContent = 'Desligar';
//     }
// }

// function lampOff() {
//     if (!verifyLamp() &&  !verifyturnOn()){
//     lamp.src = 'imagens/desligada.jpg'
//     button.textContent = 'Ligar';
//     }
// }


// button.addEventListener('click', lampOn);
// button.addEventListener('click', lampOff);
// //lamp.addEventListener('mouseover', lampOn);
// //lamp.addEventListener('mouseleave', lampOff);
button.addEventListener('click', onOff);
lamp.addEventListener('dblclick', lampBroke)