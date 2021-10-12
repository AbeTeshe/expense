import React from 'react';
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
    const dropdownHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className="expense-filter">
            <div>
                <h3>Filter by year</h3>
            </div>
            <div>
                <select className="expense-filter__select"  value={props.selected} onChange={dropdownHandler}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter;