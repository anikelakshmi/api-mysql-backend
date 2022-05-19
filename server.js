const express = require("express");
const cors = require("cors");

const app = express();
//allow incoming calls from this
var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json()); 


app.use(express.urlencoded({ extended: true })); 


app.get("/", (req, res) => {
  res.json({ message: "Welcome to Glossary application." });
});



require("./app/routes/glossary.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
