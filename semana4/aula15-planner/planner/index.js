function addTask(){
  const inputTask = document.getElementById('tarefa')
  const weekDays = document.getElementById('dias-semana')
  const daysColumns = document.getElementById(weekDays.value)
  
  if (inputTask.value === ""){ // Desafio 1.alertar para entrada vazia
      alert('Você precisa digitar algo para adicionar ao Planner')
  }else{
    daysColumns.innerHTML += `<p>${inputTask.value}</p>` 
    inputTask.value = ''
  }

}


//text-decoration: line-through;