const express = require("express")
const router = require("./routes/user.route")
const connection = require("./config/db")
const app = express()

app.use(express.json())
app.use("/user",router)

app.set("view engine","ejs")
app.set("views",__dirname + "/views")
app.use(express.static(__dirname + "/public"))

app.listen(8090,()=>{
    console.log("Server is listening....");
    connection()
})