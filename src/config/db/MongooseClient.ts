import * as mongoose from 'mongoose';

export class MongooseClient {
    private static instance: typeof mongoose | null = null; 

    private constructor() {}

    public static async connect(uri: string | undefined): Promise<typeof mongoose> {
        if (!uri) throw new Error("Database URL error or empty")

        if (MongooseClient.instance) {
            return MongooseClient.instance;
        }

        try {
            const client = await mongoose.connect(uri);
            
            MongooseClient.instance = mongoose; 
            
            return client;
        } catch (error) {
            throw error; 
        }
    }

    public static getClient(): typeof mongoose {
        if (!MongooseClient.instance) {
            throw new Error("Mongoose client not connected. Call MongooseClient.connect(uri) first.");
        }
        return MongooseClient.instance;
    }
}