import React, { Component } from 'react'
import './App.css';
import { CardList } from './Components/CardList/CardList';
import { SearchBox } from './Components/Search-box/Search-box'

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ monsters: users }))
    }

    handleChange = e => {
        const target = e.target.value
        this.setState({ searchField: target})
    }

    render() {
        const { monsters, searchField } = this.state
        const filterMonsters = monsters.filter(monster => 
            monster.name.toLowerCase().includes(searchField.toLowerCase()))
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox searchField={searchField}
                            handleChange={this.handleChange}
                            monsters={monsters}
                            placeholder='search monster'/>
                <CardList monsters={filterMonsters}/>
            </div>
        )
    }
}

export default App;
