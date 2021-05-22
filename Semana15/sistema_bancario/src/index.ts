import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

enum TRANSACTIONS_TYPE {}

type Transactions = {
  amountSpent: string;
  spentDate: string;
  description?: string;
  type?: string;
};

type AccountInfo = {
  name: string;
  cpf: string;
  birthDate: string;
  balance: number;
  statement: Transactions[];
};


type AddBalance = {
  name: string;
  cpf: string;
  newBalance: string;
};

let customers: AccountInfo[] = [
  {
    name: "Kelly",
    cpf: "64716473287",
    birthDate: "1990-01-19",
    balance: 2000,
    statement: [
      {
        amountSpent: "R$ 100,00",
        spentDate: "22/01/2020",
        description: "",
      },
    ],
  },
  {
    name: "Edward",
    cpf: "52510698206",
    birthDate: "1992-12-14",
    balance: 100,
    statement: [
      {
        amountSpent: "R$ 200,00",
        spentDate: "21/05/2021",
        description: "",
      },
      {
        amountSpent: "R$ 400,00",
        spentDate: "21/04/2021",
        description: "",
      },
    ],
  },
];

//test
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!");
});

//todos os clientes
app.get("/customers/all", (req: Request, res: Response) => {
  try {
    res.status(200).send(customers);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// um cliente por nome
app.get("/customers/:name", (req: Request, res: Response) => {
  try {
    const name = req.params.name;
    const result = customers.filter(
      (customer) => customer.name.toLowerCase() === name.toLowerCase()
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

//verificar saldo
app.get("/customers/:name/:cpf", (req: Request, res: Response) => {
  try {
    const name = req.params.name as string;
    const cpf = req.params.cpf as string;

    const result = customers
      .filter((bal) => bal.name === name && bal.cpf === cpf)
      .map((customer) => customer.balance);

    res.status(200).send({ message: "Total balance", result });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

//adicionar Saldo
app.put("/customers/add", (req: Request, res: Response) => {
  try {
    const { name, cpf, newBalance } = req.body;

    const result = customers.findIndex(
      (customer) => customer.name === name && customer.cpf === cpf
    );
    if (result === -1) {
      throw new Error("Client not found");
    }
    const date = new Date();
    const trans: Transactions = {
      amountSpent: newBalance,
      spentDate: date.toLocaleDateString(),
      description: "new",
      type: "bu",
    };
    customers[result].statement.push(trans);
    customers[result].balance += newBalance;
    res
      .status(200)
      .send({ message: "saldo alterado", C: customers[result].balance });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

//abrir conta
app.post("/customers/open", (req: Request, res: Response) => {
  try {    
    const { name, cpf, birthDate } = req.body;
    const newCustomer: AccountInfo = {
      name,
      cpf,
      birthDate,
      balance: 0,
      statement: [],
    };

    const result = customers.findIndex(customer => customer.cpf )

    if (customers.findIndex((customer) => customer.cpf === cpf) !== -1) {
      throw new Error("CPF já cadastrado");
    }

    function moreThan18Years(birt: Date): boolean {
      const now = new Date();
      const yearDifference = now.getFullYear() - birt.getFullYear(),
        mounthDifference = now.getMonth() - birt.getMonth(),
        dateDifference = now.getDate() - birt.getDate();
      if (
        yearDifference < 18 ||
        (yearDifference === 18 && mounthDifference < 0) ||
        (yearDifference === 18 && mounthDifference === 0 && dateDifference <= 0)
      ) {
        return false;
      } else {
        return true;
      }
    }
    const birt = new Date(birthDate);

    if (!moreThan18Years(birt)  ) {
      throw new Error("You must be over 18");
    }

    customers.push(newCustomer);
    res
      .status(200)
      .send({ message: "Account successfully opened", customer: newCustomer });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

//pagar conta
app.post("/customers/payment", (req: Request, res: Response) => {
  try {
    const cpfValid = req.params.cpf
    const {amountSpent, spentDate, description} = req.body

    const payBill: Transactions = {
      amountSpent,
      spentDate,
      description,
    }

    if(!(cpfValid in customers)){
      throw new Error("client not found");
    }
     
    res.status(200).send();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
