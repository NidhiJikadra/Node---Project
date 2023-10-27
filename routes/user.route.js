const {Router} = require("express")
const { home } = require("../controllers/user.controller")
const router = Router()

router.get("/",home)
app.post("/signup",)

module.exports = router