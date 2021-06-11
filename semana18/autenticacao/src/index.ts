import app from './app';
import createUser from './endpoints/createUser';
import getProfile from './endpoints/getProfile';
import getUserByEmail from './endpoints/getUser';
import login from './endpoints/login';

app.post('/user/signup', createUser);
app.post('/user/login', login);
app.get('/user/:email', getUserByEmail);
app.get('/user/profile', getProfile);
