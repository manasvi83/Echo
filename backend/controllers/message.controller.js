import { Conversation } from "../models/conversation.model.js"
import { Message } from "../models/message.model.js"
// import { ObjectId } from "mongodb";


export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverID } = req.params;
        const senderID = req.user._id;

        let conversation = await Conversation.findOne({
            members: { $all: [senderID, receiverID] },

        });
        console.log(conversation);
        if (!conversation) {
            conversation = await Conversation.create({
                members: [senderID, receiverID],
            });
        }

        const newMessage = new Message({
            senderID,
            receiverID,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // await conversation.save();
        // await newMessage.save();

        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("error in message controller", error.message);
        res.status(500).json({ error: "internal server error" })
    }
}

export const getMessages = async (req, res) => {
	try {
		const { id: userToChatId } = req.params;
		const senderID = req.user._id;

		const conversation = await Conversation.findOne({
			members: { $all: [senderID, userToChatId] },
		}).populate("messages"); 
        console.log(conversation);
		if (!conversation) return res.status(200).json({ error: "Conversation not found" });

		const messages = conversation.messages;
		res.status(200).json(messages);
	} catch (error) {
		console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};