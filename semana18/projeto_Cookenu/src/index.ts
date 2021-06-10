import app from "./app"
import createRecipes from "./endpoints/createRecipes";
import login from "./endpoints/login";
import getProfile from "./endpoints/profile";
import registerUser from "./endpoints/register";


app.post('/user/signup', registerUser);
app.post('/user/login', login);
app.get('/user/profile', getProfile)

app.post("/create/recipe", createRecipes)
