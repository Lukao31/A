const prompt = require("prompt-sync")()
const valor = Number(prompt("Valor R$: "))      // Lê o valor do Carnet ...
const num = Number(prompt("Nº de Parcelas: "))  // e número de parcelas
const valorParcelas = Math.floor(valor / num)   // Calcula o valor sem decimais
const valorFinal = valorParcelas + (valor % num) // Calcula a parcela final
for (let i = 1; i < num; i++) {                 // Enquanto i < num
    console.log(`${i}ª parcela: R$ ${valorParcelas.toFixed(2)}`)
}
console.log(`${num}ª parcela: R$ ${valorFinal.toFixed(2)}`) // Última parcela
