const Express = require('express')
const Server = Express()
const Mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

Mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database Connected'))
.catch((err) => console.log(err))

Server.use(Express.json())

Server.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})