import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "name required"],
        minLength :  [3, "name must contain at least 3 characters!"]
    },
    email : {
        type : String,
        required : [true, "email required"],
       validate : [validator.isEmail, "Please provide valid email"]
    },
    subject : {
        type : String,
        require : [true, "subject required"],
        minLength :  [5, "subject must contain at least 5 characters!"]
    },
    message : {
        type : String,
        required : [true, "message required"],
        minLength :  [10, "name must contain at least 10 characters!"]
    }
})

export const Message = mongoose.model("Message", messageSchema);