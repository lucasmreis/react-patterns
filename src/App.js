import React, { Component } from "react";
import { DagobahProvider, withDagobah, DagobahRp } from "./planets/1-provider";
import View from "./planets/view";

const DagobahPlanet = withDagobah(View);

class App extends Component {
  render() {
    return (
      <DagobahProvider>
        <DagobahPlanet />
        <DagobahPlanet />
        <DagobahPlanet />
        <DagobahRp render={props => <View {...props} />} />
        <DagobahRp render={props => <View {...props} />} />
        <DagobahRp render={props => <View {...props} />} />
      </DagobahProvider>
    );
  }
}

export default App;
