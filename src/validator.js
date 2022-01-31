const validator = {
  // ...
};

export default validator;
//Elementos do HTML (const escopo global)
const crediCard = document.getElementById("crediCard"); //crediCard busca a string inserida pelo usuário
const button = document.getElementById("button"); //variável do botão para guardar os dados recebidos, nunca chamada...

//Eventos on Click
document.getElementById("button").addEventListener("click",isValid) //envia informações inseridas pelo usuário

//Recupera dados inseridos pelo usuário (let escopo local)
function isValid(value) {
   let valorInput = crediCard.value;
   let stringToNumber = parseInt(valorInput,10); //e converte de string para número
    console.log(stringToNumber)
    
   //slice -> dividir elementos antes de converter em array, talvez antes de converter em number
  
   //transformar valor em array
  let arrayCardNumber = function(num){
    return Array.from(num).reverse() //.join('') junta os elementos do array, usar no final
    }
   console.log(arrayCardNumber(stringToNumber)); 

  //variável para guardar a os valores em array
  let arrayCard = arrayCardNumber(stringToNumber);
  console.log(arrayCard)

  //Laço do Algorítimo de Luhn
  for (let i=0; i<arrayCard.length; i++) {
    let indice = arrayCard.indexOf(i !== -1 ); //percorre os indices da array?
    let array = arrayCard[indice];
       if (array % 2 == 1){
          alert("funcionou")
      }
   }
}
