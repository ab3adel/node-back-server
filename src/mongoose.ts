import mongoose, { Mongoose } from 'mongoose';
import logger from './logger';
//etMEmPCgLqQovT8j

export const MONGODB_URL= `mongodb+srv://new_user:4iYQeaygCupdbcVr@cluster0.31pbuck.mongodb.net/`
const test ='mongodb://127.0.0.1:27017'
export default  async function () :Promise<any>{
  console.log ('start connecting')
await mongoose.connect(
  MONGODB_URL
  )
  
  .catch(err => {
    logger.error('err',err);
    process.exit(1);
  });

}
