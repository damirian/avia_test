import React from 'react';
import styled from 'styled-components';
import sellerImage from "./sellerImage.png"

const Ticket = (props) => {
    return (
        <StyledTicket>
            <LeftBlock>
                <SellerImage src={sellerImage} alt=""/>
                <BuyBtn>
                    <div>
                        Купить<br/>
                        за {props.ticketData.price} P
                    </div>
                </BuyBtn>
            </LeftBlock>
            <RightBlock>
                <div>{props.ticketData.stops}</div>
                <div>{props.ticketData.departure_time}</div>
                <div>{props.ticketData.arrival_time}</div>
            </RightBlock>
        </StyledTicket>
    )
}

const LeftBlock = styled.div`
    border-radius: 0px;
    width: 200px;
    height: 161px;
    border-right: solid 1px #eceff1;
    padding: 25px 20px 25px 20px;
    box-sizing: border-box;
`;

const SellerImage = styled.img`
    width: 120px;
    height: 35px;
    margin: 0 auto;
    margin-bottom: 20px;
    display: block;
`;

const RightBlock = styled.div`

`;

const BuyBtn = styled.div`
    cursor: pointer;
    border-radius: 5px;
    width: 100%;
    height: 56px;
    background: #ff6c00;
    box-shadow: 0px 2px 1px rgba(0,0,0,0.1);
    box-shadow: 0px 1px 0px #d54d08;
    color: #ffffff;
    text-align: center;
    font-family: sans-serif;
    font-size: 17px;
    font-style: normal;
    font-stretch: normal;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
        background: #ff8123;
        box-shadow: 0px 1px 5px rgba(0,0,0,0.25);
        box-shadow: 0px 1px 0px #f6661c;
    }
`;

const StyledTicket = styled.div`
    border-radius: 5px;
    width: 566px;
    height: 161px;
    background: #ffffff;
    box-shadow: 0px 1px 4px rgba(91,137,163,0.25);
    margin-bottom: 20px;
    display: flex;

    &:hover {
        box-shadow: 0px 5px 25px rgba(91,137,163,0.1);
    }
`
export default Ticket