const frm = document.querySelector("form")  // Obtém os elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {     // "Escuta" o evento submit do form
    e.preventDefault()      // Evita o envio do form
    const num = Number(frm.inNumero.value)      // Obtém o número informado
    let temDivisor = 0    // Declara e inicializa a variável tipo flag

    for (let i = 2; i <= num / 2; i++) {    // Percorre todos os possíveis divisores de num
        if (num % i == 0) {     // Verifica se tem um divisor
            temDivisor = 1      // Muda o flag
            break               // Sai da repetição
        }
    }

    if (num > 1 && !temDivisor) {    // Se num > 1 e não possui divisor
        resp.innerText = `${num} É primo`
    } else {
        resp.innerText = `${num} Não é primo`
    }
})