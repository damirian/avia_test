import React, { Component } from 'react';
import Ticket from './Ticket.jsx'
import './TicketsGrid.css'

class TicketsGrid extends Component {
    // constructor(props){
    //     super(props);
    //     //...
    // }
    componentWillReceiveProps(nextProps){
        let newFilter = nextProps.filterData;
        console.log(newFilter);
    }
    render(){
        return (
            <div className="tickets-grid">
               {
                   this.props.ticketsData.map((ticket, index) => {
                    //    console.log(ticket);
                       return <Ticket key={index} ticketData={ticket}/>;
                   })
               }
            </div>
        );
    }
}

export default TicketsGrid
