import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { conectarServidorNoBD } from './config/db';
import { routerUsuario } from './routes/Usuario';

//cria aplicacao
export const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(logger('dev'));

conectarServidorNoBD();

app.use('/usuario', routerUsuario);
app.use('/', (req, res) => res.send('API do app Julius'))
