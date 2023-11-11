const express = require("express")
const app = express()
const port = 3000

app.get("/hello", (req, res) => {
  res.send(
    "<h1>Hello World!</h1>" + JSON.stringify({ message: "Hello World!" })
  )
})

app.listen(port, () => console.log("Server listening on port " + port))
