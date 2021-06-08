import app from "./app"
// import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser';
import deleteUser from "./endpoints/deleteUser";
import getProfile from "./endpoints/getProfile";
import getUser from "./endpoints/getUser";
import login from "./endpoints/login";
// import { compareHash, createHash } from "./services/hashManager";

app.post('/user/signup', createUser );
app.post('/user/login', login );
app.get('/user/profile', getProfile);
app.get('/user/:id', getUser);
app.delete('/user/:id' , deleteUser);

// const hash1 = createHash("senha")
// const hash2 = createHash("senha")

// const compare1 = compareHash(hash1, hash1)
// const compare2 = compareHash("senha", hash2)

// console.log({hash1, hash2, compare1, compare2});
