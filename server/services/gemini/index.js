const asyncErrorHandler = require("../../utils/asyncErrorHandler");
const { STATUS_CODES, TEXTS } = require("../../config/constants");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateQuestions = asyncErrorHandler(async (req, res) => {
  const { paragraph } = req.body;

  if (!paragraph) {
    return res.status(STATUS_CODES.BAD_REQUEST).json({
      statusCode: STATUS_CODES.BAD_REQUEST,
      message: "Paragraph is required",
    });
  }
  
  const prompt = `
Read the following conversation and identify the main learning topic(s) discussed 
(for example: "Data Structures and Algorithms in Java"). 

Generate exactly 10 multiple-choice questions that test knowledge of those topic(s), 
NOT about the conversation itself. 
Do not include questions about greetings, who said what, or the order of dialogue. 
The questions must only assess subject knowledge.

Output must be valid JSON only (no markdown, no extra text).
Each object in the array must include:
- "question": the question text
- "options": an array of 4 possible answers
- "answer": the correct option

Conversation: """${paragraph}"""
`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    let questions;
    try {
      let cleanText = text.replace(/```json|```/g, "").trim();
      questions = JSON.parse(cleanText);
    } catch (err) {
      questions = { raw: text };
    }

    res.status(STATUS_CODES.SUCCESS).json({
      statusCode: STATUS_CODES.SUCCESS,
      message: TEXTS.SUCCESS,
      data: questions,
    });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      statusCode: STATUS_CODES.INTERNAL_SERVER_ERROR,
      message: TEXTS.ERROR,
      error: error.message,
    });
  }
});

module.exports = {
  generateQuestions,
};
