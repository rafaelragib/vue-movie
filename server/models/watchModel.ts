import mongoose from 'mongoose';


export type watchType= {
    username:string;
    watchList:string[];
  }
const watchSchema=new mongoose.Schema<watchType>({

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    watchList:[{
        type:String
    }]
        

    });
export const watchList= mongoose.model<watchType>('watchlist', watchSchema);
