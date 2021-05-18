//a) 


//b) and c)
const name = process.argv[2]
const age = Number(process.argv[3])

if (!age) {
  console.log('\x1b[31m', 'Você precisa digitar a sua idade')
} else {
  console.log(`\x1b[34m Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7} anos.`)
}

