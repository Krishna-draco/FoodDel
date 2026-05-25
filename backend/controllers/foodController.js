import { foodModel } from "../models/foodModel.js";
import fs from 'fs'

const addfood = async(req,res)=>{
   let file_name =`${req.file.filename}`;
   const { description, price, category } = req.body; 
   try{
      const food = await foodModel.create({
         name:req.body.name,
         description,
         price,
         image : file_name,
         category,
      })
      console.log(food);
      res.json({message:'Food added',success:true})
   }
   catch{
      res.json({ message: "Cannot add the food sorry", success: false });
   }
}
//All food list
const listFood = async (req,res)=>{
   try {
      const foods = await foodModel.find({});
      res.json({success:true,data:foods,message:'The food items is successfully taken from the backend'});
   } catch (error) {
      console.log(error);
      res.json({success:false,message:'Error'});
   }
}

//Remove food item
const removefood = async (req,res)=>{
   try {
      const food = await foodModel.findById(req.body.id);
      fs.unlink(`uploads/${food.image}`,()=>{})
      await foodModel.findByIdAndDelete(food._id);
      res.json({message:'Successfully deleted',success:true})
   } catch (error) {
      console.log(error);
      res.json({message:'Error',success:false})
   }
}

export {addfood,listFood,removefood};