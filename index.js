//inisialisasi library
const express = require("express")
const app = express()

//import route pegawai
const user = require("./route/user")
app.use("/", user)
const pegawai = require("./route/pegawai")
app.use("/pegawai", pegawai)


//membuat web server dengan port 2000
app.listen(2000, () => {
    console.log("server run on port 2000")
})
