import React, { Component } from "react";
import "./App.css";
import CardList from "./components/CardList/card-list.component";
import SearchBox from "./components/SearchBox/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters_data) =>
        this.setState(
          () => {
            return { monsters: monsters_data };
          },
        )
      );
  }
  handleSearch = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { handleSearch } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Inc</h1>
        <SearchBox handleSearch={handleSearch} placeholder={"search monsters..."}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
