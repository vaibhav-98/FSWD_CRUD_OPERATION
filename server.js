const express = require("express")
 require("dotenv").config()
const databaseConnect = require('./config/databaseConfig')
const app = express()
const userRoute = require('./routes/userRoute')


databaseConnect()

// global midd
app.use(express.json())

app.use('/api/user', userRoute )

app.use('/test/abc', (req,res) => {
    res.status(200).json({data: "req sent succesfully"})
})


const PORT = 3000
app.listen(process.env.PORT, () => {
    console.log(`server run at port ${PORT} `)
})