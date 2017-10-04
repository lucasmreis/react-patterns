import React from "react";

// CONTAINER / BRANCH / VIEW

const LoadingView = () => <div>Loading...</div>;

const ErrorView = () => <div>I'm sorry! Please try again.</div>;

const PlanetView = ({ name, climate, terrain }) => (
  <div>
    <h2>{name}</h2>
    <div>Climate: {climate}</div>
    <div>Terrain: {terrain}</div>
  </div>
);

class PlanetBranch extends React.Component {
  render() {
    if (this.props.loading) {
      return <LoadingView />;
    } else if (this.props.planet) {
      return <PlanetView {...this.props.planet} />;
    } else {
      return <ErrorView />;
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
    return <PlanetBranch {...this.state} />;
  }
}

export default DagobahContainer;

// PROS: simple, logic / branching / view separation makes it even easier to test and showcase views
// CONS: logic dependent on branching, branching dependent on views, not reusable
