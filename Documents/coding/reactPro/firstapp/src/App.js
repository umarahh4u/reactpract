import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { SearchBox } from "./components/search-box/search.box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((user) => this.setState({ monsters: user }))
      .catch((err) => console.log(`${err.messages} Connection failed`));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters} />
        {/* <CardList monsters={this.state.monsters} /> */}
      </div>
    );
  }
}

export default App;
