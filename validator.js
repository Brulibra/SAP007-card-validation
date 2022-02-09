
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

               //console.log("entrou no if")

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
         
      //guardar string dos primeiros dígitos
      let maskingNumbers = crediCard.substr(0, crediCard.length)

      for (let i= 0; i < maskingNumbers; i++){
         let maskOnScreen = maskingNumbers.replace(/\d(?=\d{4})/g, "#") //parâmetros "/\d(?=\d{4})/g" em stack overflow
         return maskOnScreen
      }
      return
     
   }
}

export default validator

/*Explanation:

--> This reges uses a positive lookahead (?=\d{4}) which means match should be followed by 4 digits.
--> \d matches a single digit with above lookahead condition and replaces that by #
*/