import Dagobah from "./1-mixed";

export default {
  component: Dagobah,
  fetch: [
    {
      matcher: "https://swapi.co/api/planets/5",
      response: {
        name: "Dagobah",
        rotation_period: "23",
        orbital_period: "341",
        diameter: "8900",
        climate: "murky",
        gravity: "N/A",
        terrain: "swamp, jungles",
        surface_water: "8",
        population: "unknown",
        residents: [],
        films: [
          "https://swapi.co/api/films/2/",
          "https://swapi.co/api/films/6/",
          "https://swapi.co/api/films/3/"
        ],
        created: "2014-12-10T11:42:22.590000Z",
        edited: "2014-12-20T20:58:18.425000Z",
        url: "https://swapi.co/api/planets/5/"
      }
    }
  ]
};
