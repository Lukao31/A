const readlineSync = require("readline-sync")
const produto = readlineSync.question("Produto: ")     // Lê o nome do produto e ...
const num = Number(readlineSync.question("Nº de Etiquetas: "))     // Quantidade de etiquetas
// Cria um laço de repetição até num/2 (pois imprime 2 etiquetas por linha)
for (let i = 1; i <= num / 2; i++) {
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
}
if (num % 2 == 1) {     // Se quantidade solicitada de etiquetas for ímpar...
    console.log(produto)       // Imprime mais uma etiqueta
}