const connection = require('./config/db');
const express = require("express");

const cors = require('cors');
const userRouter = require('./routes/user.routes');
const messageRouter = require('./routes/message.routes');
const conversationRouter = require('./routes/conversation.routes');
require('dotenv').config()


const app = express();
app.use(cors({
    origin:['http://localhost:3000']
}))
app.use(express.json())
const PORT = process.env.PORT

app.use('/users', userRouter)
app.use('/messages', messageRouter)
app.use('/conversations',conversationRouter)


app.listen(PORT, async () => {
    try {
        await connection
        console.log("started")
    } catch (error) {
        console.log(error)
    }
})