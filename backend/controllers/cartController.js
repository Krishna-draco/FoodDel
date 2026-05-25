import userModel from "../models/userModel.js";

export const addToCart = async (req,res)=>{
   try {
      const {itemId,userId} = req.body;
      const user = await userModel.findById(userId);
      const cartData = user.cartData;
      if(!cartData[itemId]){
         cartData[itemId] = 1;
      }
      else{
         cartData[itemId] +=1;
      }
      await userModel.findOneAndUpdate({_id:userId},{cartData})
      res.json({success:true,message:'successfully added to the cart'})
   } catch (error) {
      res.json({success:false,message:error});
   }
}

export const removeFromCart = async (req,res)=>{
   try{
      const {itemId,userId} = req.body;
      const user = await userModel.findById(userId);
      const cartData = user.cartData;
      if(cartData[itemId]>0){
         cartData[itemId] -= 1
         if(cartData[itemId] == 0){
            delete cartData[itemId]
         }
         await userModel.findOneAndUpdate({_id:userId},{cartData});
   
         res.json({success:true,message:'Successfully deleted one item from cart'})
      }
      else{
         res.json({success:false,message:'item count < 0'})
      }
   }
   catch(error){
      res.json({success:false,message:error})
   }
}

export const cartList = async(req,res)=>{
   try{
      const { userId } = req.body;
      const user = await userModel.findById(userId);
      const cartData  = await user.cartData;
      return res.json({success:true,cartData : cartData});
   }
   catch(error){
      return res.json({success:false,message:error});
   }
}