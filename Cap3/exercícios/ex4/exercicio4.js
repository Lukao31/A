function ladosTriangulo() {
    // Cria uma referência aos elementos da página
    let inLadoA = document.getElementById("inLadoA")
    let inLadoB = document.getElementById("inLadoB")
    let inLadoC = document.getElementById("inLadoC")
    let outResposta1 = document.getElementById("outResposta1")
    let outResposta2 = document.getElementById("outResposta2")

    // Obtém os valores dos campos
    let ladoA = Number(inLadoA.value)
    let ladoB = Number(inLadoB.value)
    let ladoC = Number(inLadoC.value)

    // Operação Lados do Triângulo
    if(ladoA > ladoB + ladoC) {
        outResposta1.textContent = "Lados não podem formar um Triângulo"
        outResposta2.textContent = "Não foi possível formar um Triângulo"
    } else if(ladoA != ladoB + ladoC) {
        outResposta1.textContent = "Lados podem formar um Triângulo"
        outResposta2.textContent = "Triângulo Tipo: Escaleno"
    }   
    if(ladoA == ladoB && ladoA == ladoC) {
        outResposta1.textContent = "Lados podem formar um Triângulo"
        outResposta2.textContent = "Triângulo Tipo: Equilátero"
    } else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC || ladoC == ladoB) {
        outResposta1.textContent = "Lados podem formar um Triângulo"
        outResposta2.textContent = "Triângulo Tipo: Isósceles"
    }
}