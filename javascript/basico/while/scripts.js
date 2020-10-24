const spaceship = prompt("Qual o nome da sua nave?");

let warps = 0;

while(true){
  let res = prompt("Você deseja entrar na dobra espacial?\n 1 - Sim\n 2 - Não");
  
  if(res === "1"){
    console.log("Entrando na dobra...");
    warps++;
    console.log("Saindo da dobra...");
  }else if(res === "2") {
    break;
  }
}

console.log(`A nave ${spaceship} viajou ${warps} vezes pelas dobras!`);