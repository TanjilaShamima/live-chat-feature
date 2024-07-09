import mongoose, { Document, Schema, Model } from 'mongoose';

interface IMessage extends Document {
    sender: mongoose.Types.ObjectId;
    chat: mongoose.Types.ObjectId;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

const messageSchema: Schema<IMessage> = new Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        chat: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chat',
            required: true,
        },
        content: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Message: Model<IMessage> = mongoose.model<IMessage>('Message', messageSchema);

export default Message;