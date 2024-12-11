const cidades = ["Pelotas"] // Declara e define conteúdo inicial do vetor

cidades.push("São Lourenço") // Adiciona cidade ao final do vetor
console.log(cidades)         // ['Pelotas', 'São Lourenço']

cidades.unshift("Porto Alegre") // Adiciona ao início e desloca os demais
console.log(cidades)        // ['Porto Alegre', 'Pelotas', 'São Lourenço']

const ultima = cidades.pop()    // Remove a última cidade do vetor
console.log(cidades)            // ['Porto Alegre', 'Pelotas']

const primeira = cidades.unshift() // Remove a primeira e "sobe" as demais
console.log(cidades)               // ['Pelotas']