import React, { Component } from 'react';
import FilterStyled from './FilterStatic';

class Filter extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterData: this.props.filterData
        }
        this.HandleOnOnlyClicked = this.HandleOnOnlyClicked.bind(this);
        this.HandleOnChecked = this.HandleOnChecked.bind(this);
    }
    HandleOnOnlyClicked(index) {
        if(index === 0) return;
        const {onChange} = this.props;

        let newFilterData = this.state.filterData;
        newFilterData[index].only = true;
        newFilterData.forEach((element, currIndex) => {
            if(currIndex === index) {
                element.checked = true;
                return;
            }
            element.checked = false;
        }, this);
        
        onChange(newFilterData);
    }
    HandleOnChecked(index) {
        const {onChange} = this.props;

        // console.log(index);
        let newFilterData = this.state.filterData;
        newFilterData[index].checked = !newFilterData[index].checked;
        if(index === 0 && newFilterData[0].checked === true) newFilterData.forEach((element) => element.checked = true);
        else if (index > 0 && newFilterData[index].checked === false) newFilterData[0].checked = false;
        onChange(newFilterData);
    }
    render(){
        return <FilterStyled 
            filterData = {this.state.filterData} 
            HandleOnChecked = {this.HandleOnChecked} 
            HandleOnOnlyClicked = {this.HandleOnOnlyClicked}
        />
    }
}

export default Filter
