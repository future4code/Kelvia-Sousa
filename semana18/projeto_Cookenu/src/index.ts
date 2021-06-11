import app from "./app"
import createRecipes from "./endpoints/createRecipes";
import followers from "./endpoints/followers";
import getRecipe from "./endpoints/getRecipes";
import login from "./endpoints/login";
import getProfile from "./endpoints/profile";
import registerUser from "./endpoints/register";


app.post('/user/signup', registerUser);
app.post('/user/login', login);
app.get('/user/profile', getProfile)
app.post('/user/follow',followers)
app.get('/users/:id', getProfile)


app.post("/create/recipe", createRecipes)
app.get("/recipe/:id", getRecipe)

