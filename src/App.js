import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name:"Cedric",
          id: 1
          },
          {
          name:"Sylvie",
          id: 2
          },
          {
            name:"Will",
            id: 3
          },
          {
            name:"Sent",
            id: 4
          },
          {
            name:"Leanna",
            id: 5
          },
          {
            name:"Lightbody",
            id: 6
          },
          {
            name:"Maaaaax",
            id: 7
          },
          {
            name:"Mike",
            id: 8
          },
          {
            name:"Syd",
            id: 9
          },
          {
            name:"Adrian",
            id: 10
          },
          {
            name:"Ben",
            id: 11
          },
          {
            name:"Johnny",
            id: 12
          },
          {
            name:"Jason",
            id: 13
          },
          {
            name:"Christian",
            id: 14
          },
          {
            name:"Pat",
            id: 15
          },
          {
            name:"AMC",
            id: 16
          },
            
      ],
      searchField: ''
    };

   

  }

  handleChange = (e) => {
    this.setState({ searchField : e.target.value });
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(users => this.setState({ monsters: users }));
  // }




  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters= monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className ='App'>
        
      <h1>My Video Game Monster Buddies</h1>
      <SearchBox 
        placeholder = 'search monsters...'
        handleChange = {this.handleChange}
      />

      <CardList monsters={filteredMonsters}
      />

      </div> 
    )
  }
}


export default App;
