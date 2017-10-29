import React, { Component } from 'react';
import sellerImage from "./sellerImage.png"
import './Ticket.css'

class Ticket extends Component {
    // constructor(props){
    //     super(props);
    //     //...
    // }
    state = {
    }
    render() {
        return (
            <div className="ticket-container">
                <div className="left">
                    <img src={sellerImage} alt=""/>
                    <div className="buy-btn">
                        <div>
                            Купить<br/>
                            за {this.props.ticketData.price} P
                        </div>
                    </div>
                </div>
                <div className="right">
                </div>
            </div>
        );
    }
}

export default Ticket