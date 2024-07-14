import React from 'react'
import { useSelector } from 'react-redux'
import { deleteCustomer } from './slice/CustomerSlice'
import { useDispatch } from 'react-redux'

const CustomerView = () => {
  const dispatch = useDispatch()
  const customers =useSelector( (state)=> state.customers  )
  const deleteHandler =(index)=>{
    dispatch(deleteCustomer(index))
    
  }
  return (
    <div>
        <h3>Customers</h3>
        <ul>
            {customers.map((customer ,index)=>{
                return <li style={{listStyle:"none"}}>{customer} <button onClick={()=>deleteHandler(index)}>Delete</button></li>
            })}
        </ul>
    </div>
  )
}

export default CustomerView