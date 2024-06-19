import mongoose, { ConnectOptions } from 'mongoose';
import { appConfig } from '../config/constant';


const options: ConnectOptions = {
    socketTimeoutMS: 30000,
    connectTimeoutMS: 30000,
};

mongoose.set('strictQuery', true);

const connectDatabase = async (): Promise<void> => {
    try {
        await mongoose.connect(appConfig.db.mongoDBURL as string, options);
        console.log('Connected to database');
    } catch (err) {
        console.error(`Failed to connect to database: ${err}`);
        process.exit(1);
    }
};

export default connectDatabase;
