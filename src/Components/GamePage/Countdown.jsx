import React, { Component, useEffect, useState } from "react";
// import "../. /App.css";

const Countdown = (props) =>{

    const [timeOn, setTimerOn] = useState(true)
    // const [timerStart, setTimerStart] = useState(0)
    const [timerTime, setTimerTime] = useState(0)
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);

    const startTimer = () => {
    // this.setState({
    //   timerOn: true,
    //   timerTime: this.,
    //   timerStart: this.state.timerTime
    // });
    setTimerOn(true)
    // setTimerStart(10)
    // setTimerTime(5000)

    var timer = setInterval(() => {
      const newTime = timerTime - 1000;
      console.log(newTime);
      if (newTime >= 0) {
        
          setTimerTime(newTime)
        
      } else {
        clearInterval(timer);
        setTimerOn(false)
        alert("Countdown ended");
      }
    }, 1000);
  };

  useEffect(startTimer,[])

//   stopTimer = () => {
//     clearInterval(this.timer);
//     this.setState({ timerOn: false });
//   };
//   resetTimer = () => {
//     if (this.state.timerOn === false) {
//       this.setState({
//         timerTime: this.state.timerStart
//       });
//     }
//   };

  const adjustTimer = input => {
    const { timerTime, timerOn } = this.state;
    if (!timerOn) {
      if (input === "incSeconds" && timerTime + 1000 >= 0) {
        this.setState({ timerTime: timerTime + 1000 });
      }
    }
  };

 
    
    // let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    // let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    return (
      <div className="Countdown">
        <div className="Countdown-header">Time Left</div>
        <div className="Countdown-display">
          {/* <button onClick={() => this.adjustTimer("incSeconds")}>
            &#8679;
          </button> */}

          <div className="Countdown-time">
            {seconds}
          </div>

          
        </div>

        {/* {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
          <button className="Button-start" onClick={this.startTimer}>
            Start
          </button>
        )}
        {timerOn === true && timerTime >= 1000 && (
          <button className="Button-stop" onClick={this.stopTimer}>
            Stop
          </button>
        )}
        {timerOn === false &&
          (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
            <button className="Button-start" onClick={this.startTimer}>
              Resume
            </button>
          )}

        {(timerOn === false || timerTime < 1000) &&
          (timerStart !== timerTime && timerStart > 0) && (
            <button className="Button-reset" onClick={this.resetTimer}>
              Reset
            </button>
          )} */}
      </div>
    );
  
}

export default Countdown;