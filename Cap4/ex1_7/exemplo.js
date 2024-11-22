const frm = document.querySelector("form")  // Obtém os elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {     // Escuta o evento submit do form
    e.preventDefault()                      // Evita o envio do form
    const num = Number(frm.inNumero.value)  // Obtém o número informado
    let estrelas = ""   // Variável que irá concatenar as estrelas / traços
    for (let i = 1; i <= num; i++) {        // Cria o laço de repetição de 1 até num
        if (i % 2 == 1) {
            estrelas = estrelas + "*"       // Na posição ímpar do i: *
        } else {
            estrelas = estrelas + "-"       // Na posição par do i: -
        }
    }
    resp.innerText = estrelas               // Exibe as estrelas
})