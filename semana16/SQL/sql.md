### Exercício 1
a.
PRIMARY KEY - é uma restrição que permite identificar e diferenciar uma tupla(linha de registo) da outra.
VARCHAR(n) - é um tipo utilizado para strings de no máximo n caracteres.
DATE - é um tpo utilizado para datas.
NO NULL - é uma restrição, para não aceitar nessa coluna um valor null, pois já é suportado pelo SQL valores null.

b.
 o comando SHOW DATABASES apresentou o user da base de dados.
 já o SHOW TABLES mostrou as tabelas já criadas pelo use da base de dados.

 c. o comando DESCRIBE Actor apresenta uma tabela descrevendo na linha superior o que cada coluna criada representa, 
 a primeira é um campo indicando cada elemento requerido por esta table (actor) , a segunda o tipo de cada elemento, terceira se cada elemento é ou não null, quarta qual deles possui a key, quinta a default e sexta Extra. 

### Exercício 2
a.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"002",
    "Glória Pires",
	1200000,
    "1963-8-23",
    "female"
);
b. Código do erro: 1062. Entrada '002' duplicada, para a chave 'PRIMARY'	- a id não pode ter um dado repetido, pois ela tem uma restrição de ser única.

c. Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1 -
Explicação: Faltou colocar o que virá na coluna de birth_date e de gender nos ()  
solução:  
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d. Código de erro: 1364. O campo 'nome' não tem um valor padrão 
Explicação: Ao criar a tabela Actor determinamos que existe uma coluna com o nome, mesmo na primeira linha não tendo name, nao irá aceitar, pois a tabela precisa de um nome.
Solução: 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio da Silva Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

e. Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1
Explicação:  A sequência da data está correta, porém não está entre " "
Solução: 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

### Exercício 3
a.```SELECT * from Actor WHERE gender = "female" ```
b.```SELECT name, salary from Actor WHERE name = "Tony Ramos"```
c.  Retornou todas as informações com valor NULL - não tem nenhum gender cadastrada com valor inválido.
d. ```SELECT id, name, salary from Actor WHERE salary <= 500000```
e. Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'. -  a coluna é name não  nome 
solução: ```SELECT id, name from Actor WHERE id = "002"```
### Exercício 4
a.  A query  trará todos as informações pois temos um * após SELECT da tabela Actor WHERE determina quais dados devem ser filtrados. para procurar dados que comece com a letra A basta colocar o % apos a letra A seguido de LIKE e antes dizer em qual coluna.   para fazer pesquisas em colunas diferentes  usasse o AND 

b. ```SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000```

c. ```SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%g%");```

d. ```SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") AND SALARY BETWEEN 350000 AND 900000;```

### Exercício 5
a. TEXT diferente do VARCHAR não tem limites de tamanho (?)
CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL, -- faltou UNIQUE
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL, 
    rating FLOAT NOT NULL
);
b.c.d.e
INSERT INTO Movies VALUES (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
) ;

INSERT INTO Movies VALUES (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
),(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
),(
	"004",
    "O filme da minha vida",
    "Ao retornar à sua cidade natal, no Rio Grande do Sul, um rapaz fica sabendo que o pai se mudou para a Europa. Sozinho, enfrentando os dilemas da juventude, ele começa a carreira no magistério.",
    "2017-08-03",
    10
);

### Exercício 6

a. ```SELECT id, title, rating FROM Movies WHERE id = "004"```;
b.``` SELECT * FROM Movies WHERE title = "O filme da minha vida"```;
c. ```SELECT id, title, synopsis FROM Movies WHERE rating >= 7```;

### Exercício 7 

a. ```SELECT * FROM Movies WHERE title LIKE "%vida%"```;
b.```SELECT * FROM Movies WHERE title LIKE "%cidade%" OR synopsis LIKE "%cidade%"```;
c.```SELECT * FROM Movies WHERE release_date < "2021-05-24"```;
d.```SELECT * FROM Movies WHERE release_date < "2021-05-24" AND title LIKE "%mãe%" OR synopsis LIKE "%mãe%" AND rating > 7```;