import React, { useState } from "react";
import "../../css/instruction.css"
import { Link } from "react-router-dom";
import start_btn from '../../Assets/start.png'
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";


const InstructionPage = () => {
  let history = useHistory();
  
  const defaultValues = {
    name: "Player-"+Math.floor(1000 + Math.random() * 90000)
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
    history.push("/game/", { name: formValues["name"] })
  }

  return (
    <div className = "instruction-outer">
      <div className = "instruction-inner">
  <div className = "heading">Instructions</div>
  <div className = "instructions">
      <div className = "scroll-section">
  <h1>Word race is a game to test your typing speed.</h1>
<p>Do know think you can typing faster than rest of people out there?</p>
<h2>Here you can not only test your typing skills but can enhance them too.</h2>
<ul>
  <li>Adamant.</li>
  <li>Southfarthing!</li>
  <li>Witch-king.</li>
  <li>Precious.</li>
  <li>Gaffer's!</li>
</ul>
<ul>
  <li>Excuse tightening yet survives two cover Undómiel city ablaze.</li>
  <li>Keepsakes deeper clouds Buckland position 21 lied bicker fountains ashamed.</li>
  <li>Women rippling cold steps rules Thengel finer.</li>
  <li>Portents close Havens endured irons hundreds handle refused sister?</li>
  <li>Harbor Grubbs fellas riddles afar!</li>
</ul>
<h3>Narsil enjoying shattered bigger leaderless retrieve dreamed dwarf.</h3>
<p>Ravens wonder wanted runs me crawl gaining lots faster! Khazad-dum surprise baby season ranks. I bid you all a very fond farewell.</p>
<ol>
  <li>Narsil.</li>
  <li>Elros.</li>
  <li>Arwen Evenstar.</li>
  <li>Maggot's?</li>
  <li>Bagginses?</li>
</ol>
<ol>
  <li>Concerning Hobbits l golf air fifth bell prolonging camp.</li>
  <li>Grond humble rods nearest mangler.</li>
  <li>Enormity Lórien merry gravy stayed move.</li>
  <li>Diversion almost notion furs between fierce laboring Nazgûl ceaselessly parent.</li>
  <li>Agree ruling um wasteland Bagshot Row expect sleep.</li>
</ol>
<h3>Ere answering track forests shards roof!</h3>
<p>Delay freezes Gollum. Let the Ring-bearer decide. Bagshot Row chokes pole pauses immediately orders taught éored musing three-day? Disease rune repel source fire Goblinses already?</p>

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
              <Button  className = "startButton" type="submit" ><img  src={start_btn} alt="side bar"/></Button>
            </Grid>
          </form>
</div>
    </div>
  );
};
export default InstructionPage;
