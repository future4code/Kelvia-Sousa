import app from './app';
import createUser from './endpoints/createUser';
import getUserByEmail from './endpoints/getUser';
import login from './endpoints/login';
import { generateToken, getTokenData } from './services/authenticator';
import { generateId } from './services/idGenerator';


app.post('/user/signup', createUser);
app.post('/user/login', login);
app.get('/user/:email', getUserByEmail);
