const express = require("express");
const app = express();
const connectToDatabase = require("./config/connectToDatabase");
const cors = require("cors"); // helps prevent an error found on windows

//function that connects express app to database
connectToDatabase();

//we prevent cors policy warning
app.use(cors());

//allows us to use body json thing to create posts (req.body)
app.use(express.json({ extended: false }));

//Routes
app.use("/api/posts", require("./routes/posts.js"));
app.use("/api/users", require("./routes/users.js"));

//we specify on which port our app will run (depends if heroku will give us port or we specify on port 3000)
let PORT = process.env.PORT || 3000;

//method to specify on which port we want our app to be with callback function to see if method works
app.listen(PORT, () => console.log(`Server is on port: ${PORT}`));
