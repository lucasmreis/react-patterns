import React, { Component } from "react";

import {
  DagobahProvider,
  DagobahPlanet,
  DagobahContext
} from "./planets/2-provider-new-context";

import View from "./planets/view";

class App extends Component {
  render() {
    return (
      <DagobahProvider>
        {/* exported component with consumer */}
        <DagobahPlanet />
        <DagobahPlanet />
        <DagobahPlanet />

        {/* using directly consumer render props */}
        <DagobahContext.Consumer>
          {dagobah => <View {...dagobah} />}
        </DagobahContext.Consumer>

        <DagobahContext.Consumer>
          {dagobah => <View {...dagobah} />}
        </DagobahContext.Consumer>

        {/* sharing one consumer with many components */}
        <DagobahContext.Consumer>
          {dagobah => (
            <React.Fragment>
              <View {...dagobah} />
              <View {...dagobah} />
              <View {...dagobah} />
            </React.Fragment>
          )}
        </DagobahContext.Consumer>
      </DagobahProvider>
    );
  }
}

export default App;
