const express = require("express")
const app = express()
const toyRoutes = require("./routes/toyRoutes")
const userRoutes = require("./routes/userRoutes")

app.use("/api/v1/toy", toyRoutes);
app.use("/api/v1/user", userRoutes);

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
  console.log(`app is listening on port ${PORT}`);
})