const express = require("express");

const app = express();

const PORT = 3030;
let DATA = [
  {
    name: "Joe Belfiore",
    status: "In a world far away",
  },
  {
    name: "Bill Gates",
    status: "In a world far away",
  },
  {
    name: "Mark Zuckerberg",
    status: "In a world far away",
  },
  {
    name: "Maricca Mayer",
    status: "In a world far away",
  },
  {
    name: "Sundar Pichai",
    status: "In a world far away",
  },
  {
    name: "Elon Mush",
    status: "In a world far away",
  },
  {
    name: "Dave",
    status: "In a world far away",
  },
  {
    name: "Bhavesh",
    status: "In a world far away",
  },
  {
    name: "Aman Gupta",
    status: "In a world far away",
  },
  {
    name: "Anupam Mittal",
    status: "In a world far away",
  },
];
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/api/health", (req, res) => {
  res.json({ message: "Server running!!" });
});

app.get("/api/data", (req, res) => {
  const page = req.query.page;
  console.log("---------------------------------------------");
  console.log({ page: Number(page) });
  res.json({
    data: DATA.slice(page * 5, page * 5 + 5),
  });
});

app.post("/api/create", (req, res) => {
  console.log(req.query);
});
