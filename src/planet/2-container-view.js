import React from "react";

// CONTAINER / VIEW

class PlanetView extends React.Component {
  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    return <div>I'm sorry! Please try again.</div>;
  }

  renderPlanet() {
    const { name, climate, terrain } = this.props.planet;
    return (
      <div>
        <h2>{name}</h2>
        <div>Climate: {climate}</div>
        <div>Terrain: {terrain}</div>
      </div>
    );
  }

  render() {
    if (this.props.loading) {
      return this.renderLoading();
    } else if (this.props.planet) {
      return this.renderPlanet();
    } else {
      return this.renderError();
    }
  }
}

// State:
// { loading: true }
// { loading: false, planet: { name, climate, terrain } }
// { loading: false, error: any }

class DagobahContainer extends React.Component {
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
    return <PlanetView {...this.state} />;
  }
}

export default DagobahContainer;
