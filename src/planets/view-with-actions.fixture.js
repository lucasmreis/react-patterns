import ViewWithActions from "./view-with-actions";

export default [
  {
    component: ViewWithActions,
    name: "Loading",
    props: {
      loading: true
    }
  },
  {
    component: ViewWithActions,
    name: "Error",
    props: {
      loading: false,
      error: "Error!"
    }
  },
  {
    component: ViewWithActions,
    name: "Planet",
    props: {
      loading: false,
      planet: {
        name: "Earth",
        climate: "Great",
        terrain: "Varied"
      },
      loadPlanet: id => console.log("Load Planet:", id)
    }
  }
];
