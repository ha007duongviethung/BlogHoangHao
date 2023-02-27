require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const post = require("./routers/post.router");
const slug = require("./routers/slug.router");
const type = require("./routers/type.router");

const app = express();
const PORT = process.env.PORT || 2507;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to the database!`))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

app.use("/api/post", post);
app.use("/api/slug", slug);
app.use("/api/type", type);

app.listen(PORT, () => {
  console.log(`Server TodoList running at http://127.0.0.1:${PORT}`);
});
