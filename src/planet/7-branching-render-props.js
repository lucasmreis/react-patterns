import React from "react";

// BRANCHING RENDER PROP

const LoadingView = () => <div>Loading...</div>;

const ErrorView = () => <div>I'm sorry! Please try again.</div>;

const PlanetView = ({ name, climate, terrain }) => (
  <div>
    <h2>{name}</h2>
    <div>Climate: {climate}</div>
    <div>Terrain: {terrain}</div>
  </div>
);

// State:
// { loading: true }
// { loading: false, planet: { name, climate, terrain } }
// { loading: false, error: any }

class DagobahRP extends React.Component {
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
    if (this.state.loading) {
      return this.props.renderLoading();
    } else if (this.state.planet) {
      return this.props.renderPlanet(this.state.planet);
    } else {
      return this.props.renderError(this.state.error);
    }
  }
}

export default () => (
  <DagobahRP
    renderLoading={() => <LoadingView />}
    renderError={error => <ErrorView />}
    renderPlanet={planet => <PlanetView {...planet} />}
  />
);
