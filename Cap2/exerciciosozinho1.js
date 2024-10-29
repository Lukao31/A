// Cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")


// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) =>{
    const medicamento = frm.inMedicamento.value // obtém o nome digitado no form
    let preco = Number(frm.inPreco.value) // obtém o preço digitado no form
    preco = Math.floor(preco)

    const promocao = preco * 2 
    

    resp1.innerText = `Promoção de ${medicamento}`
    resp2.innerText = `Leve 2 por apenas R$: ${promocao}`

    e.preventDefault()
})