### Exercício 1
* a. foreing key (chave estrangeira) é um comando para criação de uma nova coluna que permite fazer uma ligação referencial (references) de dados entre duas colunas distintas fazendo combinações entre elas.
* b. 
//criando tabela
create table rating (
	id varchar(255) primary key,
    comment text not null,
    rate float not null,
    movie_id varchar(255),
    foreign key (movie_id) references Movies(id)
);

// inserindo avaliações para os três filmes.
insert into rating values (
	"001",
    "é um telefilme competente com uma excelente atuação da sempre ótima Fernanda Montenegro e uma ambientação maravilhosa do Rio Grande do Sul, se passando em Porto Alegre e também em cidades do interior do estado",
    9,
    "002"
),(
	"002",
    "Divertidíssimo. Não entendo como teve gente aqui que falou tão mal do filme.",
    8,
    "003"
), ( 
"003", 
"É um filme bem delicado, sutil e muito bonito em todos os pontos de vista.", 
10,
"004"
);
* c. 
Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha (`cruz-2114645-kelvia-sousa``rating`, CONSTRAINT` rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERÊNCIAS` Movies` (` id`))
Na relação o comando vai buscar na tabela de filmes o id correspondente ao não encontrar retorna o erro e não criar a nova avaliação.

* d. 
```alter table Movies drop column rating; ```

* e. 
```delete from Movies where id = "003";```
Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha (`cruz-2114645-kelvia-sousa``rating`, CONSTRAINT` rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERÊNCIAS` Movies` (` id`))
Exp: AO fazer uma relação com chave estrangeira essa exclusão não é permitida.

### Exercício 2 
* a. as duas foreing keys formarão  duas colunas nessa nova tabela de elenco que permite criar uma ligação entre um ator e um filme em que ele atuou.
 * b.  
 insert into MovieCast values ("001", "003"),("002", "1622111581769"),( "004" , "007"), ("003", "005"), ("004", "004"), ("005", "002");

*  c. 
Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha (`cruz-2114645-kelvia-sousa``MovieCast`, CONSTRAINT` `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`)
Ao buscar o ator na tabela pelo id não encontrou , por isso não fez a relação na nova tabela de elencos

* d. 
Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha (`cruz-2114645-kelvia-sousa`.`MovieCast`, CONSTRAINT` MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERÊNCIAS` Ator` (` id`))
O ator escolhido para excluir pertence a tabela de elenco por isso não pode ser excluido na tabela de atores de

### Exercício 3 
* a. Ele mostrara todos os dados da tabela de filmes, os filmes que já tiveram avaliações cadastrados na tabela de rating. o ON é como uma intersecção e uma direção de como buscar essas informcações. 

* b. ```select movie.id ,movie.title, rating.rate from Movies movie inner  join rating rating on movie.id = rating.movie_id;```

### Exercício 4 

* a. ```select movie.id, movie.title, rating.rate, rating.comment from Movies movie left join rating rating on movie.id = rating.movie_id;```

* b. ```select movie.id, movie.title, cast.actor_id from Movies movie right join MovieCast cast on cast.movie_id = movie.id;```

*c. ```select avg(rating.rate), movie.id, movie.title from Movies movie left join rating rating on movie.id = rating.movie_id group by (movie.id); ```

### Exercício 5

* a. Está buscando todas as informações (*)  primeiro juntando duas as tabelas com dados únicos por isso usasse o left join, depois junta também a tabela de elenco que já tem em sí a junção das duas primeiras. Como está fazendo uma junção e depois outra precisa de dois JOIN's

* b.  Código de erro: 1054. Coluna desconhecida 'm' na 'lista de campos' tem um m solto sem determinar com (.) o que deseja.

* c ```SELECT m.id, m.title, a.id as actor_id, a.name, r.rate, r.comment FROM Movies m LEFT JOIN rating r on r.movie_id = m.id LEFT JOIN MovieCast mc ON m.id = mc.movie_id JOIN Actor a ON a.id = mc.actor_id;```

### Exercício 6 

* a. N:M 

* 

