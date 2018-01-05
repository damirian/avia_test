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
            <TicketsGridStyled>
                { ticketsFilter.map((ticket, index) => <Ticket key={index} ticketData={ticket}/>) }
            </TicketsGridStyled>
        );
    } else {
        return (<h1>Подождите окончания загрузки...</h1>);
    }
}

const TicketsGridStyled = styled.div`
    // background-color: blue;
`;

export default TicketsGridStatic