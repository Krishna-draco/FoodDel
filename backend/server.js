import express from 'express'
import {connectDb} from "./config/db.js"; 
import foodRouter from './routes/foodRoutes.js';
import userRouter from './routes/userRoutes.js';
import cors from 'cors';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRoutes.js';

//app config
const app = express()
const port = 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
   origin:'http://localhost:5173'
}))

//db connection
connectDb();

//API endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'));
app.use('/api/user',userRouter)
app.use('/api/order',orderRouter)

app.use('/api/cart',cartRouter)

app.get('/',(req,res)=>{
   res.send('Hello');
})

app.listen(port,()=>{
   console.log(`Server running in : http://localhost:${port}`);
})