import mongoose  from "mongoose";

const imageData = mongoose.Schema({
    name:String,
    desc:String,
    img: {
        data:Buffer,
        contentType:String
    }
});

export default mongoose.model('ImageData', imageData);