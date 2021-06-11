### Exercício 1
* a. Acredito que string abra mais possibilidades para que o id seja mais seguro, pois como string aceitará tanto número quanto letras.

### Exercício 2 
* a. O código acima se conecta com os dados do meu SQL para permitit a inserção de um novo 
usuário a tabela já criada.

* b 
```CREATE TABLE User (id VARCHAR(255) PRIMARY KEY,  email VARCHAR(255) UNIQUE NOT NULL,   password ARCHAR(255) NOT NULL);```

### Exercício3 
* a. transformando a key declarada no .env em uma string. Precisa dele pois os valores do .env são string | undefined, ao colocar as string ele garante que não será um undefined.
* b 
<!-- export type authenticationData = {
    id: string
}; -->

<!-- export function generateToken(payload: authenticationData): string {
    return jwt.sign(
        payload,
        process.env.JWT_KEY!,
        {
            expiresIn: "1min"
        });
} -->

### Exercício 4
* a , b e c 

<!-- export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Fill the fields 'email' e 'password'");
    }

    if(email.indexOf('@') === -1){
      throw new Error("Invalid email");
    }

    if(password.length < 6){
      throw new Error("Invalid password");
    }

    const [user] = await connection("User").where({ email });

    if (user) {
      res.statusCode = 409;
      throw new Error("Email já cadastrado");
    }
    const id: string = generateId();

    const newUser: user = { id, email, password };
    await connection("User").insert(newUser);

    const token: string = generateToken({
      id: newUser.id,
    });
    res.status(201).send({ token });

   } catch (error) {
      res.status(400).send({ message: error.message})
   }
} -->

### Exercício 5
* a 
<!-- export default async function getUserByEmail (
  req: Request,
  res: Response
): Promise<void> {
  try {
    const {email} = req.params

    const result = await connection.raw(
      `SELECT * FROM User WHERE email = "${email}"`
    )    

    res.status(200).send(result[0]);

   } catch (error) {
      res.status(400).send({ message: error.message})
   }
} -->

### Exercício 6
<!-- export default async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please fill all fields");
    }
    if (email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }
    const [user] = await connection("User").where({ email });

    if (!user) {
      throw new Error("User not found");
    }

    if (user.password !== password) {
      throw new Error("Invalid password");
    }

    const token: string = generateToken({
      id: user.id,
    });

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
} -->

### Exercício 7

* a. (?)

* b. 
<!-- export function getTokenData(token: string): authenticationData {

    const result: authenticationData = jwt.verify(
        token,
        process.env.JWT_KEY!
        ) as authenticationData;

        return result;
} -->

### Exercício 8

