import React, { Component } from 'react';
import CardList from '../Components/CardList';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !monsters.length ? (
      <h1>Loading</h1>
    ) : (
      <div className='tc'>
        <h1 className='f1'>Monster Friends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList monsters={filteredMonsters} />
        </Scroll>
      </div>
    );
  }
}

export default App;
