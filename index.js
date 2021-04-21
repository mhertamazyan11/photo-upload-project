const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const postRoutes = require("./routes/posts.js");

const app = express();

// limita drac vor shat mec nkarner chqcenq
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// heto nayel cors-y incha
app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://mher:mher123@cluster0.biv4m.mongodb.net/memories?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("mongoose is connected!"))
  .catch((err) => console.log("something goes wrong!!!"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.listen(PORT, () => console.log(`Server running on port:  ${PORT}`));
