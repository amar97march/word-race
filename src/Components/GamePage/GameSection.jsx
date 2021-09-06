import React, { useEffect, useState } from "react";
import "../../css/game-section.css";
import ProgressBar from "./Progressbar";
import KeyboardEventHandler from "react-keyboard-event-handler";
import Countdown from "./Countdown";

const GameSection = () => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [multiplier, setMultiplier] = useState(1);
  const [percentage, setPercentage] = useState(0);
  const [currentWord, setCurrentWord] = useState([]);
  const [wordList, setWordList] = useState([]);
  const [wordListQueue, setWordListQueue] = useState([]);
  const [matched_index, setMatched_index] = useState(0);
  const [seconds, setSeconds] = React.useState(5);
  // Timer declaration

  const wordSize = 20;

  const addWord = () => {
    if (wordListQueue.length === 0 && wordList.length === 0) {
      alert("Winner");
      setSeconds(0);
    } else {
      if (wordListQueue.length > 0) {
        setWordList((prevItems) => [
          wordListQueue[wordListQueue.length - 1],
          ...prevItems,
        ]);
        setWordListQueue(wordListQueue.slice(0, -1));
      }
      clearInterval();
      setSeconds(5);

      if (percentage + 10 >= 100) {
        alert("You failed");
        setSeconds(0);
      } else {
        setPercentage(wordList.length * 10);
      }
    }
  };

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      addWord();

      if (wordList.length === 8) {
        setPercentage(100);
      } else {
        setPercentage(wordList.length * 10);
      }
      //   setSeconds(5);
    }
  }, [seconds]);

  const fetchItems = () => {
    var wordList_data = [
      "Cat",
      "Dog",
      "Camel",
      "Cow",
      "Zebra",
      "Tiger",
      "Lion",
      "Platypus",
      "Gorrila",
      "Girrafe",
    ];
    if (wordList_data.length > 0) {
      setCurrentWord(wordList_data[wordList_data.length - 1].split(""));
      console.log(wordList_data[wordList_data.length - 1].split(""));
      setWordListQueue(wordList_data.slice(0, -1));
    }
  };

  const onKeyPress = (key, e) => {
    if (
      matched_index < currentWord.length &&
      currentWord[matched_index].toLowerCase() === key
    ) {
      if (matched_index + 1 === currentWord.length) {
        setMatched_index(0);

        if (wordList.length > 0) {
          setSeconds(5);
          if (wordListQueue.length === 0 && wordList.length === 1) {
            setCurrentWord([]);
          } else {
            setCurrentWord(wordList[wordList.length - 1].split(""));
          }
          if (percentage > 10) {
            setPercentage(percentage - 10);
          } else {
            setPercentage(0);
          }
          setWordList(wordList.slice(0, -1));
        }
        else (
            setCurrentWord([])
        )

        setScore(score + multiplier * 10);
      } else {
        setMatched_index(matched_index + 1);
      }
    }
  };

  useEffect(fetchItems, []);

  return (
    <div className="game-outer">
      <div></div>
      <div className="game-middle">
        <div className="game-left">
          <div className="level-section">
            <div className="tab-heading">Level</div>
            <div className="level tab">{level}</div>
          </div>
          <div className="score-section">
            <div className="tab-heading">Score</div>
            <div className="score tab">{score}</div>
          </div>
          <div className="multiplier-section">
            <div className="tab-heading">Multiplier</div>
            <div className="multiplier tab">{multiplier}X</div>
          </div>
        </div>
        <div className="word-section">
          {/* <Countdown /> */}
          <div className="timer">
            <div className="title"></div>
            <div className="time">{seconds} secs</div>
          </div>
          <KeyboardEventHandler
            handleKeys={["alphanumeric"]}
            onKeyEvent={onKeyPress}
          />
          <div className="words">
            <div className="word-list">
              {wordList.map((item, index) => (
                <div
                  className="word"
                  style={{ fontSize: wordSize - index * 2 + "px" }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="current-word">
              <h3>
                {currentWord.map((item, index) => (
                  <span
                    style={{
                      color:
                        index <= matched_index - 1
                          ? "rgb(80 175 105)"
                          : "#f5f5f5",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </h3>
            </div>
          </div>
        </div>
        <div className="bar-section">
          <ProgressBar percentage={percentage} />
          Word Queue
        </div>
      </div>
    </div>
  );
};
export default GameSection;
