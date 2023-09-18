import express from "express";
import Question from "../model/Question.js";
import { getQuestions } from "../controller/getQuestions.js";
import { addQuestion } from "../controller/addQuestion.js";
import { updateQuestion } from "../controller/updateQuestion.js";
const router = express.Router();
router.get("/questions", getQuestions);

router.post("/questions", addQuestion);

router.put("/questions", updateQuestion);

router.post("/questionPage", function (req, res) {
  res.send("You are sending a post request to the question page!");
});

export default router;