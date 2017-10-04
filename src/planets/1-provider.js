import React from "react";
import PropTypes from "prop-types";

const contextTypes = {
  dagobah: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    planet: PropTypes.shape({
      name: PropTypes.string,
      climate: PropTypes.string,
      terrain: PropTypes.string
    })
  })
};

export class DagobahProvider extends React.Component {
  state = { loading: true };

  componentDidMount() {
    fetch("https://swapi.co/api/planets/5")
      .then(res => res.json())
      .then(
        planet => this.setState({ loading: false, planet }),
        error => this.setState({ loading: false, error })
      );
  }

  static childContextTypes = contextTypes;

  getChildContext() {
    return { dagobah: this.state };
  }

  render() {
    return this.props.children;
  }
}

export const withDagobah = PlanetViewComponent =>
  class extends React.Component {
    static contextTypes = contextTypes;

    render() {
      const { props, context } = this;
      return <PlanetViewComponent {...props} {...context.dagobah} />;
    }
  };

const DagobahRp = ({ render }, { dagobah }) => render(dagobah);

DagobahRp.contextTypes = contextTypes;

export { DagobahRp };
