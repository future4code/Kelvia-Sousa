### Exercício 1
a. o comando excluirá a coluna de salário de todos os atores cadastrados.
b.o comando mudará o nome da coluna de gender para sex 
c.o comando mudará o tipo da coluna gender para VARCHAR(255)
d. alter table Actor change gender gender varchar(100

### Exercício 2
a. ```update Actor set name = "Regina Casé", birth_date = "1954-02-25" where id = "003";```
b.```update Actor set name = "JULIANA PAES" where id = "005";```
c.```update Actor set name = "Camila Pitanga", birth_date ="1977-01-14", salary ="100000", gender ="female"  where id = "005";```
d. ```update Actor set gender ="female"  where id = "007";```
  RESULTADO 0 row(s) affected Rows matched: 1  Changed: 0  Warnings: 0 - Não mostrou erro porém não alterou nenhuma linha


### Exercício 3
a. ```delete from Actor where name = "Fernanda Montenegro";```
b.```delete from Actor where gender = "male" and salary > 1000000;```

### Exercício 4 
a.```select max(salary) from Actor;```
b. ```select min(salary) from Actor where gender = "female";```
c.``` select count(*) from Actor where gender = "female"; ```
d. ```select sum(salary) from Actor;```

### Exercício 5
a. O comando trouxe a quantidade de atores do genero masculino e a quantidade de feminino, já que só tem esses dois tipos. 
b. ```select id, name from Actor order by name desc;```
c. ```select * from Actor order by salary;```
d. ```select * from Actor order by salary desc limit 3;```
e. ```select  avg(salary), gender from Actor group by gender;```

### Exercício 6
a. ```alter table Moveis change rating rating float;```
b. ```alter table Moveis change rating rating float;```
c. 
d. 

### Exercício 7
a. ```select count(*) from Movies where rating > 7.5 ;```
b. ```select avg(rating) from Movies;```
c. ```select count(*) from Movies where playing_limit_date > curdate();```
d. ```select count(*) from Movies where release_date > curdate();```
e. ```select max(rating) from Movies;```
f. ```select min(rating) from Movies;```

### Exercício 8
a. ```select * from Movies order by title;```
b.```select * from Movies order by title desc limit 5;```
c. ```select * from Movies Where release_date < curdate() order by release_date desc limit 3;```
d. ```select * from Movies order by rating desc limit 3;```

