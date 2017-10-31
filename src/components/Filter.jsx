import React, { Component } from 'react';
// import $ from 'jquery'
import './Filter.css'

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
        return (
            <div className="filter-container">
                {
                    this.state.filterData.map((filter, index) => {
                        return <div className="filter-flex" key={index}>
                            <input type="checkbox" value={filter.val} checked={filter.checked} onChange={() => this.HandleOnChecked(index)}/>
                            <label>{filter.name}</label>
                            {(index !== 0)? <div className="right-aligned" onClick={() => this.HandleOnOnlyClicked(index)}>ONLY</div>:null}
                        </div>;
                   })
               }
            </div>
        );
    }
}

export default Filter
