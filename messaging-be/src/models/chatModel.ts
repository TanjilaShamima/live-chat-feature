// chatName
// inGroupChat
// users
// latestMessage
// groupAdmin

import mongoose, { Document, Schema, Model } from 'mongoose';

interface IChat extends Document {
    chatName: string;
    inGroupChat: boolean;
    users: mongoose.Types.ObjectId[];
    latestMessage?: mongoose.Types.ObjectId;
    groupAdmin?: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const chatSchema: Schema<IChat> = new Schema(
    {
        chatName: {
            type: String,
            required: true,
        },
        inGroupChat: {
            type: Boolean,
            required: true,
        },
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
);

const Chat: Model<IChat> = mongoose.model<IChat>('Chat', chatSchema);

export default Chat;