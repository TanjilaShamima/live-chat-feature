import mongoose, { Document, Schema, Model } from 'mongoose';

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    picture: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema: Schema<IUser> = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            default: 'https://res.cloudinary.com/djz3p0xms/image/upload/v1628259707/default-profile-picture-300x300_v9njkh.png',
        },
    },
    {
        timestamps: true,
    }
);

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;