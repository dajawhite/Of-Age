import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    university: {type: String, required: true},
    onboarded: {type: Boolean, default: false},
    number: {type: String },
    iMessage: {type: String}, 
    uniEmail: {type: String},
    x: {type: String},
    instagram: {type: String}
});

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User;