import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

const register = async (req,res)=>{
   const found = await userModel.find({email:req.body.email})
   const {email,password,name} = req.body;
   if(found.length!=0){
      return res.json({success:false,message:'An Account already exists in this mail'});
   }
   else{
      if(!validator.isEmail(email)){
         return res.json({success:false,message:'Please enter a valid Email'})
      }
      if(!validator.isLength(password,{min:8})){
         return res.json({success:false,message:'Enter a strong password'})
      }
      const salt =await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password,salt)
      const user = await userModel.create({
         email,
         password:hashedPassword,
         name
      })
      const token = jwt.sign({id:user._id},'Secret_Key');
      res.cookie('token',token).json({success:true,message:'Account created',token:token});
   }
   res.json({success:false,message:'Something went wrong here'});
}

const login = async(req,res)=>{
   const {email,password} = req.body;
   const found = await userModel.find({email})
   console.log(found);
   if(found && bcrypt.compare(password,found[0].password)){
      const token = jwt.sign({ id: found[0]._id }, "Secret_Key");
      res
        .cookie("token", token)
        .json({ success: true, message: "Login Sucessfull", token: token });
   }
   else{
      res.json({success:false,message:'Enter a valid gmail/password'});
   }
}

export {register,login};