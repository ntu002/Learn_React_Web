import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHander = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    //console.log(expenseData);
    setIsEditing(false); // quay ve trang thai ban dau
  };

  const startEditingHander = () => {
    setIsEditing(true);
  };

  const stopEditingHander = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHander}>Add new Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHander}
          onCancel={stopEditingHander}
        />
      )}
      <form></form>
    </div>
  );
};

export default NewExpense;
