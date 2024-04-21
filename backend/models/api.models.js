import mongoose,{Schema} from 'mongoose'

const apiSchema= new mongoose.Schema({

    value:{
        type:String,
        required:true,
        unique:true
    },
    isAssigned:{
        type:Boolean,
        default:false
    },
    lastKeepAlive:{
        type:Date
    }
},{timestamps:true})

export const api =mongoose.model( "api", apiSchema) 