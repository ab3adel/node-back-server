// students-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import getMongoose from '../mongoose'
import mongooseClient,{ Model, Mongoose, Types ,Schema} from 'mongoose';
import  paginate from 'mongoose-paginate-v2'
const imageSchema = new mongooseClient.Schema({
  name: String,
  desc: String,
  data: Buffer,
  contentType: String
  
});
export default  function (): Model<any> {
  const modelName = 'students';

  const schema = new mongooseClient.Schema({
    id:{ type: Types.ObjectId},
    _id:{type:String,required:true},
    product_name: {type:String, required:true },
    price: {type:Number, required:true},
    quantity: {type:Number, required:true},
    image:imageSchema,
    filename:{type:String}
  
  }, {
    timestamps: true
  });
schema.plugin(paginate)
  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }
  return mongooseClient.model<any>(modelName, schema);
}
