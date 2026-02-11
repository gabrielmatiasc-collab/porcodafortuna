let senha = "adminCocacolaxD1";
let meta = 100;
let valorAtual = localStorage.getItem("valor") || 0;

atualizarTela();

document.getElementById("adminBtn").onclick = () =>{
 document.getElementById("adminLogin").style.display="block";
}

function logarAdmin(){
 let s = document.getElementById("senhaAdmin").value;
 if(s === senha){
  document.getElementById("adminLogin").style.display="none";
  document.getElementById("adminPainel").style.display="block";
 }else{
  alert("Senha incorreta");
 }
}

function salvarValor(){
 let v = document.getElementById("valorInput").value;
 localStorage.setItem("valor", v);
 valorAtual = v;
 atualizarTela();
 document.getElementById("adminPainel").style.display="none";
}

function atualizarTela(){
 document.getElementById("valor").innerText = "R$ " + Number(valorAtual).toFixed(2);
 let p = (valorAtual/meta)*100;
 if(p>100)p=100;
 document.getElementById("progresso").style.width = p+"%";
}

/* CONTADOR */

let dataSorteio = null; // depois você coloca a data

setInterval(()=>{
 if(!dataSorteio) return;

 let fim = new Date(dataSorteio).getTime();
 let agora = new Date().getTime();
 let d = fim - agora;

 if(d<=0) return;

 document.getElementById("dias").innerText = Math.floor(d/(1000*60*60*24));
 document.getElementById("horas").innerText = Math.floor((d%(1000*60*60*24))/(1000*60*60));
 document.getElementById("minutos").innerText = Math.floor((d%(1000*60*60))/(1000*60));
 document.getElementById("segundos").innerText = Math.floor((d%(1000*60))/1000);
},1000);
