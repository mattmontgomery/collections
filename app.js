const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.json({
    test: true
  });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
