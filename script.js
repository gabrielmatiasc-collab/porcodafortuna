let total = 0;
let participantes = 0;
const meta = 100;

const senhaAdmin = "admin2254495";

// =========================
// ATUALIZA TELA
// =========================
function atualizarTela() {
  document.getElementById("valor").innerText =
    `R$ ${total.toFixed(2)}`;

  let porcentagem = (total / meta) * 100;
  if (porcentagem > 100) porcentagem = 100;

  document.getElementById("barra").style.width = porcentagem + "%";

  document.getElementById("participantes").innerText = participantes;

  document.getElementById("ultimaAtualizacao").innerText =
    new Date().toLocaleString("pt-BR");
}

// =========================
// ÁREA ADMIN
// =========================
function abrirAdmin() {
  const senha = prompt("Senha do administrador:");

  if (senha === senhaAdmin) {

    let novoValor = prompt("Valor TOTAL arrecadado:");
    let novosParticipantes = prompt("Total de participantes:");

    if (!isNaN(novoValor) && !isNaN(novosParticipantes)) {
      total = parseFloat(novoValor);
      participantes = parseInt(novosParticipantes);

      atualizarTela();
      tocarSom();
    } else {
      alert("Valores inválidos");
    }

  } else {
    alert("Senha incorreta");
  }
}

// =========================
// SOM
// =========================
function tocarSom(){
  document.getElementById("coinSound").play();
}

// =========================
// PARTÍCULAS
// =========================
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function criarParticula(){
  particles.push({
    x: Math.random()*canvas.width,
    y: 0,
    size: Math.random()*6+2,
    speed: Math.random()*3+1
  });
}

function animar(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach((p,i)=>{
    p.y += p.speed;
    ctx.fillStyle = "#00ff9d";
    ctx.fillRect(p.x,p.y,p.size,p.size);

    if(p.y > canvas.height) particles.splice(i,1);
  });

  requestAnimationFrame(animar);
}

setInterval(criarParticula, 200);
animar();

atualizarTela();
