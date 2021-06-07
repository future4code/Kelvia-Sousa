import app from './app';
import createUser from './endpoints/createUser';
import getUserByEmail from './endpoints/getUser';
import { generateToken, getTokenData } from './services/authenticator';
import { generateId } from './services/idGenerator';


app.post('/user/signup', createUser);
app.get('/user/:email', getUserByEmail);
