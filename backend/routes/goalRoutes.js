const express = require("express")
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController")
const router = express.Router()

router.get("/", getGoals)

router.post("/", setGoals)

router.put("/:id", updateGoals)

router.delete("/:id", deleteGoals)

module.exports = router

https://youtu.be/-0exw-9YJBo?list=PLTMNWTDdd5z_CtvbzG6r1f4hjnCaphPTV&t=1516