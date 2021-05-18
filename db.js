const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect("mongodb://localhost:27017/project_3_v01", options).then(
  () => {
    console.log("DB Connected");
  },
  (err) => {
    console.log(err);
  }
);
