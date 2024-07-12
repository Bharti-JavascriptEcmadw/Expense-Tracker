import React from 'react'
import '../App.css'
import ExDate from './ExDate'


const ExpenseItem = (props) => {
 return (
    <div className='expense__items'>
        <div className="expense_item">
          <ExDate date={(new Date(props.date))}/>
         <h3>{props.title}</h3>
          </div>

          <div className='expense_description'>
            <div className='expense_pricce'>Price: ${props.amount}</div>
          </div>
        
      
    </div>
  )
}

export default ExpenseItem
