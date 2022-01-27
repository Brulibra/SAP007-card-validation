import validator from './validator.js';

console.log(validator);

//Elementos HTML
let crediCard = document.getElementById("crediCard"); //crediCard busca a string inserida pelo usuário
let button = document.getElementById("button"); //variável do botão para guardar os dados recebidos

//Eventos on Click
document.getElementById("button").addEventListener("click",crediCardNumber) //envia informações inseridas pelo usiário
//document.getElementById("button").addEventListener("click",printOnScreen) //printar resultado na tela

function crediCardNumber() {
    let input = crediCard.value;
    console.log(input)
}

/*function printOnScreen(crediCard) {
    document.write(`<h2>` + `${crediCard}` + `<h2>`) //inner HTML?? ("<h2>" + numbers + "<h2>") 
    }
    Por resolver ainda
    */










