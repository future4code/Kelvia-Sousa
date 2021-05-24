import express, { Request, Response } from "express";
import cors from "cors";
import { countries, country } from "./countries";

const app = express();

app.use(express.json());
app.use(cors());

//1
app.get("/countries/all", (req: Request, res: Response) => {
  const result = countries.map((country) => ({
    id: country.id,
    name: country.name,
  }));
  res.status(200).send(result);
});

//3
app.get("/countries/search", (req: Request, res: Response) => {
  try {

    //nenhum parâmetro passado
    if (
      req.query.name === "" ||
      req.query.capital === "" ||
      req.query.continent === ""
    ) {
      throw new Error("Type something");
    }

    //nenhum resultado obtido
    if (
      req.query.name === undefined ||
      req.query.capital === undefined ||
      req.query.continent === undefined
    ) {
      throw new Error("could not found");
    }

    let result: country[] = countries;

    if (req.query.name) {
      result = result.filter((country) =>
        country.name.includes(req.query.name as string)
      );
      res.status(200).send(result);
    }
    if (req.query.capital) {
      result = result.filter((country) =>
        country.capital.includes(req.query.capital as string)
      );
      res.status(200).send(result);
    }
    if (req.query.continent) {
      result = result.filter((country) =>
        country.continent.includes(req.query.continent as string)
      );
      res.status(200).send(result);
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

//2
app.get("/countries/:id", (req: Request, res: Response) => {

  try{
  if (isNaN(Number(req.params.id))) {
    throw new Error("Id must be a number");
  }

  const result: country | undefined = countries.find(
    (country) => country.id === Number(req.params.id)
  );

  if (result) {
    res.status(200).send(result);
  } else {
    throw new Error("Could not find country with specified id");
  }
} catch(error){
  res.status(400).send({ message: error.message });
}
});

//4
app.put("/countries/edit/:id", (req: Request, res: Response) => {
  try {
  const {name, capital} = req.body

  const  index: number = countries.findIndex(
    (country) => country.id === Number(req.params.id)
  );
  
  if(index < 0){
    throw new Error("Could not find country with specified id");
  }
 
  const newInformation : country ={
    id:countries[index].id,
    name: typeof(name) === "string" ? name : countries[index].name,
    capital: typeof(capital) === "string" ? capital : countries[index].capital,
    continent:countries[index].continent
  }

  const country = [...countries]
  country[index] = newInformation

  res
  .status(200)
  .send(country)
    
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}); 

app.put('/countries/edit', (req: Request, res: Response) => {
  res
  .status(400)
  .send({message: "Type something"})
})


app.listen(3003, () => {
  console.log("Server is running at http://localhost:3003");
});