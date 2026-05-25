import Router from "express";
import auth from '../middlewares/authMiddleware.js'
import { placeOrder } from "../controllers/orderController.js";

const orderRouter = Router();

orderRouter.post("/place",auth,placeOrder)


export default orderRouter;