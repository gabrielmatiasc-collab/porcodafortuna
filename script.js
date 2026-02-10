const senhaAdmin = "admin2254495";
const meta = 100;

let total = Number(localStorage.getItem("total")) || 0;
let participantes = Number(localStorage.getItem("participantes")) || 0;
let ranking = JSON.parse(localStorage.getItem("ranking")) || [];

// =====================
function salvar(){
 localStorage.setItem("total", total);
 localStorage.setItem("participantes", participantes);
 localStorage.setItem("ranking", JSON.stringify(ranking));
}

// =====================
function atualizarTela(){

 document.getElementById("valor").innerText =
  `R$ ${total.toFixed(2)}`;

 let porcentagem = (total/meta)*100;
 if(porcentagem>100) porcentagem=100;

 document.getElementById("barra").style.width = porcentagem+"%";

 document.getElementById("participantes").innerText = participantes;

 document.getElementById("ultimaAtualizacao").innerText =
  new Date().toLocaleString("pt-BR");

 atualizarRanking();
 salvar();

 if(total >= meta){
   confete(function confete(){
 confetti({
  particleCount:200,
  spread:100
 });
});
 }
}

// =====================
function atualizarRanking(){

 const ul = document.getElementById("ranking");
 ul.innerHTML = "";

 ranking.sort((a,b)=>b.valor-a.valor);

 ranking.forEach((p,i)=>{

  let medalha = i==0?"🥇":i==1?"🥈":i==2?"🥉":"";

  ul.innerHTML += `<li>${medalha} ${p.nome} - R$ ${p.valor}</li>`;
 });
}

// =====================
function abrirAdmin(){

 let senha = prompt("Senha admin:");

 if(senha===senhaAdmin){

  total = Number(prompt("Valor total arrecadado:"));
  participantes = Number(prompt("Total de participantes:"));

  let dados = prompt(
   "Ranking: Nome,Valor | Nome,Valor\nEx: João,20|Maria,10"
  );

  ranking = [];

  dados.split("|").forEach(item=>{
   let p = item.split(",");
   ranking.push({nome:p[0], valor:Number(p[1])});
  });

  atualizarTela();
  tocarSom();

 }else{
  alert("Senha incorreta");
 }
}

// =====================
function tocarSom(){
 document.getElementById("coinSound").play();
}

// =====================
function confete(){
 alert("🎉 META ATINGIDA! HORA DO SORTEIO!");
}

atualizarTela();
