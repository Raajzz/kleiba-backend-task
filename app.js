const express = require("express")
const app = express()

app.get("/", (req, res)=>{
  res.status(200).json({
    "success":true,
    "message": "It works!"
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
  console.log(`app is listening on port ${PORT}`);
})