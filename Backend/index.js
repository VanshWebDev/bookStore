import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(
  cors({
    origin: [
      "https://capable-daffodil-e33f70.netlify.app/",
      "https://capable-daffodil-e33f70.netlify.app",
      "https://generalbookstore.netlify.app/",
      "https://generalbookstore.netlify.app",
      "http://localhost:5173",
      "https://6635115c470e751a5dc5ab88--capable-daffodil-e33f70.netlify.app/"
    ],
  })
);
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
