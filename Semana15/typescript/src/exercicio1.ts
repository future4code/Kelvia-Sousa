//console.log("Hello, world!");

//a)  
//const myString: string = 20
// a variável se destaca com um alerta de: "Type Number isn't assignable to type string".  um número não pode ser atribuído ao tipo String.

// b) 
const myNumber: number | string= 'bol' 
//Para uma variável aceitar number e string  basta usar o | (ou)


// c) 

enum RAINBOW_COLORS{
  VIOLET = 'Violet',
  INDIGO = 'Indigo',
  BLUE = 'Blue',
  GREEN = 'Green',
  YELLOW = 'Yellow',
  ORANGE = 'Orange',
  RED = 'Red'
}

type person = {
  name: string,
  age: number,
  favoriteColor: string
}

const person1: person = {
  name: 'Kelly',
  age: 31,
  favoriteColor: RAINBOW_COLORS.BLUE
}
const person2: person = {
  name: 'Edward',
  age: 27,
  favoriteColor: RAINBOW_COLORS.INDIGO
}
const person3: person = {
  name: '`Paul',
  age: 38,
  favoriteColor: RAINBOW_COLORS.RED
}
