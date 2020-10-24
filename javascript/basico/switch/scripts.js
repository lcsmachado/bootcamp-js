const ligthYears = prompt("Quantos anos-luz você deseja converter");
const unit = prompt("Para qual unidade de conversão você deseja converter?\n1 - Parsec\n2 - Unidade Astronômica (AU)\n3 - Quilômetros");

let chosenUnity;
let convertedDistance;

switch (unit){
  case "1":
    chosenUnity = "Parsec";
    convertedDistance = ligthYears * 0.306601;
    break;
  case "2":
    chosenUnity = "Unidade Astronômica";
    convertedDistance = ligthYears * 63241.1;
    break;
  case "3":
    chosenUnity = "Quilômetros";
    convertedDistance = ligthYears * 9.5 * Math.pow(10, 12);
    break;
  default:
    chosenUnity = "Unidade não identificada";
    convertedDistance = "Conversão fora do escopo";
}

alert("Distância em Anos-luz: " + ligthYears + "\n" + chosenUnity + ": " + convertedDistance);