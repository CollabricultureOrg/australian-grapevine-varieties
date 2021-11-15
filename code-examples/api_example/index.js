const data = require("./data/australian-grape-varieties.json");

const express = require("express");

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Welcome to wine variety api");
});

app.get("/all", (req, res) => {
  res.send(data); // send back all data
});

app.get("/top", (req, res) => {
  let query = data.filter((item) => !!item.top_10);
  res.send(query);
});

app.get("/:id", (req, res) => {
  let id = parseInt(req.params.id); // id as number

  let query = data.filter((item) => {
    if (item.id === parseInt(id)) return item;
  }); // filter items to return selected item by id

  if (query.length > 0) {
    res.send(query); // if exists send item
  } else {
    res.sendStatus(404); // send 404 not found
  }
});

app.listen(PORT, () => {
  console.log(`Example Api listening at http://localhost:${PORT} `);
});
