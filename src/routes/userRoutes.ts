import { Router } from 'express';
import { Usercontroller} from '../controllers/userController';

const userRoutes = Router();

userRoutes.get('/', Usercontroller.getAll);
// router.get('/users/:id', getUserById);
// router.post('/users', createUser);

export default userRoutes