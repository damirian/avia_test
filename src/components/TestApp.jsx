import React, { Component } from 'react';
import TicketsGrid from './TicketsGrid.jsx'
import Filter from './Filter.jsx'

import ticketsData from './tickets.json'

import "./TestApp.css"

class TestApp extends Component {
    // constructor(props){
    //     super(props);
    //     //... 
    // }
    state = {
        filter: [
            {
                val: -1,
                name: "Все",
                checked: true
            },
            {
                val: 0,
                name: "Без пересадок",
                checked: false
            },
            {
                val: 1,
                name: "1 пересадка",
                checked: false
            },
            {
                val: 2,
                name: "2 пересадки",
                checked: false
            },
            {
                val: 3,
                name: "3 пересадки",
                checked: false
            }
        ],
        tickets: ticketsData.tickets
    }
    componentDidUpdate(){
        console.log(this.state.filter);
    }
    render() {
        return (
            <div className="test-app">
                <Filter filterData={this.state.filter}/>
                <TicketsGrid ticketsData={this.state.tickets}/>
            </div>
        );
    }
}

export default TestApp;
