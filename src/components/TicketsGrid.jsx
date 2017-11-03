import React, { Component } from 'react';
import Ticket from './Ticket.jsx'
import './TicketsGrid.css'

class TicketsGrid extends Component {
    constructor(props){
        super(props);
        //...
        this.filterTicketsByStopsCount = this.filterTicketsByStopsCount.bind(this);
    }
    filterTicketsByStopsCount(ticketsData, stops){
        return ticketsData.filter((ticket) =>{
            // console.log(ticket, stops);
            return ticket.stops === stops;
        });
    }
    sortTicketsPyPrice(ticketsData){
        return ticketsData.sort((a, b) => {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            return 0;
        });
    }
    getSortedTickets() {
        let newTiketsData = [];
        this.props.filterData.forEach(function(element, index) {
            if(element.checked === true) {
                if(element.id === -1) {
                    newTiketsData = this.props.ticketsData;
                    return;
                }
                newTiketsData = newTiketsData.concat(this.filterTicketsByStopsCount(this.props.ticketsData, element.id));
            }
        }, this);
        
        return this.sortTicketsPyPrice(newTiketsData);
    }
    
    render(){
        const filteredTickets = this.getSortedTickets();
        return (
            <div className="tickets-grid">
               {
                   filteredTickets.map((ticket, index) => <Ticket key={index} ticketData={ticket}/>)
               }
            </div>
        );
    }
}

export default TicketsGrid
