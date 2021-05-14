const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const persons = require("./routes/persons");
const bodyparser = require("body-parser");

const app = express();

// connect Database
connectDB();

// Server static assets for Production
if (process.env.NODE_ENV === "production") {
  // Set Static Folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(express.json());

app.use(bodyparser.json());

app.use(require("./routes/persons"));

app.get("/", (req, res) => {
  res.send("Welcome to Persons List Server");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
