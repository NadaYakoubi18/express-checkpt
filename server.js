const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const path = require("path");
const app = express();

const date = new Date();
const workingdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const day = workingdays[date.getDay() - 1];

const hour = date.getHours();
const x = (req, res, next) => {
  if (workingdays.includes(day) && hour >= 9 && hour <= 17) {
    next();
  } else {
    res.send("arja3 ghodwa");
  }
};
app.use(x);
app.listen(5000);

app.use("/", router);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

router.get("/", (req, res) => res.render("home"));
router.get("/Aboutus", (req, res) => res.render("Aboutus"));
router.get("/Ourservices", (req, res) => res.render("Our services"));
