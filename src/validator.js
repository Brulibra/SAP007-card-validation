const validator = {
  // ...
};

export default validator;

//Elementos do HTML
let crediCard = document.getElementById("crediCard"); //crediCard busca a string inserida pelo usuário
let button = document.getElementById("button"); //variável do botão para guardar os dados recebidos, nunca chamada...

//Eventos on Click
document.getElementById("button").addEventListener("click",crediCardNumber) //envia informações inseridas pelo usuário

//Recupera e converte de string para número
function crediCardNumber() {
  let input = crediCard.value;
  let stringToNumber = parseInt(input,10);
  console.log(input, stringToNumber)
}



