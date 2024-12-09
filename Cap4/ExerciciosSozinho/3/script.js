const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const inNumero = document.querySelector("#inNumero");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  let num = Number(inNumero.value);

  function numeroPerfeito(num) {
    let somaDivisores = 0;
    let divisores = [];
    
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisores.push(i);
        somaDivisores += i;
        if (i !== num / i && i !== 1) { // Evitar duplicação de divisores
          divisores.push(num / i);
          somaDivisores += num / i;
        }
      }
    }

    // Ordenar os divisores em ordem crescente
    divisores.sort((a, b) => a - b);

    return { isPerfect: somaDivisores === num, divisores };
  }

  const resultado = numeroPerfeito(num);

  if (resultado.isPerfect) {
    resp2.innerText = `${num} é um Número Perfeito`;
    resp1.innerText = `Os divisores de ${num} são: ${resultado.divisores.join(", ")} (Soma: ${num})`;
  } else {
    resp2.innerText = `${num} não é um Número Perfeito`;
    resp1.innerText = ""; // Limpa a resposta anterior
  }
});
