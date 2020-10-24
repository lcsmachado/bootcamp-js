const pilotName = prompt("Qual o nome do piloto?");
let velocity = 0
velocity = prompt("Qual a velocidade desejada?");
const confirmation = confirm(`Voce deseja viajar à ${velocity}?`);

if(confirmation === true){
  if(velocity <= 0 ){
    console.log("Nave está parada. Considere partir e aumentar a velocidade");
  }else if(velocity <= 40){
    console.log("Você está devagar. Podemos aumentar a velocidade");
  }else if(velocity < 80){
    console.log("Parece uma boa velocidade")
  }else if(velocity < 100){
    console.log("Velocidade Alta. Considere diminuir!");
  }else{
    console.log("Velocidade Perigosa. Controla de aeronave assumido pelo Controle Automático");
  }
  console.log(`O nome do piloto é: ${pilotName} e ele está viajando a uma velocidade de ${velocity}KM/H`);
}

