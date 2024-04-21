import mongoose from 'mongoose';
import { DB_NAME } from '../src/constants.js';

const connecDB=async()=>{

try{
  const connectionInstance=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  console.log(`MongoDb connected ${connectionInstance.connection.host}`);

}
catch(err){

    console.log(err);

}
}

export default connecDB