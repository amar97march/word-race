import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router-dom";
import { addStat } from "../../services/API";

export function GameOver(props) {
    let history = useHistory();


    const handleSubmit = (event) => {
        let data = { name: props.name, score: props.score, level: props.level }
        addStat(data)

      .then((res) => {
        // setImageChangedFlag(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        console.log("Details not saved. Contact Admin")
      });
        history.push("/leaderboard/", { name: props.name, score: props.score, level: props.level })
      }

      const handleReplay = (event) => {
        
        history.push("/",)
      }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Game Over</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="greeting">
          Well done. You played excellent {props.name}
        </div>
        <div>
            Score: {props.score}
            Level: {props.level}
        </div>
        <div> To submit your score to the leaderboard press submit</div>
        <div>
          <Button style={{ float: "right",color: "ButtonHighlight", backgroundColor: "#0d6efd", borderColor: "#0d6efd" }} onClick = {handleSubmit}>Submit score</Button>
          <Button style={{ float: "right",color: "ButtonHighlight", backgroundColor: "#0d6efd", borderColor: "#0d6efd" }} onClick = {handleReplay} >Replay</Button>
          <br style={{ clear: "both" }} />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default GameOver;
