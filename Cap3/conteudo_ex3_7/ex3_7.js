function calcularNotas() {
    // Cria referência aos elementos da página
    var inSaque = document.getElementById("inSaque")
    var outNotasCem = document.getElementById("outNotasCem")
    var outNotasCinquenta = document.getElementById("outNotasCinquenta")
    var outNotasDez = document.getElementById("outNotasDez")

    // Limpa mensagens (caso, segunda execução)
    outNotasCem.textContent = ""
    outNotasCinquenta.textContent = ""
    outNotasDez.textContent = ""

    var saque = Number(inSaque.value) // Converte conteúdo do campo inSaque

    // Se não preencheu ou Not-a-Number (NaN)
    if(saque === 0 || isNaN(saque)) {
        alert("Informe o valor do saque corretamente!") // Exibe alerta
        inSaque.focus() // Posiciona em inSaque
    }

    // Verifica se saque não é múltiplo de 10
    if(saque % 10 != 0) {
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)")
        inSaque.focus()
        return
    }

    // Calcula notas de 100, 50 e 10
    var notasCem = Math.floor(saque / 100)
    var resto = saque % 100
    var notasCinquenta = Math.floor(resto / 50)
    resto = resto % 50
    var notasDez = Math.floor(resto / 10)

    // Exibe as notas apenas se houver
    if (notasCem > 0) {
        outNotasCem.textContent = "Notas de 100: " + notasCem
    }
    if (notasCinquenta > 0) {
        outNotasCinquenta.textContent = "Notas de 50: " + notasCinquenta
    }
    if (notasDez > 0) {
        outNotasDez.textContent = "Notas de 10: " + notasDez
    }

}