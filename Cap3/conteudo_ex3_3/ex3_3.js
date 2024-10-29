function calcularPeso() {
    // Cria referência aos elementos manipulados pela function
    var inNome = document.getElementById("inNome")
    var rbMasculino = document.getElementById("rbMasculino")
    var rbFeminino = document.getElementById("rbFeminino")
    var inAltura = document.getElementById("inAltura")
    var outResposta = document.getElementById("outResposta")

    // Obtém o conteúdo dos campos de edição da página
    var nome = inNome.value
    var masculino = rbMasculino.checked
    var feminino = rbFeminino.checked
    var altura = Number(inAltura.value)

    // Verifica se o nome foi preenchido e sexo selecionado
    if (nome == "" || (masculino == false && feminino == false)) {
        alert("Por favor, informe o nome e selecione o sexo...")
        inNome.focus() // Posiciona (joga o foco) no campo de edição
    inNome
        return
    }

    // Se masculino (significa se masculino == true)
    if (masculino) {
        var peso = 22 * Math.pow(altura, 2) // Math.pow eleva ao quadrado
    } else {
        var peso = 21 * Math.pow(altura, 2)
    }

    // Apresenta a resposta (altera o conteúdo da linha outResposta)
    outResposta.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + " kg"
}

// Cria referência ao elemento btCalcular e registra evento associado a calcular peso
var btResultado = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcularPeso)

function limparCampos() {
    // Recarrega a página
    location.reload()
    // Posiciona (joga o foco) no elemento inNome
    document.getElementById("inNome").focus()
}

var btLimpar = document.getElementById("btLimpar")
btLimpar.addEventListener("click", limparCampos)