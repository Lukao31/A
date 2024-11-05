function parquimetro() {
    // Cria uma referência aos elementos da página
    let inValor = document.getElementById("inValor")
    let outResposta1 = document.getElementById("outResposta1")
    let outResposta2 = document.getElementById("outResposta2")

    // Obtém o conteúdo do campo
    let valor = Number(inValor.value)

    // Valores do Parquímetro
    let valor30min = 1.00
    let valor60min = 1.75
    let valor120min = 3.00

    // Operaçãa do troco
    let desconto1 = valor - valor30min
    let desconto2 = (valor - valor60min)
    let desconto3 = valor - valor120min

    // Operação do Parquímetro
    if(valor < valor30min) {
        console.error("Valor insuficiente")
        return
    }
     else if(valor <= valor30min) {
        outResposta1.textContent = "Tempo: 30 min"
        outResposta2.textContent = "Troco R$: " + desconto1
    }
    else if(valor >= valor60min) {
        outResposta1.textContent = "Tempo: 60 min"
        outResposta2.textContent = "Troco R$: " + desconto2
    } 
    if(valor >= valor120min) {
        outResposta1.textContent = "Tempo: 120 min"
        outResposta2.textContent = "Troco R$: " + desconto3
    }
}