import React, { Component } from 'react';
import Ticket from './Ticket'
import './TicketsGrid.css'
import getJSON from '../api/ticketsLoader'

class TicketsGrid extends Component {
    state = {
        tickets: [],
        isLoaded: false,
        isLoadErr: false,
        loadErrMessage: null
    }

    loadTicketsData = async () => {
        try {
            const result = await getJSON();
            // console.log(result);
            this.setState({
                tickets: result.tickets,
                isLoaded: true,
                isLoadErr: false
            });
        } catch(err) {
            this.setState({
                isLoaded: true,
                isLoadErr: true,
                loadErrMessage: err.message
            });
            console.log(err.message);
        }
    }

    filterTicketsByStopsCount(ticketsData, stops){
        return ticketsData.filter((ticket) => {
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

    componentDidMount(){
        this.loadTicketsData();
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
                    newTiketsData = this.state.tickets;
                    break;
                }
                newTiketsData = newTiketsData.concat(this.filterTicketsByStopsCount(this.state.tickets, element.id));
            }
        }
        
        return this.sortTicketsPyPrice(newTiketsData);
    }
    
    render(){
        if(this.state.isLoaded){
            if(this.state.isLoadErr){
                return (<h1>Кажется что-то пошло не так</h1>);
            }
            const filteredTickets = this.getSortedTickets();
            return (
                <div className="tickets-grid">
                    { filteredTickets.map((ticket, index) => <Ticket key={index} ticketData={ticket}/>) }
                </div>
            );
        } else {
            return (<h1>Подождите окончания загрузки...</h1>);
        }
    }
}

export default TicketsGrid
