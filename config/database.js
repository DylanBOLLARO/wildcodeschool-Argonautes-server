const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

module.exports.connectToMongoDB = async () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(console.log("Connecté à MongoDB"));
  } catch (error) {
    console.log(error);
  }
};
