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
        <div className = "model-stats">
            <span style = {{fontWeight:800}}>Score:</span> {props.score}
            <br/>
            <span style = {{fontWeight:800}}>Level:</span> {props.level}
        </div>
        <hr/>
        <div> To submit your score to the leaderboard press submit</div>
        <div>
          <button style={{ float: "right",color: "brown", background: "none", borderColor: "none", border: "none" }} onClick = {handleSubmit}>Submit score</button>
          <button style={{ float: "right",color: "brown", background: "none", borderColor: "none", border: "none" }} onClick = {handleReplay} >Replay</button>
          <br style={{ clear: "both" }} />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default GameOver;
