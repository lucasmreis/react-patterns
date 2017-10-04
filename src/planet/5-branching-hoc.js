import React from "react";

// BRANCHING HOC

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

const withDagobah = ({
  LoadingViewComponent,
  ErrorViewComponent,
  PlanetViewComponent
}) =>
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
      if (this.state.loading) {
        return <LoadingViewComponent />;
      } else if (this.state.planet) {
        return <PlanetViewComponent {...this.state.planet} />;
      } else {
        return <ErrorViewComponent />;
      }
    }
  };

export default withDagobah({
  LoadingViewComponent: LoadingView,
  ErrorViewComponent: ErrorView,
  PlanetViewComponent: PlanetView
});

// more complex hoc to avoid branch component
