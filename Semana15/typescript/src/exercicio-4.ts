// a) digitando tsc exercicio-4.js
//b) ir até a pasta src e digitar tsc exercicio-4.js
// c) digitar apenas tsc na pasta  src

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

const all: pokemon[] = []
all.push(pokemon1)
all.push(pokemon2)
all.push(pokemon3)

console.table(all)