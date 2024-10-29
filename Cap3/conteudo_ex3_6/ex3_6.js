function calcularRaiz() {
    // Cria uma referência aos elementos da página
    var inNumero = document.getElementById("inNumero")
    var outResposta = document.getElementById("outResposta")

    var numero = Number(inNumero.value) // Obtém conteúdo  do campo inNumero

    // Se não preencheu ou Not-a-Number (NaN)
    if (numero === 0 || isNaN(numero)) {
        alert("Informe um número válido...") // Exibe alerta
        inNumero.focus() // Posiciona no campo inNumero
        return // Retorna
    }

    var raiz = Math.sqrt(numero) // Calcula a Raíz quadrada do número

    // Se o valor da variável raíz igual a este valor arredondado para baixo...
    if(raiz == Math.floor(raiz)) {
        outResposta.textContent = "Raíz: " + raiz // Mostra a raíz
    } else {
        // Se não, exibe a mensagem indicando que não há raíz exata
        outResposta.textContent = "Não há raíz exata para " + numero
    }
}

// Cria referência ao elemento btExibir e registra o evento que irá carregar a function
var btExibir = document.getElementById("btExibir")
btExibir.addEventListener("click", calcularRaiz)