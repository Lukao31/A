const frm = document.querySelector("form")  // Obtém os elementos da página
const resp = document.querySelector("#outResp")

frm.addEventListener("submit", (e) => {     // Escuta o evento submit do form
    e.preventDefault()                      // Evita o envio do formulário
    const fruta = frm.inFruta.value         // Obtém o nome inserido no campo Fruta
    const num = Number(frm.inNumero.value)  // Obtém o número inserido no campo Números

    let resultado = ""
    
    for (let i = 0; i < num; i++) {
        resultado += fruta + " * "
    }
    resp.innerText = resultado
}) 

