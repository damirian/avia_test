import React from 'react';
import styled, { css } from 'styled-components';

const FilterRenderer = (props) => {
    const {HandleOnChecked} = props;
    const {HandleOnOnlyClicked} = props;
    const {HandleOnHover} = props;

    return (
        <FilterStyled>
            <TransfersCaption>КОЛИЧЕСТВО ПЕРЕСАДОК</TransfersCaption>
            <div>
                {
                    props.filterData.map((filter, index) => {
                        return <FilterRelativeBox
                            key={filter.id}
                            onClick={() => HandleOnChecked(index)}
                            onMouseEnter={() => HandleOnHover(index, true)}
                            onMouseLeave={() => HandleOnHover(index, false)}
                        >
                            <input type="checkbox" value={filter.val} checked={filter.checked} onChange={(event) => event.stopPropagation()}/>
                            <label>{filter.name}</label>
                            {(index !== 0)? <OnlyDiv className="only" hovered={filter.hover} onClick={(event) => HandleOnOnlyClicked(event, index)}>ONLY</OnlyDiv>:null}
                        </FilterRelativeBox>;
                    })
                }
            </div>
        </FilterStyled>
    );
}

let filterElementPadding = 15;
let filterItemWidth = 232;
const FilterStyled = styled.div`
    border-radius: 5px;
    width: ${filterItemWidth}px;
    background: #ffffff;
    box-shadow: 0px 1px 4px rgba(91,137,163,0.25);
    margin-right: 19px;
    padding: ${filterElementPadding}px 0 ${filterElementPadding}px 0;
    font-size: 12.0px;
    font-style: normal;
    font-stretch: normal;
    font-weight: 400;
    text-align: left;
    
    box-sizing: border-box;
`;

const TransfersCaption = styled.div`
    padding: 0 ${filterElementPadding}px;
`;
    
const FilterRelativeBox = styled.div`
    padding: 0 ${filterElementPadding}px;
    box-sizing: border-box;

    width: ${filterItemWidth}px;
    height: 36px;
    
    display: flex;
    align-items: center;
    
    &:hover {
        background: #f1fcff;
    }
`;

const OnlyDiv = styled.div`
    cursor: pointer;
    margin-left: auto;
    display: none;
    ${props => props.hovered && css`
        display: inline-block;
    `};
`

export default FilterRenderer