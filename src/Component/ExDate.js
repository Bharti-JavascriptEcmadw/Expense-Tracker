import React from 'react'
import '../App.css'
// import ExpenseItem from './ExpenseItem';


const ExDate = (props) => {
    // const y= props.date;
    // const y= day (z);
    // console.log(props.date)
    const month=props.date.toLocaleString('en-US',{'month':'long'});
    const day=props.date.toLocaleString('en-US',{'day':'2-digit'});
    const year=props.date.getFullYear()
   
  return (
    
    <div className='date'> 
    <div className='expense_day'>{day}</div>
    <div className='expense_month'>{month}</div>
    <div className='expense_year'>{year}</div>  
    {/* <ExpenseItem></ExpenseItem>           */}
   </div>


  )
}

export default ExDate;
