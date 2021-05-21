import express , {Request, Response} from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

type AccountInfo = {
  name: string,
  cpf: number, 
  birthDate: number | string,
  balance: number,
}

type Transactions = {
  statement: [
    amountSpent: number,
    spentDate: number,
    description: string
  ]
} 

let customers: AccountInfo[] = [
  {
    name: 'Kelly',
    cpf: 64716473287,
    birthDate: 19011990,
    balance: 0
  }
];

//test
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!");
});
//todos os clientes 
app.get('/customers/all', (req: Request, res: Response) => {
  try {

    res.status(200). send(customers)
  } catch (error) {
    res.status(400).send({message: error.message});
  }
})

// um cliente
app.get('/customers/:name', (req: Request, res: Response) => {
  try {
    const name = req.params.name;
    const result = customers.filter(customer => customer.name === name);
    res.status(200). send(result)

  } catch (error) {
    res.status(400).send({message: error.message});
  }
})

//abrir conta
app.post('/customers/open', (req: Request, res: Response) => {
  try {
    const { name, cpf , birthDate, balance} = req.body
    const newCustomer: AccountInfo = {
      name,
      cpf,
      birthDate,
      balance
    }
    res.status(200).send({ message: "Account successfully opened", customer: newCustomer})

  } catch (error) {
    res.status(400).send({message: error.message});
  }
})



app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
})