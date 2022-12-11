import express, { Application } from 'express';
import cors from 'cors';
import logger from 'morgan';
import routes from './routes';
import * as http from 'http';

const app: Application = express();
const server: http.Server = http.createServer(app);

const PORT = process.env.PORT || 8080;

app.set('port', PORT);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(routes);

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
