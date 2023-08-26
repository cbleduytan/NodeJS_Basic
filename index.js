const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(morgan("combined"));

const PORT = 3000;

app.get("/", (req, res) => res.send(`<h1 style="color: red">Hello World</h1>`));
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
