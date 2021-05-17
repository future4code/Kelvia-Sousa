const tasks = ["lavar louça"];
const newTask = process.argv[2];

const addTask = tasks.push(newTask); 
console.log(`Tarefa adicionada com sucesso! ${tasks}`);