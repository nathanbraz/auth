import 'reflect-metadata';
import express from 'express';

import './database/connect';
import routes from './routes';

const app = express();

//Aceitar o json 
app.use(express.json());

app.use(routes);

app.listen(3000, () => {
  console.log("TESTANDO O SERVER");
});