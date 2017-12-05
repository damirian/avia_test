import React from 'react';
import styled from 'styled-components';

const FilterRenderer = (props) => {
    const {HandleOnChecked} = props;
    const {HandleOnOnlyClicked} = props;
    return (
        <div className={props.className}>
            <TransfersCaption>КОЛИЧЕСТВО ПЕРЕСАДОК</TransfersCaption>
            <div>
                {
                    props.filterData.map((filter, index) => {
                        return <FilterRelativeBox key={filter.id}>
                            <div>
                                <input type="checkbox" value={filter.val} checked={filter.checked} onChange={() => HandleOnChecked(index)}/>
                                <label>{filter.name}</label>
                                {(index !== 0)? <div className="right-aligned" onClick={() => HandleOnOnlyClicked(index)}>ONLY</div>:null}
                            </div>
                        </FilterRelativeBox>;
                })
            }
            </div>
        </div>
    );
}

let filterElementPadding = 15;
let filterItemWidth = 232;
const FilterStyled = styled(FilterRenderer)`
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
    
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    display: table;

    > div {
        display: block;
    }
`;

const TransfersCaption = styled.div`
    padding: 0 ${filterElementPadding}px;
`;
    
const FilterRelativeBox = styled.div`
    padding: 0 ${filterElementPadding}px;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    width: ${filterItemWidth};
    height: 36px;
    
    position: relative;
    
    > div {
        display: flex;
        width: ${filterItemWidth - filterElementPadding * 2}px;
        height: 18px;
        position: absolute;
        margin: auto 0;
        top: 0;
        bottom: 0;
    }
    &:hover {
        background: #f1fcff;

        .right-aligned {
            display: inline-block;
        }
    }
    .right-aligned {
        cursor: pointer;
        display: none;
        margin-left: auto;
    }
`;

export default FilterStyled