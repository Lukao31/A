const frm = document.querySelector("form")      // Obtém os elementos da página
const resp = document.querySelector("#outResp")


frm.addEventListener("submit", (e) => {     // Escuta o evento submit do form
    e.preventDefault()                      // Evita o envio do formulário

    let numChin = Number(frm.inNumero.value)  // Obtém o número inserido no campo Nº de Chinchilas
    const numAnos = Number(frm.inAnos.value)    // Obtém o número inserido no campo Nº de Anos

    
        if (numChin < 2) {                          // condição para que se o número for menor que 2 de erro
            alert("Número inicial deve ser >= 2");  
            return;
            }

    let saida = `1º ano: ${numChin} Chinchilas\n`   // Declaração do primeiro ano das Chinchilas


    for (let i = 2; i <= numAnos; i++) {            // Laço de repetição para triplicar após o segundo ano
        numChin *= 3
       saida += `${i}º ano: ${numChin} Chinchilas\n`
    }

    resp.innerText = saida

    
})