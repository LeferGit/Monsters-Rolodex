import React , {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component 
{
  constructor()
    {
      super();
      this.state =
      {
        monsters :[],
        searchFiled:''
      } 

      //this.handleChange = this.handleChange.bind(this);

    }
    componentDidMount()
    {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => 
      Response.json())
      .then(Response => this.setState({monsters:Response})
      );
    }
    
    handleChange = (e) =>
    {
      this.setState({searchFiled:e.target.value});
    }

    render()
    {
      const {monsters,searchFiled} = this.state;
      const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchFiled.toLowerCase()));

      return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}></SearchBox>
        <CardList monsters={ filteredMonsters}></CardList>
      </div>
      );
    }
}

export default App;
