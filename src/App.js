import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
// import ColorBox from "./ColorBox"
// import "./ColorBox.css";

class App extends Component {
  render() {
    return (
      <div>
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default App;