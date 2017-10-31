import React, { Component } from 'react';
import TicketsGrid from './TicketsGrid.jsx'
import Filter from './Filter.jsx'

import ticketsData from './tickets.json'

import "./TestApp.css"

class TestApp extends Component {
    constructor(props){
        super(props);
        this.filterChanged = this.filterChanged.bind(this);
        this.state = {
            filter: [
                {
                    val: -1,
                    name: "Все",
                    checked: true,
                    only: true
                },
                {
                    val: 0,
                    name: "Без пересадок",
                    checked: true,
                    only: false
                },
                {
                    val: 1,
                    name: "1 пересадка",
                    checked: true,
                    only: false
                },
                {
                    val: 2,
                    name: "2 пересадки",
                    checked: true,
                    only: false
                },
                {
                    val: 3,
                    name: "3 пересадки",
                    checked: true,
                    only: false
                }
            ],
            tickets: ticketsData.tickets
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
                <Filter filterData={this.state.filter} onChange={this.filterChanged}/>
                <TicketsGrid ticketsData={this.state.tickets} filterData={this.state.filter}/>
            </div>
        );
    }
}

export default TestApp;
