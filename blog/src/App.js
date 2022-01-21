import React from "react";
import DisplayAllPosts from './Components/DisplayAllPosts'
import HydraCanvas from "./Components/Hydra";
import Spacer from './Components/Spacer';

const App = ( ) => {
  return (
    <div>
      <div id="poster-container">
        <Spacer margin="100px 0px 20px 0px" padding=""/>
        <h3>The Rhombus Presents</h3>
        <Spacer margin="20%" padding=""/>
        <h1>Allie Westberg</h1>
        <h1>Tiwonku (DJ Set)</h1>
        <Spacer margin="25%" padding=""/>
        <h3>Saturday, February 5th 2022, 6pm UTC</h3>
        <h3>play.decentraland.org, coordinates (34,22)</h3>
      </div>
      <HydraCanvas/>
    </div>
  );
};
export default App;
