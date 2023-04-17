import { useState, useEffect } from "react";
import dummy from "../db/vocabulary.json";
import { useParams, useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function RandomTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [wordList, setWordList] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [choices, setChoices] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [totalWords, setTotalWords] = useState(0);

  const navigate = useNavigate();

  const day = useParams().day;

  useEffect(() => {
    const filteredWordList = dummy.words.filter((word) => word.day === day);
    shuffleArray(filteredWordList);
    setWordList(filteredWordList);
    setTotalWords(filteredWordList.length);
  }, [day]);

  useEffect(() => {
    if (wordList.length > 0) {
      updateQuestionAndChoices(wordList);
    }
  }, [currentQuestion, wordList]);

  const updateQuestionAndChoices = (filteredWordList) => {
    const currentQuestionWord = filteredWordList[currentQuestion];
    setQuestion(currentQuestionWord.English);
    setAnswer(currentQuestionWord.Meaning);

    const otherChoices = filteredWordList
      .filter((word) => word !== currentQuestionWord)
      .map((word) => word.Meaning)
      .slice(0, 3);

    const randomizedChoices = [currentQuestionWord.Meaning, ...otherChoices];
    shuffleArray(randomizedChoices);
    setChoices(randomizedChoices);
  };

  const handleAnswer = (selectedAnswer) => {
    setSelectedAnswer(selectedAnswer);
    setShowResult(true);
    if (selectedAnswer === answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer(null);
    if (currentQuestion >= wordList.length - 1) {
      alert(
        `${wordList.length} 중에서 ${
          correctAnswers + (selectedAnswer === answer ? 1 : 0)
        }개 정답!`
      );
      setQuizFinished(true);
    } else {
      // Remove the answered word from the filteredWordList.
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Alert
        key={"warning"}
        variant={"warning"}
        style={{ textAlign: "center" }}
      >
        <h3>{question}</h3>
      </Alert>
      {choices.map((choice) => (
        <button
          key={choice}
          onClick={() => handleAnswer(choice)}
          disabled={showResult || quizFinished}
          className={
            selectedAnswer === choice ? "selected buttonChoice" : "buttonChoice"
          }
        >
          {choice}
        </button>
      ))}
      {showResult && (
        <div>
          <p>
            {selectedAnswer === answer ? (
              <span style={{ color: "green" }}>구우웃!</span>
            ) : (
              <span style={{ color: "red" }}>땡!</span>
            )}
          </p>
          <p>
            정답: <strong>{answer}</strong>
          </p>
          <p>
            {currentQuestion + 1} / {totalWords}
          </p>
        </div>
      )}
      {!quizFinished && (
        <button onClick={handleNextQuestion} disabled={!showResult}>
          다음 문제
        </button>
      )}
      {quizFinished && <button onClick={handleBackToHome}>Back to Home</button>}
    </div>
  );
}

export default RandomTest;
