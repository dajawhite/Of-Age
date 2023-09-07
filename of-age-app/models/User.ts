import { MongoClient } from 'mongodb';

// Replace with your MongoDB connection string
const MONGODB_URI = 'mongodb+srv://dajaw:<E3zuWjUChs3VTphk>@cluster0.6qcivne.mongodb.net/?retryWrites=true&w=majority';
const MONGODB_DB = 'Cluster0';

let cachedClient: MongoClient | null = null;

export async function connectToDatabase() {
    if (cachedClient) {
        return { client: cachedClient };
    }

    const client = await MongoClient.connect(MONGODB_URI);

    cachedClient = client;
    return { client };
}
