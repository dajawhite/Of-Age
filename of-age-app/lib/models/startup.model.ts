import mongoose from "mongoose";

const startupSchema = new mongoose.Schema({
    name: {type: String, required: true},
    university: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'School'},
    founders: [
        {
            type: String, 
            required: true
        }
    ],
    website: {
        type: String,
        required: true,
    },
    article: {type: String}
    
});

// The first time models.Thread won't exist so the fallback is creating the model
const Startup = mongoose.models.Startup || mongoose.model('Startup', startupSchema);

export default Startup;