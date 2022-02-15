
const validator = {
   
   isValid: function (creditCardNumber) {

      let arrayCardNumber = function (num) {
         return Array.from(num).reverse()
      }
      
      let arrayCard = arrayCardNumber(creditCardNumber);

      let totalValue = 0

      //Laço do Algoritmo de Luhn 
      for (let i = 0; i < arrayCard.length; i++) {

         let numCard = parseInt(arrayCard[i])

         if (i % 2 != 0) {
            let numMultiply = numCard * 2


            if (numMultiply > 9) {
               numMultiply = numMultiply - 9
               totalValue = totalValue + numMultiply

               //console.log("entrou no if")

            } else {
               totalValue += numMultiply
            }
         } else {
            totalValue += numCard
         }
      } return totalValue % 10 === 0
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

NOTA: este parâmetro está reconhecendo apenas numbers, portanto o código não passa 
 em um dos testes unitários

*/