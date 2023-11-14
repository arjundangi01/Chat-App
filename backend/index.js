const connection = require('./config/db');
const cors = require('cors');
const userRouter = require('./routes/user.routes');
require('dotenv').config()


const app = require('express')();
app.use(cors({
    origin:['http://localhost:3000']
}))
const PORT = process.env.PORT

app.use('/users',userRouter)


app.listen(PORT, async () => {
    try {
        await connection
        console.log("started")
    } catch (error) {
        console.log(error)
    }
})