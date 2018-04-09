import React, { Component } from "react";
import View from "./view";

export const DagobahContext = React.createContext({ loading: true });

export class DagobahProvider extends Component {
  state = { loading: true };

  componentDidMount() {
    fetch("https://swapi.co/api/planets/5")
      .then(res => res.json())
      .then(
        planet => this.setState({ loading: false, planet }),
        error => this.setState({ loading: false, error })
      );
  }

  render() {
    return (
      <DagobahContext.Provider value={this.state}>
        {this.props.children}
      </DagobahContext.Provider>
    );
  }
}

export const DagobahPlanet = () => (
  <DagobahContext.Consumer>
    {dagobah => <View {...dagobah} />}
  </DagobahContext.Consumer>
);
