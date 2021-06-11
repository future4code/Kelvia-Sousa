import app from "./app"
import createRecipes from "./endpoints/createRecipes";
import followers from "./endpoints/followers";
import getRecipeFeed from "./endpoints/getRecipeFeed";
import getRecipe from "./endpoints/getRecipes";
import login from "./endpoints/login";
import getOthersProfile from "./endpoints/othersProfile";
import getProfile from "./endpoints/profile";
import registerUser from "./endpoints/register";
import unfollow from "./endpoints/unfollow ";


app.post('/user/signup', registerUser);
app.post('/user/login', login);
app.post('/user/follow',followers)
app.post('/user/unfollow',unfollow)
app.get('/user/profile', getProfile)
app.get('/user/feed', getRecipeFeed)
app.get('/users/:id', getOthersProfile)


app.post("/create/recipe", createRecipes)
app.get("/recipe/:id", getRecipe)

