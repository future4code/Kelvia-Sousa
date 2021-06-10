import app from "./app"
import login from "./endpoints/login";
import registerUser from "./endpoints/register";


app.post('/user/signup', registerUser);
app.post('/user/login', login);

