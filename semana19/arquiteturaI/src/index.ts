import { app } from "../src/controller/app"
import { signup } from "./controller/signup"


app.post('/signup', signup )