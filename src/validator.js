
const validator = {
   
   //Recupera dados inseridos pelo usuário (let escopo local)
      isValid() {
      let valorInput = document.getElementById("crediCard")
      console.log(valorInput, typeof valorInput)
   
      //transformar valor em array
      let arrayCardNumber = function (num) {
         return Array.from(num).reverse() //.join('') junta os elementos do array, usar no final
      }
   
      //variável para guardar a os valores em array
      let arrayCard = arrayCardNumber(valorInput);
      console.log(arrayCard)
   
      //Laço do Algoritmo de Luhn 
      for (let i = 0; i < arrayCard.length; i++) {

         if (i % 2 == 1) {
            
            let numeroDaPosicaoPar = parseInt(arrayCard[i])
            let numeroMultiplicado = numeroDaPosicaoPar * 2
            console.log(typeof numeroMultiplicado)
   
            if (numeroMultiplicado > 9) {
               let numeroSomado = numeroMultiplicado - 9
               console.log(numeroSomado)
            }
         }
      }
   }
}
export default validator
