// Cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)
    const promocao = preco * (3 - 0.50)
    const terceiroProduto = preco * 0.50

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${promocao.toFixed(2)}`
    resp2.innerText = `O 3º produto custa apenas R$: ${terceiroProduto.toFixed(2)}`

    e.preventDefault()
})