const prompt = require ("prompt-sync")() // Adiciona o pacote ao programa
const salario = Number(prompt("Salário R$: ")) // Lê os dados de entrada
const tempo = Number(prompt("Tempo (anos): "))
const quadrienios = Math.floor(tempo / 4) // Calcula quadriênios
const acrescimo = salario * quadrienios / 100 // E acréscimo
console.log(`Quadriênios: ${quadrienios}`) // Exibe as respostas
console.log(`Salário Final R$: ${(salario + acrescimo).toFixed(2)}`)