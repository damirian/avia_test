import React, { Component } from 'react';
import TicketsGrid from './TicketsGrid.js'
import Filter from './Filter.js'

import "./TestApp.css"

class TestApp extends Component {
    constructor(props){
        super(props);
        this.filterChanged = this.filterChanged.bind(this);
        this.state = {
            filter: [
                {
                    id: -1,
                    name: "Все",
                    checked: true,
                    only: true
                },
                {
                    id: 0,
                    name: "Без пересадок",
                    checked: true,
                    only: false
                },
                {
                    id: 1,
                    name: "1 пересадка",
                    checked: true,
                    only: false
                },
                {
                    id: 2,
                    name: "2 пересадки",
                    checked: true,
                    only: false
                },
                {
                    id: 3,
                    name: "3 пересадки",
                    checked: true,
                    only: false
                }
            ]
        }
    }

    filterChanged = (newFilter) => {
        this.setState({filter:  newFilter});
    }
    
    // componentDidUpdate(){
    //     console.log(this.state.filter);
    // }
    render() {
        return (
            <div className="test-app">
                <Filter filterData = {this.state.filter} onChange = {this.filterChanged}/>
                <TicketsGrid filterData = {this.state.filter}/>
            </div>
        );
    }
}

export default TestApp;
