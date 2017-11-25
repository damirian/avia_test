import React from 'react';
import styled from 'styled-components';

const FilterRenderer = (props) => {
    const {HandleOnChecked} = props;
    const {HandleOnOnlyClicked} = props;
    return (
        <div className={props.className}>
            <div>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
            <div>
                {
                    props.filterData.map((filter, index) => {
                        return <div className="filter-flex" key={filter.id}>
                            <input type="checkbox" value={filter.val} checked={filter.checked} onChange={() => HandleOnChecked(index)}/>
                            <label>{filter.name}</label>
                            {(index !== 0)? <div className="right-aligned" onClick={() => HandleOnOnlyClicked(index)}>ONLY</div>:null}
                        </div>;
                })
            }
            </div>
        </div>
    );
}

let filterElementPadding = '15px';
const FilterStyled = styled(FilterRenderer)`
    border-radius: 5px;
    width: 232px;
    height: 231px;
    background: #ffffff;
    box-shadow: 0px 1px 4px rgba(91,137,163,0.25);
    margin-right: 19px;
    padding: ${filterElementPadding} 0 ${filterElementPadding} 0;
    font-size: 12.0px;
    font-style: normal;
    font-stretch: normal;
    font-weight: 400;
    text-align: left;
    
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    > div {
        &:first-child {
            padding: 0 ${filterElementPadding};
        }
        display: block;
    }
    
    .filter-flex {
        padding: 0 ${filterElementPadding};

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        width: 232px;
        height: 36px;
        
        display: flex;

        .right-aligned {
            cursor: pointer;
            display: none;
            margin-left: auto;
        }
        
        &:hover {
            background: #f1fcff;

            .right-aligned {
                display: block;
            }
        }
    }
`;

export default FilterStyled