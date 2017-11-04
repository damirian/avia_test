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
        let filterData = this.props.filterData;
        console.log(filterData.length);
        let newTiketsData = [];
        let element;
        for(let index = 0; index < filterData.length; index++) {
            element = filterData[index];
            if(element.checked === true) {
                if(element.id === -1) {
                    newTiketsData = this.props.ticketsData;
                    break;
                }
                newTiketsData = newTiketsData.concat(this.filterTicketsByStopsCount(this.props.ticketsData, element.id));
            }
        }
        
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
