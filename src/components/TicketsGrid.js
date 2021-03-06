import React, { Component } from 'react'
import getJSON from '../api/ticketsLoader'
import TicketsGridStatic from './TicketsGridStatic'

class TicketsGrid extends Component {
  state = {
    tickets: [],
    isLoaded: false,
    isLoadErr: false,
    loadErrMessage: null
  }

  loadTicketsData = async () => {
    try {
      const result = await getJSON()
      // console.log(result);
      this.setState({
        tickets: result.tickets,
        isLoaded: true,
        isLoadErr: false
      })
    } catch (err) {
      this.setState({
        isLoaded: true,
        isLoadErr: true,
        loadErrMessage: err.message
      })
      console.log(err.message)
    }
  }

  filterTicketsByStopsCount(ticketsData, stops) {
    return ticketsData.filter(ticket => {
      // console.log(ticket, stops);
      return ticket.stops === stops
    })
  }

  sortTicketsPyPrice(ticketsData) {
    return ticketsData.sort((a, b) => {
      if (a.price > b.price) return 1
      if (a.price < b.price) return -1
      return 0
    })
  }

  async componentDidMount() {
    await this.loadTicketsData()
  }

  getSortedTickets = () => {
    const { filterData } = this.props
    console.log(filterData.length)
    let newTiketsData = []
    let element
    for (let index = 0; index < filterData.length; index++) {
      element = filterData[index]
      if (element.checked === true) {
        if (element.id === -1) {
          newTiketsData = this.state.tickets.slice()
          break
        }
        newTiketsData = newTiketsData.concat(this.filterTicketsByStopsCount(this.state.tickets, element.id))
      }
    }

    return this.sortTicketsPyPrice(newTiketsData)
  }

  render() {
    return <TicketsGridStatic isLoaded={this.state.isLoaded} ticketsFilter={this.getSortedTickets()} />
  }
}

export default TicketsGrid
