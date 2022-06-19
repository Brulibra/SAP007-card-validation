import validator from './validator.js';

const button = document.getElementById("button");

function validatorLogic() {

    const creditCardNumber = document.getElementById("crediCard").value

    const callingValidator = validator.isValid(creditCardNumber)
    const callingMaskify = validator.maskify(creditCardNumber)

    let validationOnScreen = document.getElementById("validation")
    if (callingValidator === true) {
        validationOnScreen.textContent = "Comunicador nº " + callingMaskify + ".  Continue sua viagem tranquilo Mochileiro"

    } else {
        validationOnScreen.textContent = "Comunicador não encontrado! A Tower 42 informa: em caso de furto ou dispositivo inválido, entre em contato com nossa central para checar suas informações."
    }
}

button.addEventListener("click", validatorLogic)


//4083952015263 - true
//79927398713 - true
//1234567890 - false








