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
function isValid() {
   let valorInput = crediCard.value;
   console.log(valorInput, typeof valorInput)
    
   //transformar valor em array
   let arrayCardNumber = function(num){
    return Array.from(num).reverse() //.join('') junta os elementos do array, usar no final
   }
   
  //variável para guardar a os valores em array
  let arrayCard = arrayCardNumber(valorInput);
  console.log(arrayCard)

  //Laço do Algoritmo de Luhn [CORRIGIR] if esta(va) funcionando com string, corrigir para number
  for (let i=0; i<arrayCard.length; i++) {
     
      let cardNumber = arrayCard.map(Number) //map chama a func. callback dos elementos da array, ignora valores NaN
      let index = arrayCard[cardNumber]
      console.log(index, typeof index, typeof cardNumber) //está percorrendo a array
    
      if (index % 2 == 1){
         /*(parseInt(i))*2
         //alert("funcionou")
         */
         console.log(index, typeof index)
      }
   }
}
