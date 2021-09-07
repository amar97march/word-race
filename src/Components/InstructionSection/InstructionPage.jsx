import React, { useState } from "react";
import "../../css/instruction.css";
import { Link } from "react-router-dom";
import start_btn from "../../Assets/start.png";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const InstructionPage = () => {
  let history = useHistory();

  const defaultValues = {
    name: "Player-" + Math.floor(1000 + Math.random() * 90000),
  };

  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    history.push("/game/", { name: formValues["name"] });
  };

  return (
    <div className="instruction-outer">
      <div className="instruction-inner">
        <div className="heading">Instructions</div>
        <div className="instructions">
          <div className="scroll-section">
            <h1>Word race is a game to test your typing speed.</h1>
            <p>
              Do know think you can typing faster than rest of people out there?
            </p>
            <h2>
              Here you can not only test your typing skills but can enhance them
              too.
            </h2>
            <ul>
              <li>Type Fast.</li>
              <li>Type Smart!</li>
            </ul>
            <ul>
              <li>
                This game has difficulty which will keep on increasing as the
                level increases.
              </li>
              <li>
                There is one bonus word at each level on clearing of which you
                will get extra double points.
              </li>
              <li>
                words will keeps on coming as soon as timer ends for current
                word.
              </li>
              <li>With each new word the queue will be increasing</li>
              <li>Queue bar can be decreased on typying a word correctly</li>
            </ul>
            <h3>Leader Board.</h3>
            <p>A place to check the top player and other stats.</p>
            <ol>
              <li>
                player can submit the result if they want by clicking submit
                button.
              </li>
              <li>Leaderboard will show top 10 players by score</li>
              <li>It also shows other stats like total games played etc.</li>
            </ol>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Grid item>
              <TextField
                id="name-input"
                name="name"
                type="text"
                value={formValues.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Button className="startButton" type="submit">
              <img src={start_btn} alt="side bar" />
            </Button>
          </Grid>
        </form>
      </div>
    </div>
  );
};
export default InstructionPage;
