import React, { Component } from 'react';
import $ from 'jquery'
import './Filter.css'

class Filter extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterData: this.props.filterData
        }
        this.HandleOnChecked = this.HandleOnChecked.bind(this);
    }
    HandleOnChecked(event) {
        let index = parseInt($(event.target).attr("index"), 10);
        let tmpFilterData = this.state.filterData;
        if(index === 0 && event.target.checked === true){
            tmpFilterData.forEach(function(element, index) {
                if(index === 0) return;
                element.checked = false;
            }, this);
        } else if (index > 0 && event.target.checked === true) {
            tmpFilterData[0].checked = false;
        }
        tmpFilterData[index].checked = event.target.checked;
        this.setState({filterData: tmpFilterData});
    }
    render(){
        return (
            <div className="filter-container">
                {
                   this.state.filterData.map((filter, index) => {
                    //    console.log(filter);
                       return <div key={index}>
                           <input type="checkbox" index={index} value={filter.val} checked={filter.checked} onChange={this.HandleOnChecked}/>
                           <label>{filter.name}</label>
                        </div>;
                   })
               }
            </div>
        );
    }
}

export default Filter
