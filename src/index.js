import validator from './validator.js';

console.log(validator);

let crediCard = document.getElementById("crediCard") //crediCard é declarado mas nunca lido?
document.getElementById("button").addEventListener("click",crediCard)
document.getElementById("button").addEventListener("click",printScreen) //printar resultado na tela

function printScreen(crediCard) {
    document.write(`<h2>` + `${crediCard}` + `<h2>`) //inner HTML?? ("<h2>" + numbers + "<h2>")

    }










