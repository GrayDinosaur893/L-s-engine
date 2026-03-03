import { useState } from "react";
import questions from "../data/questions";

function QuestionPanel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [scores, setScores] = useState([]);

  const currentQuestion = questions[currentIndex];

  // Normalize helper
  function normalize(text) {
    return text.toLowerCase().replace(/[^\w\s]/g, "").trim();
  }

  // When finished → show analysis
  if (!currentQuestion) {
    const average =
      scores.length > 0
        ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
        : 0;

    return (
      <div className="analysis-wrapper">
        <div className="panel">
          <h2>Analysis Report</h2>
          <p>Logical Alignment: {average}%</p>
          <p>Emotional Influence: {100 - average}%</p>
        </div>
      </div>
    );
  }

  function checkAnswer() {
    if (!answer.trim()) {
      setResult("Please enter reasoning.");
      return;
    }

    const userText = normalize(answer);

    const matched = currentQuestion.keyPoints.filter((point) => {
      const normalizedPoint = normalize(point);
      return userText.includes(normalizedPoint);
    });

    const percentage = Math.round(
      (matched.length / currentQuestion.keyPoints.length) * 100
    );

    setResult(`${percentage}% logical alignment`);
    setScores((prev) => [...prev, percentage]);
  }

  function nextQuestion() {
    setAnswer("");
    setResult("");
    setCurrentIndex((prev) => prev + 1);
  }

 return (
  <div className="analysis-wrapper">
    <div className="panel">
      <h2>{currentQuestion.question}</h2>

      <textarea
        rows="4"
        placeholder="Type your reasoning..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button className="submit-btn" onClick={checkAnswer}>
        Submit
      </button>

      {result && (
        <>
          <h3 className="result">{result}</h3>
          <button className="submit-btn" onClick={nextQuestion}>
            Next Question
          </button>
        </>
      )}
    </div>
  </div>
);
}

export default QuestionPanel;