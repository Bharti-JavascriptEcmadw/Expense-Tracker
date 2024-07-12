import React from 'react'
import  '../App.css'
import Forminner from './Forminner'

const Form = (props) => {
  const saveExpenseDataHandler=(Getdatahere)=>{
    console.log(Getdatahere)
    const expenseData={
      ...Getdatahere,
      id:Math.random().toString()
    }
    props.onAddExpense(expenseData)
    console.log(expenseData)

  }
  return (<div>
    <div className='form_expense'>
        <Forminner
         onSaveExpenseData={saveExpenseDataHandler}/>
   </div>
    
    
    </div>
  )
}

export default Form
