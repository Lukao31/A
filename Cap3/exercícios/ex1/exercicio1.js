function parImpar() {
    // Cria uma referência aos elementos da página
    let inNumero = document.getElementById("inNumero")
    let outResposta = document.getElementById("outResposta")

    // Obtém o conteúdo do campo inNumero
    let numero = Number(inNumero.value)

    // Operação par ou ímpar
    if(numero % 2 === 0) {
        outResposta.textContent = "Resposta: " + numero + " é Par"
    }

    if(numero % 2 !== 0) {
        outResposta.textContent = "Resposta: " + numero + " é Ímpar"
    }
}