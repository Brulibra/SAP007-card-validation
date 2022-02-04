
const validator = {

   //Recupera dados inseridos pelo usuário (let escopo local)
   isValid: function (crediCard) {

      //transformar valor em array
      let arrayCardNumber = function (num) {
         return Array.from(num).reverse()
      }

      //variável para guardar a os valores em array
      let arrayCard = arrayCardNumber(crediCard);
      console.log(arrayCard)

      let totalValor = 0

      //Laço do Algoritmo de Luhn 
      for (let i = 0; i < arrayCard.length; i++) {

         let numCardi = parseInt(arrayCard[i]) //array convertido p/ num 

         if (i % 2 != 0) {
            let numMultiply = numCardi * 2 // multiplica por 2 nº da posição par


            if (numMultiply > 9) {
               numMultiply = numMultiply - 9
               totalValor = totalValor + numMultiply

               console.log("entrou no if")

            } else {
               totalValor = totalValor + numMultiply
            }
         } else {
            totalValor = totalValor + numCardi
         }
      } if (totalValor % 10 === 0) {
         return true

      } else {
         return false
      }
   },
   maskify: function (crediCard) {
      let last4Numbers = crediCard.substr(-4);
      let maskingNumbers = crediCard.substr(0, crediCard.length - 4)

      //guardar string para então fazer o replace
      let maskOnScreen = maskingNumbers.replace(maskingNumbers, "#") //está substituindo tudo por 1 #
      return maskOnScreen + last4Numbers
   }
}

export default validator
