const mongoose = require('mongoose');

const colorschema=new mongoose.Schema([{
    Colour: {type: String},
    imageColor: {type: String},
}])
const ShoesSchema = new mongoose.Schema({
    Name: {type: String,required: true},
    Brand:String,
    modelNumber:String,
    Price:String,
    Color:[colorschema],
    Size:String
     });
mongoose.model('Shoe', ShoesSchema,'Shoes');