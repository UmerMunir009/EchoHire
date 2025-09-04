const router = require("express").Router();
const {validate}=require('./../../middlewares/validator')
const geminiServices = require("../../services/gemini/index");


router.post("/gemini/generate-questions", geminiServices.generateQuestions); 


module.exports = router;
