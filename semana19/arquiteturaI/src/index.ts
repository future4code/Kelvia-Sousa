import { app } from "../src/controller/app";
import { deleteUser } from "./controller/deleteUser";
import { getUsers } from "./controller/getUsers";
import { login } from "./controller/login";
import { signup } from "./controller/signup";

app.post("/signup", signup);
app.post("/login", login )
app.get('/all', getUsers)
app.delete('/:id"', deleteUser )