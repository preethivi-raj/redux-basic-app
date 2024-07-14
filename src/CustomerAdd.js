import React, { useState } from 'react'
import { addCustomer as addCustomerAction } from './slice/CustomerSlice'
import { useDispatch } from 'react-redux'


const CustomerAdd = () => {
    const [input , setInput]= useState("")
    const dispatch = useDispatch()

    const addCustomer = ()=>{
        if(input){
            dispatch(addCustomerAction(input))
           
            setInput("")
        }
    }

    
  return (
   
            <div>
                <h3>Add New Customer</h3>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
                <button onClick={addCustomer}>Add</button>
            </div>   

  )
}

export default CustomerAdd