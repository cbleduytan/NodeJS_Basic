const express = require("express");
const app = express();
const past = require("./past");
const future = require("./future");

app.get("/:age", (req, res) => {
  res.send(past(req.params.age, 10) + future(req.params.future, 10));
  //   const age = req.params.age;
  //   if (isNaN(age)) {
  //     res.send("Invalid age");
  //   } else {
  //     res.send(past(age, 10) + future(age, 10));
  //   }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serve is running on ${PORT}`);
});
