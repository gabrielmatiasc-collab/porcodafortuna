let meta = 100;
let valor = localStorage.getItem("valor") || 0;

function atualizar(){
document.getElementById("valor").innerText =
"R$ " + Number(valor).toFixed(2);

let porcentagem = (valor/meta)*100;
document.getElementById("progresso").style.width =
porcentagem+"%";
}

atualizar();

/* ADMIN */
document.getElementById("adminBtn").onclick = ()=>{
let senha = prompt("Senha admin:");
if(senha==="adminCocacolaxD1"){
document.getElementById("admin").style.display="block";
}
}

function salvarValor(){
valor = document.getElementById("novoValor").value;
localStorage.setItem("valor",valor);
document.getElementById("admin").style.display="none";
atualizar();
}

/* CONTADOR */
let dataSorteio = null;

function iniciarContador(){
if(!dataSorteio) return;

setInterval(()=>{
let agora = new Date().getTime();
let tempo = dataSorteio - agora;

let d = Math.floor(tempo/(1000*60*60*24));
let h = Math.floor((tempo%(1000*60*60*24))/(1000*60*60));
let m = Math.floor((tempo%(1000*60*60))/(1000*60));
let s = Math.floor((tempo%(1000*60))/1000);

document.getElementById("dias").innerText=d;
document.getElementById("horas").innerText=h;
document.getElementById("minutos").innerText=m;
document.getElementById("segundos").innerText=s;

},1000);
}
