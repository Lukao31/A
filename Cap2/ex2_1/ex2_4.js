// Cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value)  // obtém conteúdo dos campos
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo / 1000) * consumo // Calcula valor a ser pago
    resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}` // Exibe resposta

    e.preventDefault()  // Evita envio do form
})