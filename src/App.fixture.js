import App from "./App";

export default {
  component: App,
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
    },
    {
      matcher: "https://swapi.co/api/planets/1",
      response: {
        name: "Tatooine",
        rotation_period: "23",
        orbital_period: "304",
        diameter: "10465",
        climate: "arid",
        gravity: "1 standard",
        terrain: "desert",
        surface_water: "1",
        population: "200000",
        residents: [
          "https://swapi.co/api/people/1/",
          "https://swapi.co/api/people/2/",
          "https://swapi.co/api/people/4/",
          "https://swapi.co/api/people/6/",
          "https://swapi.co/api/people/7/",
          "https://swapi.co/api/people/8/",
          "https://swapi.co/api/people/9/",
          "https://swapi.co/api/people/11/",
          "https://swapi.co/api/people/43/",
          "https://swapi.co/api/people/62/"
        ],
        films: [
          "https://swapi.co/api/films/5/",
          "https://swapi.co/api/films/4/",
          "https://swapi.co/api/films/6/",
          "https://swapi.co/api/films/3/",
          "https://swapi.co/api/films/1/"
        ],
        created: "2014-12-09T13:50:49.641000Z",
        edited: "2014-12-21T20:48:04.175778Z",
        url: "https://swapi.co/api/planets/1/"
      }
    }
  ]
};
