import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: [],
        }
    ]
},
    { timestamps: true }
);

export default Conversation = mongoose.model("Conversation", conversationSchema);