import React, {useState} from 'react'
import '../App.css'

const Forminner = (props) => {

    const [entertitle, setentertitle]=useState('');
    const [enteramount, setamount]=useState('');
    const [enterdate, setdate]=useState('');

    const Titlechangehandler=(event)=>{
        setentertitle(event.target.value);
    };
    const Amountchangehandler=(event)=>{
        setamount(event.target.value);
     };
    const  Datechangehandler=(event)=>{
        setdate(event.target.value);
    };
    // ! convert string as number 
    console.log(typeof (enteramount));
    const amount = parseFloat(enteramount);
    const z=amount.toFixed(2);
    console.log(z);
    console.log(typeof(amount))

    const submithandler=(event)=>{
        event.preventDefault();
       
        const expenseData={
            title:entertitle,
            amount:z,
            date:new Date (enterdate),
        };
        props.onSaveExpenseData(expenseData)
        console.log(expenseData)


        setentertitle('')
        setamount('')
        setdate('')
    }
  return (
    <div>

         <form onSubmit={submithandler}>
            <div className='form_container'> 
            <div className='form1'>
                <label>Title</label>
                <input type="text" value={entertitle} onChange={Titlechangehandler}></input>
            </div>

            <div className='form1'>
                <label>Amount</label>
                <input type="number" value={enteramount} 
                 onChange={Amountchangehandler}></input>
            </div>

            <div className='form1'>
                <label>Date</label>
                <input type="date" onChange={Datechangehandler} value={enterdate}></input>
            </div>

            <div className='button_ form1'>
                <button type='submit'> 
                    Add Expense
                </button>
            </div>
            
            
            
            </div>
        </form>
      
    </div>
  )
}

export default Forminner
