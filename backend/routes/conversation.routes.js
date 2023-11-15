const conversationModel = require("../models/conversation.model");
const express = require("express");

const conversationRouter = express.Router();



conversationRouter.post("/", async (req, res) => {
    const { senderId, receiverId } = req.body;
  try { 
    const existingConversation = await conversationModel.findOne({
      members: { $all: [senderId, receiverId] },
    });
    if (!existingConversation) {
      const newConversation = await conversationModel.create({
        members: [senderId, receiverId],
      });

      return res.send(newConversation);
    }

    res.send(existingConversation);
  } catch (error) {
    console.log(error);
    res.send({ message: "Error in post conversation" });
  }
});

conversationRouter.get("/:userId", async (req, res) => {
    const {userId} = req.params.userId
  try {
    const userConversations = await conversationModel.find({
      members: { $in: [userId] },
    });
    res.send(userConversations);
  } catch (err) {
    console.log(err);
    res.send({ message: "Error while getting conversation" });
  }
});

module.exports = conversationRouter;
