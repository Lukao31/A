const frm = document.querySelector("form")  // Obtém os elementos da página
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let resposta = ""   // String com a resposta a ser exibida
let numContas = 0   // Inicializa o contador
let valTotal = 0    // e acumulador (variáveis globais)

frm.addEventListener("submit", (e) => {     // "Escuta" o evento submit do form
    e.preventDefault()  // Evita o envio do form

    const descricao = frm.inDescricao.value     // Obtém os dados da conta
    const valor = Number(frm.inValor.value)

    numContas++     // Adiciona valores ao contador e acumulador
    valTotal += valor   // Ou valTotal = valTotal + valor
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"
    resp1.innerText = `${resposta}--------------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.inDescricao.value = "" // Limpa os campos do form
    frm.inValor.value = ""
    frm.inDescricao.focus()    // Posiciona no campo inDescricao do form

})