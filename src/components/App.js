import React from "react";
import axios from "axios";
import DropDown from "./DropDown";
import PokemonCard from "./PokemonCard";

class App extends React.Component {
  state = { loading: true, data: [] };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(response => {
      this.setState({ data: response.data.results });
      //console.log(response.data.results);
    });
  }

  generationFilter(event) {
    axios
      .get("https://pokeapi.co/api/v2/" + event.target.value)
      .then(response => {
        this.setState({ data: response.data.pokemon_species });
      });
  }

  typeFilter(event) {
    axios
      .get("https://pokeapi.co/api/v2/" + event.target.value)
      .then(response => {
        let pokeData = response.data.pokemon.map(pokemon => {
          return pokemon.pokemon;
        });
        this.setState({ data: pokeData });
      });
  }

  render() {
    return (
      <div>
        <DropDown
          label="Filter Pokemon by Generation"
          handleChange={this.generationFilter.bind(this)}
        >
          <option value="generation/1">Generation I </option>
          <option value="generation/2">Generation II </option>
          <option value="generation/3">Generation III </option>
          <option value="generation/4">Generation IV </option>
          <option value="generation/5">Generation V</option>
          <option value="generation/6">Generation VI</option>
          <option value="generation/7"> Generation VII</option>
        </DropDown>

        <DropDown
          label="Filter Pokemon by Type"
          handleChange={this.typeFilter.bind(this)}
        >
          <option value="type/normal">Normal</option>
          <option value="type/fighting">Fighting </option>
          <option value="type/flying">Flying </option>
          <option value="type/poison">poison </option>
          <option value="type/ground">Ground</option>
          <option value="type/rock">Rock</option>
          <option value="type/bug">Bug</option>
          <option value="type/ghost">Ghost</option>
          <option value="type/steel">Steel </option>
          <option value="type/fire">Fire </option>
          <option value="type/water">Water </option>
          <option value="type/grass">Grass</option>
          <option value="type/electric">Electric</option>
          <option value="type/psychic"> Psychic</option>
          <option value="type/ice">Ice </option>
          <option value="type/dragon">Dragon </option>
          <option value="type/dark">Dark </option>
          <option value="type/fairy">Fairy</option>
          <option value="type/shadow">Shadow</option>
          <option value="type/unknown"> Unknown</option>
        </DropDown>
        {this.state.data.map(pokemonUrl => {
          return <PokemonCard url={pokemonUrl.url} />;
        })}
      </div>
    );
  }
}

export default App;
