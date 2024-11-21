alert("Digite 0 para sair")
do {
    const num = Number(prompt("Número: "))  // Lê o número
    if (num == 0 || isNaN(num)) {   // Se num = 0 ou inválido
        const sair = confirm("Confirma a saída?")  // Solicita a confirmação do usuário
        if (sair) {
            break   // Sai da repetição
        } else {
            continue  // Volta ao início do laço
        }
    }
    if (num % 2 == 0) {                             // Se par,
        alert(`O dobro de ${num} é: ${num * 2}`)    // mostra o dobro
    } else {                                        // Se não,
        alert(`O triplo de ${num} é: ${num * 3}`)   // mostra o triplo
    }
} while (true)  // enquanto verdade (só sai do laço, pelo break)
alert("Bye, bye...")