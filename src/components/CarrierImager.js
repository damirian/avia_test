import styled from 'styled-components';

export default styled.div`
    background: url(${props => `/media/carriersLogos/${props.carrier}.png`}) 50% 50% no-repeat;
    background-size: contain;
    width: 120px;
    height: 35px;
    margin: 0 auto;
    margin-bottom: 20px;
    display: block;
`;