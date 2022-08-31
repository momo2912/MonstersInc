import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/CardList/card-list.component";
import SearchBox from "./components/SearchBox/search-box.component";
import { getData } from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
    return () => {};
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchField(e.target.value.toLowerCase());
  };
  return (
    <div className="App">
      <h1 className="app-title">Monsters Inc</h1>
      <SearchBox
        className=""
        handleSearch={handleSearch}
        placeholder={"search monsters..."}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
