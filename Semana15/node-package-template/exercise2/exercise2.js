const operations = process.argv[2];
const a = Number(process.argv[3]);
const b = Number(process.argv[4]);

switch (operations) {
  case "add":
    console.log(`\x1b[7m Resposta: ${a + b}`)
    break;
  case "sub":
    console.log(`\x1b[35m Resposta: ${a - b}`);
    break;
  case "mul":
    console.log(`\x1b[33m Resposta: ${a * b}`);
    break;
  case "div":
    console.log(`\x1b[36m Resposta: ${a / b}`);
    break;
}
