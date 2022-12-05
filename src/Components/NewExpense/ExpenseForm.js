import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //document.getElementById('').addEventListener('click', (event) => {});

//   const [userInput, setUserInput] = useState({
//     enteredTitle: '',
//     enteredAmonut: '',
//     enteredDate: ''
//   });

  const [enteredTitle, setEnterdTitle] = useState('');

  const titleChangeHandler = (event) => {
    setEnterdTitle(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
        
    // })

    // setUserInput((preState) => {
    //     return {
    //         ...preState, enteredTitle: event.target.value
    //     };
    // });
  };

  const [enteredAmonut, setEnteredAmount] = useState('');

  const amountChangeHander = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredAmonut: event.target.value,
    // });

  };

  const [enteredDate, setEnteredDate] = useState('');

  const dateChangeHander = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // });

  };

  const submitHander = (event) => {
    event.preventDefault();

    const enpenseData = {
        title: enteredTitle,
        amount: enteredAmonut,
        date: new Date(enteredDate)
    };

    console.log(enpenseData);
  };

  return (
    <form onSubmit={submitHander}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHander}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHander}
            min="2000-01-01"
            step="2025-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
