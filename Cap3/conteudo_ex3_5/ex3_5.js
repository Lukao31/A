function calcularFuso() {
    // Cria uma referência aos elementos da página
    var inHoraBrasil = document.getElementById("inHoraBrasil")
    var outHoraFranca = document.getElementById("outHoraFranca")

    // Obtém e converte o conteúdo do campo inHoraBrasil
    var horaBrasil = Number(inHoraBrasil.value)

    // Se não preencheu ou Not-a-Number (NaN)
    if (inHoraBrasil.value == "" || isNaN(horaBrasil)) {
        alert("Informe a hora no Brasil corretamente") // Exibe alerta
        inHoraBrasil.focus() // Posiciona em inHoraBrasil
        return
    }

    var horaFranca = horaBrasil + 5 // Calcula o horário na França

    // Se passar das 24 horas na França ...
    if (horaFranca > 24) {
        horaFranca = horaFranca - 24 // ... Subtrai 24
    }
    // Exibe resposta (altera conteúdo do elemento outHoraFranca)
    outHoraFranca.textContent = "Hora na França: " + horaFranca.toFixed(2)
}

// Cria uma referência ao elemento btExibir e registra evento associado a function
var btExibir = document.getElementById("btExibir")
btExibir.addEventListener("click", calcularFuso)