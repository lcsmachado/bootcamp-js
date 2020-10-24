let hitchedSpaceships = [
  ["Fenix", 8 , true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false]
]

let filteredSpaceships = hitchedSpaceships.filter(element => { return element[1] > 9})
                                          .map(element => { return element[0] } )

console.log(filteredSpaceships)

let upperCaseSpaceships = hitchedSpaceships.map(element => { return element[0].toUpperCase()})

console.log(upperCaseSpaceships)

let pendingSpaceships = hitchedSpaceships.findIndex(element => { return element[2] == false })

console.log(pendingSpaceships)

let message = "Espaçonaves com mais de 9 tripulantes: " + filteredSpaceships.join(", ")
message += "\nPlataform com processo de engate: " + (pendingSpaceships + 1)
message += "\nEspaçonaves destacadas: " + upperCaseSpaceships.join(", ")

alert(message)