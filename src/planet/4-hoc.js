import React from "react";

// SIMPLE HOC

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

const withDagobah = PlanetViewComponent =>
  class extends React.Component {
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
      return <PlanetViewComponent {...this.state} />;
    }
  };

export default withDagobah(PlanetBranch);

// PROS: logic not dependent on views, reusable
// CONS: views sort of dependent on hoc props, still need a branch/selector component to solve it
