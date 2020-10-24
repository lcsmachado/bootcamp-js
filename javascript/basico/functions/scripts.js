function showMenu(){
  let option = prompt("Qual ação você deseja tomar?\n 1 - Acelerar a nave em 5KM/H\n 2 - Desacelerar a nave em 5KM/H\n 3 - Imprimir os dados de navegação\n 4 - Sair do programa")
  return option
}
function acceleration(velocity){
  return velocity+5
}
function deacceleration(velocity){
  return velocity-5
}
function navigationReport(name, velocity){
  return `Você está a bordo da nave ${name}, viajando a ${velocity}KM/H`
}
function exitProgram(){
  return true
}

const spaceship = prompt("Digite o name da nave")
let vel = 0
let exitFlag

while(true){
  let opt = showMenu()
  if(opt == "1"){
    vel = acceleration(vel)
  }else if(opt == "2" && vel>=5){
    vel = deacceleration(vel)
  }else if(opt == "3"){
    console.log(navigationReport(spaceship,vel))
  }else if(opt == "4"){
    exitFlag = exitProgram()
  }else{
    console.log("Opção fora do escopo do programa!")
  }
  
  if(exitFlag == true){
    break
  }
}
