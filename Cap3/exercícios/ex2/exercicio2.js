function verificadorVelocidade() {
    // Cria uma referência aos elementos da página
    let inPermitida = document.getElementById("inPermitida")
    let inCondutor = document.getElementById("inCondutor")
    let outResposta = document.getElementById("outResposta")

    // Obtém o conteúdo dos campos
    let velocidadePermitida = Number(inPermitida.value)
    let velocidadeCondutor = Number(inCondutor.value)

    // Operação do Verificador de velocidade
    if(velocidadeCondutor > velocidadePermitida) {
        outResposta.textContent = "Situação: Você tomou multa, ande mais devagar!" 
    } 
    
    if(velocidadeCondutor <= velocidadePermitida) {
        outResposta.textContent = "Situação: Sem multas, continue assim!"
    }
    
}