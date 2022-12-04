import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
    return <div className = "new-expense">
        <ExpenseForm />
        <form></form>
    </div>
};

export default NewExpense;