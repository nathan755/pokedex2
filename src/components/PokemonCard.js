import React, { useState } from "react";
import axios from "axios";

class PokemonCard extends React.Component {
  state = { data: {}, loading: false, statsVisable: false, url: "" };

  componentDidUpdate() {
    axios.get(this.props.url).then(response => {
      this.setState({
        url: "https://pokeapi.co/api/v2/pokemon/" + response.data.id
      });
    });
  }

  statsToggler = () => {
    axios.get(this.state.url).then(response => {
      this.setState({ data: response.data });
      this.setState({ loading: false });
    });
    console.log(this.state.data);

    if (this.state.statsVisable) {
      this.setState({ statsVisable: false });
    } else {
      this.setState({ statsVisable: true });
    }
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <h2>{this.state.data.name}</h2>
            <h2>Pokemon HP</h2>
            <button onClick={this.statsToggler}>Show stats</button>
            <hr />
            <img></img>
            <div>
              <span>Pokemon type1 </span>
              <span> pokemon type 2</span>
            </div>
            <hr />
            <ul>
              <li>height:</li>
              <li>Weight:</li>
              <li>Attack:</li>
              <li>Defense:</li>
              <li>Special Attack:</li>
              <li>Special Defense:</li>
              <li>Speed:</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default PokemonCard;
