import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value);
        if (value > 20000) {
            alert("Budget cannot exceed 20,000!");
            return;
        }
        setNewBudget(value);

    // const remBudget = budget ;
    //     if(budget < remBudget){
    //         alert("Cannot reduce budget below what was spent.");
    //         return;
    //     }

    };
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
