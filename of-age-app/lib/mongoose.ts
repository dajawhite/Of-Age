import mongoose from 'mongoose';

let isConnected = false; // variable to check if mongoose is connected

// Connect to Mongoose
export const connectToDB = async() => {

    // prevents unknown field queries
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) throw new Error('MONGODB_URL not found');
    if(mongoose.connection.readyState === 1) {
        return console.log('Already connected to MongoDB');
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL);

        isConnected = true;
        console.log('Connected to MongoDB')
    } catch(error: any){
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}