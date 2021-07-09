import React, { Component } from 'react';
import { robots } from '../Robots.js';
import SearchBox from '../components/SearchBox.js';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state = {
            all_robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        this.setState({ all_robots: robots})
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render(){

        const filteredRobots = this.state.all_robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        if (this.state.all_robots.length === 0){
            return(
                <div>
                    <h1>Robofriends</h1>
                    <SearchBox  searchChange={this.onSearchChange}/>
                    <h2 className='loading'>Loading...</h2>
                </div>
                );
        }else{
            return(
                <div>
                    <h1>Robofriends</h1>
                    {/* <input type="search" placeholder='search robots2' onChange={this.onSearchChange}/> */}
                    <SearchBox  searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robotsarray={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;