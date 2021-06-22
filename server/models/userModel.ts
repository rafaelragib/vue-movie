import mongoose from 'mongoose';

export type userType= {
    username:string;
    password:string;
  }
const userSchema=new mongoose.Schema<userType>({

    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

    });
export const user= mongoose.model<userType>('users', userSchema);
