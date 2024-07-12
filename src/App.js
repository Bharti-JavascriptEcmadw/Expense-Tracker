import React, { useState, useEffect } from 'react';
import './App.css';
import Expensesmain from './Component/Expensesmain';
import Form from './Component/Form';


// let DummyExp=[ ]

const App = () => {
  const [expenses, setExpenses] = useState([]);
  function fetchdata(){

      fetch(`http://localhost:5000/post `).then(
    response=>{
      return response.json();
    }
  ).then(
    data  =>{
      console.log(data)
      setExpenses(data);
    }
  )}
  
  useEffect(()=>{
  fetchdata()
  },[]);


  
  const addExpenseHandler = expense => {
    // const updatedExpenses = [expense, ...expenses];
    // setExpenses(updatedExpenses);
    fetch(`http://localhost:5000/`,{
      method:'post',
      body:JSON.stringify(expense),
      headers:{
        'content-Type':'application/json'
      }
    }).then(
    response=>{
    fetchdata();
    });
  }



  return (
    <div className='main'>
      <h2>ADD EXPENSE</h2>
      <Form onAddExpense={addExpenseHandler} />
      <Expensesmain items={expenses} />
    </div>
  );
};

export default App;
