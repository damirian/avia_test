import React, { Component } from 'react'
import TicketsGrid from './TicketsGrid.js'
import Filter from './Filter.js'
import styled from 'styled-components'

class TestApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: [
        {
          id: -1,
          name: 'Все',
          checked: true,
          only: true,
          hover: false
        },
        {
          id: 0,
          name: 'Без пересадок',
          checked: true,
          only: false,
          hover: false
        },
        {
          id: 1,
          name: '1 пересадка',
          checked: true,
          only: false,
          hover: false
        },
        {
          id: 2,
          name: '2 пересадки',
          checked: true,
          only: false,
          hover: false
        },
        {
          id: 3,
          name: '3 пересадки',
          checked: true,
          only: false,
          hover: false
        }
      ]
    }
  }

  filterChanged = newFilter => {
    this.setState({ filter: newFilter })
  }

  render = () => {
    return (
      <TestAppStyled>
        <Filter filterData={this.state.filter} onChange={this.filterChanged} />
        <TicketsGrid filterData={this.state.filter} />
      </TestAppStyled>
    )
  }
}

const TestAppStyled = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 164px 103px 111px 104px;
  background-color: #f3f7fa;
`

export default TestApp
