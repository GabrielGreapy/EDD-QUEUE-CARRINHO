const express = require("express")
const app = express()
const PORT = 3000

const pageRouter = require("./public/routes/pages")

app.use(express.static("public"))

app.use("/", pageRouter)

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})