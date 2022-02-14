import validator from './validator.js';

//Elementos do HTML - botão (const escopo global)
const button = document.getElementById("button"); //variável do botão para guardar os dados recebidos

function algoritimoLuhn() {

    let creditCardNumber = document.getElementById("crediCard").value //crediCard busca a string inserida pelo usuário
    let callingValidator = validator.isValid(creditCardNumber)
    let callingMaskify = validator.maskify(creditCardNumber)

    let validationOnScreen = document.getElementById("validation")
        if (callingValidator === true) {
            validationOnScreen.textContent = "Comunicador nº " + callingMaskify + ".  Continue sua viagem tranquilo Mochileiro"
            
    } else {
        validationOnScreen.textContent = "Comunicador não encontrado! Verifique novamente suas informações"
    }
}
//Eventos on Click
button.addEventListener("click", algoritimoLuhn) //inicia o algoritmo de Luhn


//4083952015263 - true
//79927398713 - true
//1234567890 - false








