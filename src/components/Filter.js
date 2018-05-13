import React, { Component } from 'react'
import FilterStyled from './FilterStatic'

class Filter extends Component {
  HandleOnOnlyClicked = (event, index) => {
    if (index === 0) return
    const { onChange, filterData } = this.props

    let newFilterData = filterData.slice()
    newFilterData[index].only = true
    newFilterData.forEach((element, currIndex) => {
      if (currIndex === index) {
        element.checked = true
        return
      }
      element.checked = false
    }, this)

    onChange(newFilterData)
    event.stopPropagation()
  }
  HandleOnChecked = index => {
    const { onChange, filterData } = this.props

    // console.log(index);
    let newFilterData = filterData.slice()
    newFilterData[index].checked = !newFilterData[index].checked
    if (index === 0 && newFilterData[0].checked === true) newFilterData.forEach(element => (element.checked = true))
    else if (index > 0 && newFilterData[index].checked === false) newFilterData[0].checked = false
    onChange(newFilterData)
  }
  HandleOnHover = (index, hoverState) => {
    const { onChange, filterData } = this.props

    let newFilterData = filterData.slice()
    newFilterData[index].hover = hoverState
    onChange(newFilterData)
  }
  render() {
    const { filterData } = this.props
    return (
      <FilterStyled
        filterData={filterData}
        HandleOnChecked={this.HandleOnChecked}
        HandleOnOnlyClicked={this.HandleOnOnlyClicked}
        HandleOnHover={this.HandleOnHover}
      />
    )
  }
}

export default Filter
