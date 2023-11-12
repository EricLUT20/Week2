const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

app.get("/hello", (req, res) => {
  res.json({ msg: "Hello world" })
})

app.get("/echo/:id", (req, res) => {
  let id = req.params.id
  res.json({ id })
})

app.post("/sum", (req, res) => {
  let { numbers } = req.body
  let sum = numbers.reduce((total, number) => total + number, 0)
  res.json({ sum })
})

app.listen(port, () => console.log("Server listening on port " + port))
