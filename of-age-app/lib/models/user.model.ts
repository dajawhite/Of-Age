import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    university: {type: String, required: true},
    onboarded: {type: Boolean, default: false},
    number: {type: String },
    iMessage: {type: Boolean}, // TODO: selected by user in onboarding
    email: {type: String},
    x: {type: String},
    instagram: {type: String},
    snapchat: {type: String},

});

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User;