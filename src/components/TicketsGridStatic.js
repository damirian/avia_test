import React from 'react';
import styled from 'styled-components';
import Ticket from './Ticket'

const TicketsGridStatic = (props) => {
    if(props.isLoaded){
        if(props.isLoadErr){
            return (<h1>Кажется что-то пошло не так</h1>);
        }
        const ticketsFilter = props.ticketsFilter;
        return (
            <div className={props.className}>
                { ticketsFilter.map((ticket, index) => <Ticket key={index} ticketData={ticket}/>) }
            </div>
        );
    } else {
        return (<h1>Подождите окончания загрузки...</h1>);
    }
}

const TicketsGridStyled = styled(TicketsGridStatic)`
    // background-color: blue;
`;

export default TicketsGridStyled