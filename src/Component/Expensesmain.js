import React from 'react';
import '../App.css';
import ExpenseItem from './ExpenseItem';

function Expensesmain(props) {
  // Ensure props.items is an array before attempting to map over it
  if (!Array.isArray(props.items)) {
    return <div className='expensemain_'>No expenses to display</div>;
  }

  return (
    <div className='expensemain_'>
      {props.items.map(expense => (
        <ExpenseItem
          key={expense.id} // Assuming expense.id is unique
          title={expense.title}
          date={expense.date} // Uncomment this line if date is available
          amount={expense.amount} // Adjust to match your data structure
        />
      ))}
    </div>
  );
}

export default Expensesmain;
