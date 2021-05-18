type post {
  author: string,
  text: string
}

const posts: post = [
  {
    author: "Alvo Dumbledore",
    text: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    author: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    author: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    author: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    author: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]

function buscarPostsPorAutor(posts: post, autorInformado: string) : post[] {
  return posts.filter(
    (post) => {
      return post.autor === autorInformado
    }
  )
}