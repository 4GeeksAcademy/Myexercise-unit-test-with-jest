// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = Math.round(valueInEuro * oneEuroIs.USD*100)/100;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yenes
    let valueInYen = Math.round(valueInDollar * oneEuroIs.JPY/oneEuroIs.USD*100)/100;
    // Retornamos el valor en yenes
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a libras
    let valueInPound = Math.round(valueInYen * oneEuroIs.GBP/oneEuroIs.JPY*100)/100;
    // Retornamos el valor en libras
    return valueInPound;
}


//suma
let sum = (a,b) => {
    return a + b
}




//registro de consola
console.log(sum(7,3));

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPound }
