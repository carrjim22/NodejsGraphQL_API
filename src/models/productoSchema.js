import {Schema, model} from 'mongoose';

const productSchema = new Schema({
    productName: {type:String, required: true},
    description: {type: String, required: true},
    price: Number
}) 

export default model("Product", productSchema);