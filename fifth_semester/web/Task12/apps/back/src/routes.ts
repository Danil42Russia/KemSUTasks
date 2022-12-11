import express, { Router } from 'express';
import users from './routes/users';

const routes: Router = express.Router();

const apiRoutes: Router = express.Router();
apiRoutes.use('/users', users);

routes.use('/api', apiRoutes);
export default routes;
