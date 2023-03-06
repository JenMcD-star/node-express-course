const express = require("express");
const router = express.Router();
const { login, hello } = require("../controllers/main");
const authenticate = require("../middleware/authenticate");

router.route("/logon").post(login);

router.route("/hello").get(authenticate, hello);

router.all("*", (req, res) => {
  res.send("Sorry, that page does not exist");
});

//post /api/v1/logon
//get /api/vi/hello

module.exports = router;
