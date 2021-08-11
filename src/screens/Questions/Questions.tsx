import React, { useState, useEffect } from "react";
import { HandleRandomQuestion } from "../../api/axios";

import {
  StyledDiv,
  StyledMainDiv,
  StyledTryAgainButton,
} from "./styledQuestions";

function Questions() {
  const [question, setQuestion] = useState<any>();

  const [countryQuestion, setCountryQuestion] = useState<any>([]);

  const [rightQuestion, setRightQuestion] = useState<any>();

  const [countRightAnswers, setCountRightAnswers] = useState<any>(0);

  const [flagImage, setFlagImage] = useState<any>();

  const [wrongAnswer, setWrongAnswer] = useState<any>(false);

  const [isQuestionAnswered, setIsQuestionAnswered] = useState<boolean>(false);

  async function firstQuestion() {
    const randomNum = Math.floor(Math.random() * 249);

    const Question = await HandleRandomQuestion();

    setQuestion(`${Question[randomNum].capital} is the capital of`);

    let countryNames = [
      Question[randomNum].name,
      Question[Math.floor(Math.random() * 249)].name,
      Question[Math.floor(Math.random() * 249)].name,
      Question[Math.floor(Math.random() * 249)].name,
    ];
    countryNames = countryNames.sort(() => Math.random() - 0.5);

    setCountryQuestion(countryNames);

    setRightQuestion(Question[randomNum].name);

    setFlagImage("");
  }

  async function secondQuestion() {
    const randomNum = Math.floor(Math.random() * 249);

    const Question = await HandleRandomQuestion();

    setQuestion("This flag is from");

    setFlagImage(Question[randomNum].flag);

    let countryNames = [
      Question[randomNum].name,
      Question[Math.floor(Math.random() * 249)].name,
      Question[Math.floor(Math.random() * 249)].name,
      Question[Math.floor(Math.random() * 249)].name,
    ];
    countryNames = countryNames.sort(() => Math.random() - 0.5);

    setCountryQuestion(countryNames);

    setRightQuestion(Question[randomNum].name);
  }

  function handlePickFunction() {
    if (wrongAnswer === true) {
      setCountRightAnswers(0);
      setWrongAnswer(false);
    }

    const randomQuestion = Math.floor(Math.random() * 10);

    if (randomQuestion < 5) {
      return firstQuestion();
    } else {
      return secondQuestion();
    }
  }

  useEffect(() => {
    handlePickFunction();
  }, []);

  function AnsweredQuestion(event: any) {
    if (event.target.innerText === rightQuestion) {
      if (isQuestionAnswered === false) {
        setIsQuestionAnswered(true);

        event.target.style.backgroundColor = "#6ac188";
        event.target.style.borderColor = "#6ac188";

        setTimeout(() => {
          setCountRightAnswers(countRightAnswers + 1);
          handlePickFunction();
          event.target.style.backgroundColor = "";
          event.target.style.borderColor = "";

          setIsQuestionAnswered(false);
        }, 1000);
      }
    } else {
      if (isQuestionAnswered === false) {
        event.target.style.backgroundColor = "#e38083";
        event.target.style.borderColor = "#e38083";

        setIsQuestionAnswered(true);

        setTimeout(() => {
          setWrongAnswer(true);
          setIsQuestionAnswered(false);
        }, 1000);
      }
    }
  }

  return (
    <StyledMainDiv
      style={{
        backgroundImage: `url(https://data.maglr.com/2989/issues/26375/348256/assets/media/307cd7895e55fcb23a59754d4ee9cccceec5a431300d9c6c478ca3fa6c5d60c3.png)`,
      }}
    >
      <h1 style={{ color: "white", marginRight: 150 }}>COUNTRY QUIZ</h1>

      <div
        style={{
          backgroundColor: "white",
          borderRadius: 30,
          width: "20%",
          height: "60%",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "flex-end",
            marginTop: -90,
          }}
        >
          <img
            src="https://country-quiz-one.vercel.app/img/undraw_adventure_4hum%201.svg"
            alt=""
          />
        </div>
        {wrongAnswer === false ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {question && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {flagImage ? (
                  <img
                    src={flagImage}
                    alt=""
                    style={{ width: 300, height: 200, marginTop: 20 }}
                  ></img>
                ) : (
                  <p />
                )}

                <h2 style={{ color: "#36517a" }}>{question}</h2>

                <StyledDiv onClick={AnsweredQuestion}>
                  <span style={{ paddingLeft: 15, pointerEvents: "none" }}>
                    {countryQuestion[0]}
                  </span>
                </StyledDiv>

                <StyledDiv onClick={AnsweredQuestion}>
                  <span style={{ paddingLeft: 15, pointerEvents: "none" }}>
                    {countryQuestion[1]}
                  </span>
                </StyledDiv>

                <StyledDiv onClick={AnsweredQuestion}>
                  <span style={{ paddingLeft: 15, pointerEvents: "none" }}>
                    {countryQuestion[2]}
                  </span>
                </StyledDiv>

                <StyledDiv onClick={AnsweredQuestion}>
                  <span style={{ paddingLeft: 15, pointerEvents: "none" }}>
                    {countryQuestion[3]}
                  </span>
                </StyledDiv>
              </div>
            )}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              src="https://country-quiz-one.vercel.app/img/undraw_winners_ao2o%202.svg"
              alt=""
              style={{ marginTop: 20 }}
            />

            <h2 style={{ color: "purple" }}>Results</h2>

            <div>
              <p
                style={{
                  display: "flex",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: -30,
                }}
              >
                You got
                <h1
                  style={{
                    padding: 10,
                    color: "#79d196",
                  }}
                >
                  {countRightAnswers}
                </h1>
                correct answers!
              </p>
            </div>

            <StyledTryAgainButton onClick={handlePickFunction}>
              Try again
            </StyledTryAgainButton>
          </div>
        )}
      </div>
    </StyledMainDiv>
  );
}

export default Questions;
