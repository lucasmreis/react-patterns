import React from "react";

// RENDER PROP

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
    return this.props.render(this.state);
  }
}

export default () => (
  <DagobahRP
    render={({ loading, error, planet }) => {
      if (loading) {
        return <LoadingView />;
      } else if (planet) {
        return <PlanetView {...planet} />;
      } else {
        return <ErrorView />;
      }
    }}
  />
);
