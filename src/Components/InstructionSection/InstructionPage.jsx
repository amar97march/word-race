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
  <h1>Didn't melt fairer keepsakes since Fellowship elsewhere.</h1>
<p>Woodlands payment Osgiliath tightening. Barad-dur follow belly comforts tender tough bell? Many that live deserve death. Some that die deserve life. Outwitted teatime grasp defeated before stones reflection corset seen animals Saruman's call?</p>
<h2>Tad survive ensnare joy mistake courtesy Bagshot Row.</h2>
<p>Ligulas step drops both? You shall not pass! Tender respectable success Valar impressive unfriendly bloom scraped? Branch hey-diddle-diddle pony trouble'll sleeping during jump Narsil.</p>
<h3>North valor overflowing sort Iáve mister kingly money?</h3>
<p>Curse you and all the halflings! Deserted anytime Lake-town burned caves balls. Smoked lthilien forbids Thrain?</p>
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
