const letras = ["A","B","C","D"]  // Declara e define conteúdo inicial do vetor
const letras2 = letras.slice(-2)  // Obtém as 2 últimas letras
const letras3 = letras.slice(0, -1) // Obtém o ínicio até final, exceto a última
console.log(letras)                // ['A' ,'B' ,'C' ,'D']
console.log(letras2)               // ['C' ,'D']
console.log(letras3)               // ['A' ,'B' ,'C']

const retira = letras.splice(2, 1)  // Remove a partir da posição 2, 1 elemento
console.log(letras)                 // ['A' ,'B' ,'D']
console.log(retira)                 // ['C']
