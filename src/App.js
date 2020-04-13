import React, {Component} from 'react';
import {CardList} from "./component/card-list/card-list.component";
import './App.css';
import {SearchBox} from './component/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    //Ao fazer esse código a performance melhorou muito!
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  //Ao usar função flecha no handleChange podemos retirar o
  //this.handleChange = this.handleChange.bind(this); do cosntrutor
  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  };

  render() {
    //desconstruindo!
    const {monsters, searchField} = this.state; //equivalente a const monsters = this.state.monsters;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase()
      .includes(searchField.toLowerCase())); //.includes é basicamente a pesquisa!
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox handleChange={this.handleChange}
                   placeHolder='search monsters'/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
