import React, { Component } from "react";
import AddCocktail from "./add-cocktail";
import axios from "axios";
import { BASE_URL } from "./constant";

class Cocktail extends Component {
  state = {
    cocktail: []
  };

  async getCocktail() {
    let { data } = await axios.get(`${BASE_URL}cocktail`);
    this.setState({ cocktail: data });
  }

  componentDidMount() {
    this.getCocktail();
  }

  addCocktailToState = something => {
    console.log(`bla bla bla ${something}`);
    this.setState({
      cocktail: [
        ...this.state.cocktail,
        {
          name: something,
          id: this.state.cocktail.length + 1
        }
      ]
    });
    console.log(this.state.cocktail);
  };

  render() {
    return [
      <div>
        <div>
          {this.state.cocktail.map((cocktail, key) => (
            <p key={key}>{cocktail.name}</p>
          ))}
        </div>
        <AddCocktail fbi={this.addCocktailToState} />
      </div>
    ];
  }
}
export default Cocktail;
