
const validator = {

   //Recupera dados inseridos pelo usuário (let escopo local)
   isValid: function (creditCardNumber) {

      //transformar valor em array
      let arrayCardNumber = function (num) {
         return Array.from(num).reverse()
      }

      //variável para guardar a os valores em array
      let arrayCard = arrayCardNumber(creditCardNumber);

      let totalValue = 0

      //Laço do Algoritmo de Luhn 
      for (let i = 0; i < arrayCard.length; i++) {

         let numCard = parseInt(arrayCard[i]) //array convertido p/ num 

         if (i % 2 != 0) {
            let numMultiply = numCard * 2 // multiplica por 2 nº da posição par


            if (numMultiply > 9) {
               numMultiply = numMultiply - 9
               totalValue = totalValue + numMultiply

               //console.log("entrou no if")

            } else {
               totalValue = totalValue + numMultiply
            }
         } else {
            totalValue = totalValue + numCard
         }
      } if (totalValue % 10 === 0) {
         return true

      } else {
         return false
      }
   },
   maskify: function (creditCardNumber) {

      return creditCardNumber.replace(/\d(?=\d{4})/g, "#") //parâmetros "/\d(?=\d{4})/g"

   }
}

export default validator

/*Explanation:

--> This reges uses a positive lookahead (?=\d{4}) which means match should be followed by 4 digits.
--> \d matches a single digit with above lookahead condition and replaces that by #

from stack overflow
*/