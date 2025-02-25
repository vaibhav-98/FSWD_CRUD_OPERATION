const express = require("express")
//const dotenv = require(dotenv)
const app = express()
const userRoute = require('./routes/userRoute')


// global midd
app.use(express.json())

app.use('/api/user', userRoute )

app.use('/test/abc', (req,res) => {
    res.status(200).json({data: "req sent succesfully"})
})


const PORT = 3000
app.listen(PORT, () => {
    console.log(`server run at port ${PORT} `)
})