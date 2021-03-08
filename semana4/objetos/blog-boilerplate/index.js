//1.
console.log("Estou linkado ao HTML")

//2.
let inputTitle = document.getElementById('titulo-post')
let inputAuthor = document.getElementById('autor-post')
let inputContents = document.getElementById('conteudo-post')
  
let apertouBotaoCriar = () => {
  const blogInfoObject = {
    titulo: inputTitle.value,
    autor: inputAuthor.value,
    Conteudo: inputContents.value
  }
  //3.
  const blogDataArray = [blogInfoObject]
  console.log(blogDataArray)
  //4,5
  const addpost = document.getElementById('postagens-do-blog')
  addpost.innerHTML += `<div><h4>${inputTitle.value}</h4><p>${inputAuthor.value}</p><p>${inputContents.value}</p></div>`

  //limpar formulário
  inputTitle.value=''
  inputAuthor.value=''
  inputContents.value=''
}




