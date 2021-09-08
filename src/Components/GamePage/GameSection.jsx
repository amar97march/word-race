import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import KeyboardEventHandler from "react-keyboard-event-handler";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProgressBar from "./Progressbar";
import success_sound from "../../Assets/success.wav";
import wrong from "../../Assets/wrong.mp3";
import GameOver from "./GameOverPopUp";
import { getWordsdata } from "../../services/API";
import "../../css/game-section.css";
import { WORDSIZE } from "../../services/Constants";

const GameSection = (props) => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [multiplier, setMultiplier] = useState(1);
  const [percentage, setPercentage] = useState(0);
  const [currentWord, setCurrentWord] = useState([]);
  const [wordList, setWordList] = useState([]);
  const [wordListQueue, setWordListQueue] = useState([]);
  const [matched_index, setMatched_index] = useState(0);
  const [wordTimer, setWordTimer] = React.useState(5);
  const [seconds, setSeconds] = React.useState(5);
  const [bonusWord, setBonusWord] = React.useState("");
  const [modalShow, setModalShow] = useState(false);
  const [keyPressed, setKeyPressed] = useState("");
  let success_audio = new Audio(success_sound);
  let wrong_audio = new Audio(wrong);
  const notify = () => toast("Wow.. Level Up");
  const bonus_point = () => toast("Yeaah, Bonus Point");
  var TIMER;
  let history = useHistory();

  var NAME;
  if (props.location.state !== undefined) {
    NAME = props.location.state.name;
  } else {
    history.push("/");
  }

  const addWord = () => {
    if (wordListQueue.length === 0 && wordList.length === 0) {
      notify();
      setLevel(level + 1);
      setMultiplier(multiplier + 1);
      setWordTimer(wordTimer - 1);
      setSeconds(0);

      fetchItems();

      setSeconds(wordTimer - 1);
    } else if (wordListQueue.length === 0 && wordList.length > 0) {
      if (percentage + 10 >= 100) {
        setModalShow(true);

        setSeconds(0);
      } else {
        setPercentage(percentage + 10);
        setSeconds(wordTimer);
        setCurrentWord(wordList[wordList.length - 1].split(""));
      }
    } else {
      if (wordListQueue.length > 0 && currentWord.length === 0) {
        setCurrentWord(wordListQueue[wordListQueue.length - 1].split(""));
        setWordListQueue(wordListQueue.slice(0, -1));
      } else if (wordListQueue.length > 0) {
        setWordList((prevItems) => [
          wordListQueue[wordListQueue.length - 1],
          ...prevItems,
        ]);

        setWordListQueue(wordListQueue.slice(0, -1));
      }
      setSeconds(0);
      setSeconds(wordTimer);

      if (percentage + 10 >= 100) {
        setModalShow(true);
        setSeconds(0);
      } else {
        setPercentage(percentage + 10);
      }
    }
  };

  const decreaseSeconds = (seconds) => {
    setSeconds(seconds - 1);
  };

  const fetchItems = () => {
    getWordsdata()
      .then((res) => {
        let wordList_data = res.data.data["words_list"];

        if (wordList_data.length > 0) {
          setCurrentWord(wordList_data[wordList_data.length - 1].split(""));
          setBonusWord(res.data.data["bonus_word"]);
          setWordListQueue(wordList_data.slice(0, -1));
        }
      })
      .catch((err) => {});
  };

  const onKeyPress = (key, e) => {
    setKeyPressed(key);
    if (
      matched_index < currentWord.length &&
      currentWord[matched_index].toLowerCase() === key
    ) {
      if (matched_index + 1 === currentWord.length) {
        setMatched_index(0);
        if (currentWord.join("") === bonusWord) {
          bonus_point();
        }
        if (wordList.length > 0) {
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
          setSeconds(wordTimer);
        } else {
          setCurrentWord([]);
        }

        setScore(score + multiplier * 10);
        success_audio.play();
      } else {
        setMatched_index(matched_index + 1);
      }
    } else {
      wrong_audio.play();
    }
  };

  useEffect(() => {
    if (seconds > 0) {
      TIMER = setTimeout(() => decreaseSeconds(seconds), 1000);
      return () => {
        clearTimeout(TIMER);
      };
    } else {
      addWord();

      if (wordList.length === 8) {
        setPercentage(100);
      } else {
        setPercentage(wordList.length * 10);
      }
    }
  }, [seconds]);

  useEffect(fetchItems, []);

  return (
    <div className="game-outer">
      <ToastContainer />
      <div></div>
      <div className="game-middle">
        <div className="game-left">
          <div className="level-section">
            <div className="tab-heading">Player</div>
            <div className="ldevel tabd">{NAME}</div>
          </div>
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
          <div className="multiplier-section">
            <div className="tab-heading">Key Pressed</div>
            <div className="multiplier tab">{keyPressed.toUpperCase()}</div>
          </div>
        </div>
        <div className="word-section">
          <div className="timer">
            <CircularProgress
              variant="determinate"
              value={(seconds * 100) / wordTimer}
            />
          </div>
          <GameOver
            aspectRatio={1}
            show={modalShow}
            level={level}
            score={score}
            name={NAME}
            onHide={() => setModalShow(false)}
          />
          <KeyboardEventHandler
            handleKeys={["alphanumeric"]}
            onKeyEvent={onKeyPress}
          />
          <div className="words">
            <div className="word-list">
              {wordList.map((item, index) => (
                <div
                  className="word"
                  style={{ fontSize: WORDSIZE + "px" }}
                >
                  {item.toUpperCase()}
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
                          : "rgb(142 178 243)",
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
          Meter
        </div>
      </div>
    </div>
  );
};
export default GameSection;
