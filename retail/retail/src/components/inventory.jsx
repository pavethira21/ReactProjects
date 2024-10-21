import {useState} from 'react';

export default function Inventory(){

    const [code,setCode] = useState('');
    const [quantity,setQuantity] = useState(0);
    const [price,setPrice] = useState(0);
    const [pName,setPname] = useState();
      
    // const sql = require('mssql/msnodesqlv8');
    // var config ={
    //     server:"DESKTOP-2KSP3S9\\SQLEXPRESS",
    //     database:"retail_store",
    //     driver:"msnodesqlv8",
    //     options:{
    //         trustedConnection:true
    //     }

    // }
    
    // sql.connect(config,function(err){
    //     if(err)console.log(err);
    //     var request = new sql.Request();
    //     request.query("SELECT * FROM inventory_product",function(err,row){
    //         if(err)console.log(err)
    //         else console.log(row)

    //     }) 
    // })
    // const query = "SELECT * FROM inventory_product"

    // sql.query(connectString,query,(err,rows)=>{
    //     console.log(rows);
    // })
    function handleSubmit(){
       
    }
       
    return(

        <>
            <form className="container" onSubmit={handleSubmit}>
            <p>Inventory</p>
            <div className="control">
                <label htmlFor="pName">Product Name</label>
                <input type='text' name='pName' id='pName' value={code}
                onChange={(e) => setPname(e.target.value)}/>
                <label htmlFor="code">Product Code</label>
                <input type="text"
                name="code"
                id="code"
                placeholder="Item code"
                maxLength={96}
                value={code}
                onChange={(e) => setCode(e.target.value)}/>
                <label htmlFor='quantity'>Quantity</label>
                <input type="text"
                name="quantity"
                id="quantity"
                placeholder="Quantity"
                maxLength={33}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}/>
            <label htmlFor='price'>Price</label>
            <input
                type="text"
                name="price"
                id="price"
                placeholder="Price"
                maxLength={33}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
                
                <div className="form-actions">
                <button type="submit" className="button" >Add 
                {/* { isEditing ? "Finish Editing" : "Add Table Item"} */}
                </button>
                </div>
                
        </div>
        </form>
        </>

        
    )
}