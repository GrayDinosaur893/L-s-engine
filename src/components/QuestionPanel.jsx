import { useState, useEffect } from "react";
import questions from "../data/questions";

function QuestionPanel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [scores, setScores] = useState([]);
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [canProceed, setCanProceed] = useState(false);

  const currentQuestion = questions[currentIndex];

  function normalize(text) {
    return text.toLowerCase().replace(/[^\w\s]/g, "").trim();
  }

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

  function showExplanationHandler() {
    setShowExplanation(true);
  }

  // When explanation appears → start timer
  useEffect(() => {
    if (showExplanation) {
      setCanProceed(false);
      const timer = setTimeout(() => {
        setCanProceed(true);
      }, 5000); // 5 seconds reading time

      return () => clearTimeout(timer);
    }
  }, [showExplanation]);

  function nextQuestion() {
    setAnswer("");
    setResult("");
    setShowHint(false);
    setShowExplanation(false);
    setCanProceed(false);
    setCurrentIndex((prev) => prev + 1);
  }

  return (
    <div className="analysis-wrapper">
      <div className="panel">
        <h2>{currentQuestion.question}</h2>

        {/* Lock input once explanation shown */}
        {!showExplanation && (
          <>
            <textarea
              rows="4"
              placeholder="Type your reasoning..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />

            <button className="submit-btn" onClick={checkAnswer}>
              Submit
            </button>

            <button
              className="submit-btn"
              onClick={() => setShowHint((prev) => !prev)}
            >
              {showHint ? "Hide Hint" : "Show Hint"}
            </button>

            {showHint && (
              <div className="hint">
                {currentQuestion.hints?.map((hint, index) => (
                  <p key={index}>• {hint}</p>
                ))}
              </div>
            )}
          </>
        )}

        {result && !showExplanation && (
          <>
            <h3 className="result">{result}</h3>
            <button
              className="submit-btn"
              onClick={showExplanationHandler}
            >
              View Explanation
            </button>
          </>
        )}

        {showExplanation && (
          <>
            <div className="explanation">
              <h4>Explanation:</h4>
              <p>{currentQuestion.explanation}</p>
            </div>

            <button
              className="submit-btn"
              onClick={nextQuestion}
              disabled={!canProceed}
            >
              {canProceed ? "Next Question" : "Please read..."}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default QuestionPanel;