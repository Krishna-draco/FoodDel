import {Router} from 'express'
import { addToCart,removeFromCart,cartList } from '../controllers/cartController.js';
import auth from '../middlewares/authMiddleware.js'

const cartRouter = Router();

cartRouter.post('/add',auth,addToCart);
cartRouter.post('/remove',auth,removeFromCart);
cartRouter.post('/cartList',auth,cartList);

export default cartRouter;