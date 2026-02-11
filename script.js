let meta = 10000; // meta simulada

function atualizarValor(){
  let valor = document.getElementById("novoValor").value;
  document.getElementById("valorTotal").innerText = "R$ " + valor;

  let porcentagem = (valor / meta) * 100;
  if(porcentagem > 100) porcentagem = 100;

  document.getElementById("progresso").style.width = porcentagem + "%";
}
