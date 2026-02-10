let total = 0;
const meta = 100;

// Atualiza barra e valor
function atualizarTela() {
  document.getElementById("valor").innerText = `R$ ${total.toFixed(2)}`;
  let porcentagem = (total / meta) * 100;
  if (porcentagem > 100) porcentagem = 100;
  document.getElementById("barra").style.width = porcentagem + "%";
}

// Área secreta
function abrirAdmin() {
  const senha = prompt("Digite a senha do administrador:");

  if (senha === "admin2254495") {
    const novoValor = prompt("Digite o valor TOTAL arrecadado:");

    if (!isNaN(novoValor) && novoValor !== "") {
      total = parseFloat(novoValor);
      atualizarTela();
      alert("Valor atualizado com sucesso!");
    } else {
      alert("Valor inválido.");
    }
  } else {
    alert("Senha incorreta!");
  }
}

atualizarTela();
