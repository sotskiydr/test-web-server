const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload")
const {router} = require('./router');

const PORT = 9999;
const password = "PlayerDR11";
const DB_HOST = `mongodb+srv://sotskiydr:${password}@cluster0.tuxvo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());
app.use(fileUpload({}))
app.use(express.static('static'))
app.get("/", (req, res) => {
  console.log(req.query);
  res.status(200).json("Is running");
});
app.use('/api',router)

async function startApp() {
  try {
    await mongoose.connect(DB_HOST, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log("Server is running"));
  } catch (error) {

    console.log(error.message);
  }
}
startApp();
