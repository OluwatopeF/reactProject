import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyChange = () => {
    const { currency, dispatch } = useContext(AppContext);
    

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        <div>
            <label htmlFor="currency">Select Currency:  </label>
            <select 
                id="currency" 
                value={currency} 
                onChange={handleCurrencyChange}
            >
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default CurrencyChange;
