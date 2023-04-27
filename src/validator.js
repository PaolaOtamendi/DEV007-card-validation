const validator = {
  isValid: function(creditCardNumber) {
  //Pasos para desarrollar el algoritmo de luhn
  //1 crear un array con los numeros de la tarjeta
    const cardArray = [];
    for (let i = 0; i< creditCardNumber.length; i++){
      cardArray.push(Number(creditCardNumber[i]));
    //console.log(creditCardNumber[i]);
    }
    //2 hacer el reverse con los numeros de la tarjeta
    const reversecadrArray = cardArray.reverse();
    console.log(reversecadrArray);
    //A todos los numeros pares del array se les debe multiplicar por dos
    for(let i = 0; i < reversecadrArray.length; i++){
      if(i % 2 !== 0){
        reversecadrArray[i] = reversecadrArray[i] * 2
        //A todos los numeros mayores a 10 se sumaran entre ellos    
        if(reversecadrArray[i] >= 10){
          const cadenaReverse = reversecadrArray[i].toString();
          reversecadrArray[i] = (parseInt(cadenaReverse[0])) + (parseInt(cadenaReverse[1]));
        }
      }
    }
    console.log(reversecadrArray);
    //Hacer la sumatoria de los digitos y sacar el residuo divido /10
    let sumatoria = 0;
    for(let i = 0; i < reversecadrArray.length; i++){
      sumatoria = reversecadrArray[i] + sumatoria;
    }
    console.log(sumatoria);
    if(sumatoria % 10 === 0){
      return true;
    //alert("Tu tarjeta es valida");
    }
    else
      return false; //alert("Tu tarjeta no es valida");
  }

  //Funcion maskify para enmascarar los numeros
  ,maskify: function(creditCardNumber){
    const fullcreditCard = creditCardNumber.toString();
    //if(fullcreditCard.length > 4){
    const menos4digitos = fullcreditCard.length -4;
    console.log(menos4digitos)
    const newfullcreditCard = fullcreditCard.slice(menos4digitos);
    console.log(newfullcreditCard)
    const finalCreditcard = newfullcreditCard.padStart(fullcreditCard.length,"#");
    console.log(finalCreditcard)
    return finalCreditcard;
  }
}
    
export default validator;
