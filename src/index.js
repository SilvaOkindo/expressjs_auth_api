const express = require("express")
const env = require("dotenv").config()
const dbConnect = require("./config/db_connection")
const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")


dbConnect()


const app = express()

// middleware
app.use(express.json())


// routes
app.use("/api/auth", authRoutes)


app.use("/api/user", userRoutes)



// start the serve 

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})