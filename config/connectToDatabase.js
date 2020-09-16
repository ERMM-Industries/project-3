const mongoose = require("mongoose");
const config = require("config");

const connectToDatabase = async () => {
  //async is just another way to do .then .catch to get errors and prevent crashing of site
  try {
    await mongoose.connect(config.get("mongoURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true, // when this is set to true mongodb will use unique id's for each post and comment
    });
    console.log("MongoDB is connected...");
  } catch (error) {
    console.error(error);
    process.exit(1); //this stops your app
  }
};

module.exports = connectToDatabase;
