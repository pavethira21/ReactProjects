import React,{useEffect,useState} from 'react';
import Invoice from './invoice.jsx';
export default function Bill(){

  const [InvoiceNumber,setInvoiceNumber] =useState('');
  const [Dates,setDates]=useState('');
  const [view,setView]=useState(true);

  useEffect(()=>{
    const current = new Date()
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}}`
    setDates(date);
  },[])

  const create =()=>{
    setView(false)
  }

  return(
    <>
    {view?
    <div className="container">
    <div className="form">
      <div className="inputs">
        <input type='text' placeholder='Invoice number' value={InvoiceNumber} onChange={(e)=>setInvoiceNumber(e.target.value)}/>

      </div>
      <div className='buttons'>
        <button onClick={create}>Create</button>
      </div>
    </div>
  </div>:<Invoice InvoiceNumber={InvoiceNumber} date={Dates}/>
  
  }
    
    </>
  )
}