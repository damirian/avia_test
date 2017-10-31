import React from 'react';
import sellerImage from "./sellerImage.png"
import './Ticket.css'



export default ({ticketData}) =>
    <div className="ticket-container">
        <div className="left">
            <img src={sellerImage} alt=""/>
            <div className="buy-btn">
                <div>
                    Купить<br/>
                    за {ticketData.price} P
                </div>
            </div>
        </div>
        <div className="right">
            <div>{ticketData.stops}</div>
            <div>{ticketData.departure_time}</div>
            <div>{ticketData.arrival_time}</div>
        </div>
    </div>
