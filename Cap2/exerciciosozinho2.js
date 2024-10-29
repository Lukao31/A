// Cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("#outResp1")

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const reais = Number(frm.inReais.value)
    const tempoUso = Number(frm.inTempo.value)
    const minutos = 15
    
    resp.innerText = `Valor a Pagar R$: ${(Math.ceil(tempoUso / minutos) * reais).toFixed(2)}`
                                        
    e.preventDefault()
})