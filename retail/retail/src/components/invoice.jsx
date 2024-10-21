import ReactPrint, { useReactToPrint } from 'react-to-print';
import '../invoice.css'
import React,{useRef,useState,useEffect} from 'react';
import {Close} from '@mui/icons-material';
import {Dialog,DialogTitle,DialogContent} from '@mui/material'

export default function Invoice( onStart){
const contentRef=useRef(null);
const reactToPrintFn = useReactToPrint({contentRef});
const [Quan,setQuan] =useState(0);
const [openPopUp,setOpenPopUp]=useState(false);
const [Item,setItem]=useState('');
const[Amount,setAmount]=useState(0);
const [List,setList]=useState([]);
const [date,setDates]=useState('');

// let newDate = new Date();
// let date = newDate.getDate();
//const date= '19/10/2024';
useEffect(()=>{
    const today = new Date();
    const date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`
    setDates(date);
  },[])


 const addData=()=>{
List.push({
    product:Item,
    amount:Amount,
    quantity:Quan,
})
 setItem('')
 setAmount(0)
 setQuan(0)
 setOpenPopUp(false);

 }
 

 let sum =0;
 List.forEach(amount=>
 {
    console.log(amount)
    sum += (parseInt(amount.amount)* parseInt(amount.quantity)); 
 }
 )

    return(
        <>
        <div className="container" ref={contentRef}>
            <div className="container"> 
              <div className="row">
                <div>
                <div className="col-md-8">
                   <div className='row'>
                    <div className="col-md-6 text-center bbc ">
                    <h4><strong>KS GROUP</strong></h4>
                    <p>{date}</p>
                    </div>
                    


                   </div>
                   <br/>
                 </div>
                
                 <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h2>RECIEPT</h2>
                        <p></p>
                    </div>
                  </div>
                  <br/>
                  <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th className='col-md-4 '><h5>Products</h5></th>
                                <th className='col-md-2 '><h5>Quantity</h5></th>
                                <th className='col-md-2'><h5>Amount</h5></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                List.length?
                                List.map((items,index)=>{
                                    return(
                                        <tr key={index}>
                                        <td className='col-md-5 '>{items.product}</td>
                                        <td className='col-md-4'>{items.quantity}</td>
                                        <td className='col-md-3'>{items.amount}</td>
                                        </tr>
                                );
                                 }):null
                            }
                            <tr>
                                <td className='text-right'>
                                    <p>
                                        <strong>Total amount:</strong>
                                    </p>
                                    <p>
                                        <strong>Payable Amount</strong>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <strong>Rs{sum}</strong>
                                    </p>
                                    <p>
                                        <strong>Rs{sum}</strong>
                                    </p>
                                </td>
                            </tr>
                            <tr style={{color:'F81d2d'}}>
                               <td className='text-right'><h4><strong>Total:</strong></h4></td>
                               <td className='text-left'><h4><strong>Rs{sum}</strong></h4></td>
                            </tr>
                    </tbody>
                    </table>
                    
                    <button  onClick={()=>setOpenPopUp(true)}> Add Products</button>
                    
                    
                    <button onClick={reactToPrintFn}>Print</button>
                    <div ref={contentRef}>Reciept</div>
                    {/* <ReactPrint trigger={()=> <button>Print</button>} content={()=>ref.current} documentTitle='Reciept'/> */}
                  </div>
                  <div>
                    <div className='col-md-12'>
                        
                        <br></br>
                        <p><b>KS GROUP</b></p>

                    </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        
        
       
       
        

        <Dialog open={openPopUp}>
            <DialogTitle>
                <div className='title'>
                    <div className='hed'>Product</div>
                    <div className='icon-cross' onClick={()=>setOpenPopUp(false)}><Close/></div>
                </div>
            </DialogTitle>
            <DialogContent>
                <div className='container'>
                   <div className='forms'>
                    <input type='text' value={Item} onChange={(e)=>setItem(e.target.value)} placeholder='PR name'/>
                    <input type='text' value={Quan} onChange={(e)=>setQuan(e.target.value)} placeholder='Quantity'/>
                    <input type='text' value={Amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Amount'/>
                   </div>
                   <div className='buttons'>
                    <button onClick={addData}>ADD</button>
                   </div>

                </div>
            </DialogContent>

        </Dialog>
        </>
    );

}