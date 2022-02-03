import validator from './validator.js';

console.log(validator);
//Elementos do HTML - botão (const escopo global)
const button = document.getElementById("button"); //variável do botão para guardar os dados recebidos

function algoritimoLuhn() {

    let crediCard = document.getElementById("crediCard").value //crediCard busca a string inserida pelo usuário
    let callingValidator = validator.isValid(crediCard)
    let validationOnScreen = document.getElementById("validation")
    if (callingValidator === true) {
        validationOnScreen.textContent = "Cartão Válido"
    } else {
        validationOnScreen.textContent = "Cartão Inválido"
    }
}
//Eventos on Click
button.addEventListener("click", algoritimoLuhn) //inicia o algoritmo de Luhn


//4083952015263 - true
//79927398713 - true
//1234567890 - false








