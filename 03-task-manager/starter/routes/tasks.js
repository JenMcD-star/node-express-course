const express = require("express");
const router = express.Router();

const {
  getAlltasks,
  createtask,
  gettask,
  updateask,
  deletetask,
} = require("../controllers/tasks");

router.route("/").get(getAlltasks).post(createtask);
router.route("/:id").get(gettask).patch(updateask).delete(deletetask);

module.exports = router;
