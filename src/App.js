import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";


class App extends Component {
  //LOCAL STATE USING CONSTUCTOR METHOD
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
      .then(
        (
          user // passes response to this promise (it is asynchronous function)
        ) =>
          this.setState(
            () => {
              return { monsters: user };
            },
            () => {
              console.log(this.state);
            }
          )
      );
  }
// below is annonyous function and it is used for the optimization
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase(); //as soon as we are typing

    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    // filter will create new array
    
    const filtervalue = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
      <h1 className="h1text">Monster Data</h1>  
      <SearchBox
          onChangeHandler={onSearchChange}
          placeholder={"search-monsters"}
          className="search-box"
        />
        <CardList monsters={filtervalue} />
      </div>
    );
  }
}

export default App;
