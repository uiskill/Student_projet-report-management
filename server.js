const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./.env" });
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const Contact=require("./models/Contact")

const app = express();
app.use(express.json());
connectDB(); // Connect to databse
app.use(cors());
// API Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;


app.post("/contact", async (req, res) => {
  const contact = new Contact();
  contact.name = req.body.name;
  contact.email = req.body.email;
  contact.mobile = req.body.mobile;
  contact.message = req.body.message;
  const doc = await contact.save();
  console.log(req.body);
  console.log(doc);
  if (doc.name !== "" && doc.email !== "" && doc.mobile !== "" && doc.message !== "") {
    res.json({ Status: true });
  } else {
    res.json({ Status: false });
  }
});










const server = app.listen(PORT, () =>
  console.log(`Server running on PORT ${PORT}`)
);

// Handling server errors with clean error messages
process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
