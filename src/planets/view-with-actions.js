import React from "react";

const LoadingView = () => <div>Loading...</div>;

const ErrorView = () => <div>I'm sorry! Please try again.</div>;

const PlanetView = ({ name, climate, terrain, loadPlanet }) => (
  <div>
    <h2>{name}</h2>
    <div>Climate: {climate}</div>
    <div>Terrain: {terrain}</div>
    <div>
      <button onClick={() => loadPlanet(1)}>Load Tatooine</button>
    </div>
    <div>
      <button onClick={() => loadPlanet(2)}>Load Alderaan</button>
    </div>
    <div>
      <button onClick={() => loadPlanet(8)}>Load Naboo</button>
    </div>
  </div>
);

export default ({ loading, planet, loadPlanet }) => {
  if (loading) {
    return <LoadingView />;
  } else if (planet) {
    return <PlanetView {...planet} loadPlanet={loadPlanet} />;
  } else {
    return <ErrorView />;
  }
};
