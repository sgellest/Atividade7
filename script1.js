//Informe um valor em reais e mostre  com o formato da especificada moeda. Use const para definir as cotações.
//O valor em dólar (cotação: R$ 5.20)
//O valor em euro (cotação: R$ 5.70)

let valor = 6.50

const cotacaoDolar = 5.20
const cotacaoEuro = 5.70

let valorDolar = valor*cotacaoDolar
let valorEuro = valor*cotacaoEuro

console.log("O valor em dólar é:", valorDolar.toLocaleString (`en-US`, { style: "currency", currency: "USD"}))
console.log("O valor em euro é:", valorEuro.toLocaleString (`en-GB`, { style: "currency", currency: "EUR"}))