const connection = require("./config/db");
const express = require("express");
const http = require("http");

const cors = require("cors");
const userRouter = require("./routes/user.routes");
const messageRouter = require("./routes/message.routes");
const conversationRouter = require("./routes/conversation.routes");
const { log } = require("console");
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());
const PORT = process.env.PORT;

app.use("/users", userRouter);
app.use("/messages", messageRouter);
app.use("/conversations", conversationRouter);

const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on('connection', (socket) => {
    socket.on('connected', (data) => {
        //    console.log(data)
        
   })
    socket.on('newMessage', (data) => {
       console.log(data)
   })
})

server.listen(PORT, "0.0.0.0", async () => {
  try {
    await connection;

    console.log("database connected");
  } catch (error) {
    console.log("error while listening", error);
  }
});
