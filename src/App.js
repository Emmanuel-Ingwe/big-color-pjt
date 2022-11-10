import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from './PaletteList';
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return Palette.id === id;
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <PaletteList palette={seedColors} />} />
          <Route exact path="/palette/:id" render={routeProps => (<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />)} />
        </Switch>
      </BrowserRouter>

      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;