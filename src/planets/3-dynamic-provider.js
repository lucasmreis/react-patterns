import React, { Component } from "react";
import View from "./view-with-actions";

export const DagobahContext = React.createContext({ loading: true });

export class DagobahProvider extends Component {
  loadPlanet = id => {
    const url = `https://swapi.co/api/planets/${id}`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(
        planet => this.setState({ loading: false, planet }),
        error => this.setState({ loading: false, error })
      );
  };

  state = {
    loading: true,
    loadPlanet: this.loadPlanet
  };

  componentDidMount() {
    this.loadPlanet(5);
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
