// a) digitando tsc exercicio-4.js
//b) ir até a pasta src e digitar tsc exercicio-4.js
// c) digitar apenas tsc na pasta  src
var pokemon1 = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
};
var pokemon2 = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
};
var pokemon3 = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
};
var all = [];
all.push(pokemon1);
all.push(pokemon2);
all.push(pokemon3);
console.table(all);
