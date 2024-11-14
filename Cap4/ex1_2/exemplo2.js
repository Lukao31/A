const frm = document.querySelector("form") // Obtém os elementos das páginas
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita o envio do form
    const numero = Number(frm.inNumero.value) // Obtém o conteúdo informado
    let resposta = `Entre ${numero} e 1: ${numero}`  // Já contém o 1ª Número
    for (let i = numero - 1; i > 0; i-- ) {  // Cria um for decrescente
        resposta = resposta + ", " + i  // Resposta acumula números (e vírgulas)
    }
    resp.innerText = resposta  // Exibe a resposta
})