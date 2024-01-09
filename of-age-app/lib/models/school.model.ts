import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    startups: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Startup',
            required: true,
        }
    ],
    
});

// The first time models.Thread won't exist so the fallback is creating the model
const School = mongoose.models.School || mongoose.model('School', schoolSchema);

export default School;

//TODO: FORM TO REGISTER YOUR STARTUP!