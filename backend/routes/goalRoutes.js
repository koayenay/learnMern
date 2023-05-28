const express = require("express")
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController")
const router = express.Router()

router.route("/").get(getGoals).post(setGoals)
router.route("/:id").delete(deleteGoals).put(updateGoals)

module.exports = router

// https://youtu.be/-0exw-9YJBo?list=PLTMNWTDdd5z_CtvbzG6r1f4hjnCaphPTV&t=1516
