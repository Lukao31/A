let num   // Declara a variável num com let, pois ela pode ser alterada
          // e será acessada fora do bloco do... while
do {   // Cria o laço de repetição ( faça... )
    num = Number(prompt("Número: "))  // Lê um número
    if (num == 0 || isNaN(num)) {  // Se num = 0 ou é inválido
        alert("Digite um número válido...")
    }
} while (num == 0 || isNaN(num))  // ... Enquanto num = 0 ou inválido
let pares = `Pares entre 1 e ${num} : `  // String que irá conter a resposta
for (let i = 2; i <= num; i = i + 2) {
    pares = pares + i + ", "
}
alert(pares) // Exibe a lista dos números pares