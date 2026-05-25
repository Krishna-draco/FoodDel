import mongoose from 'mongoose'

const connectDb =async ()=>{
   await mongoose.connect("mongodb://127.0.0.1:27017/FoodDel")
   console.log('Connected to the DB');
}

export {connectDb};