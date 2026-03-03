import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/evaluate", async (req, res) => {
  const { question, userAnswer } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4.1",
      messages: [
        {
          role: "system",
          content: "You are a strict logic evaluator. Respond only VALID or INVALID."
        },
        {
          role: "user",
          content: `
Question: ${question}
User Answer: ${userAnswer}

Is the reasoning logically correct?
`
        }
      ]
    });

    res.json({ result: response.choices[0].message.content });
  }catch (err) {
  console.error("OPENAI ERROR:", err);
  res.status(500).json({ error: err.message });
}
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});