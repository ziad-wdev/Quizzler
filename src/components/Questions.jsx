"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/utils/cn";
import he from "he";

const Questions = ({ questions }) => {
  const [questionNum, setQuestionNum] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const question = questions[questionNum - 1];
  const totalNum = questions.length;

  const questionText = he.decode(question.question);
  const incorrectAnswers = question.incorrect_answers.map((answer) => he.decode(answer));
  const correctAnswer = he.decode(question.correct_answer);
  const answers = [...incorrectAnswers, correctAnswer].sort();

  function handleAnswerClick(answer) {
    setSelectedAnswer(answer);
  }

  const score = useRef(0);
  const router = useRouter();
  function handleNextClick() {
    if (selectedAnswer === correctAnswer) score.current++;
    if (questionNum === totalNum) {
      router.replace(`/results?score=${score.current}&total=${totalNum}`);
      return;
    }
    setQuestionNum((q) => q + 1);
    setSelectedAnswer(null);
  }

  const time = 30;
  const [counter, setCounter] = useState(time);
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((c) => c - 1);
      if (counter === 0) {
        handleNextClick();
        setCounter(time);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className="flex-center w-full flex-col gap-8 text-center text-xl sm:text-2xl lg:text-3xl">
      <p className="-mb-8 text-white">{counter}</p>
      <h1 className="text-white">
        Question {questionNum} of {totalNum}
      </h1>
      <p className="max-w-3xl text-white">{questionText}</p>
      <div className="h-0.5 w-48 bg-white"></div>

      <div className="grid w-full max-w-xl grid-cols-1 gap-4 text-lg sm:text-xl lg:text-2xl">
        {answers.map((answer, index) => (
          <button
            key={answer}
            onClick={() => handleAnswerClick(answer)}
            className={cn(
              "flex cursor-pointer items-center gap-4 rounded-lg bg-white px-6 py-4 text-left transition-all hover:-translate-y-1 hover:shadow-sm",
              {
                "bg-violet-500 text-white": selectedAnswer && selectedAnswer === answer,
              },
            )}
          >
            <div
              className={cn(
                "text-md flex-center aspect-square size-8 rounded-full bg-violet-100 text-violet-600 shadow-sm transition-colors sm:size-10 lg:size-12",
                {
                  "bg-violet-600 text-white": selectedAnswer && selectedAnswer === answer,
                },
              )}
            >
              {String.fromCharCode(65 + index)}
            </div>
            {answer}
          </button>
        ))}
      </div>

      <button
        onClick={handleNextClick}
        disabled={!selectedAnswer}
        className="cursor-pointer rounded-lg bg-white px-6 py-2 transition-all hover:-translate-y-1 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Questions;
