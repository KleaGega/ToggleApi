import React,{useState} from 'react'
import useSecondFetch from '../useSecondFetch';
import './second.css'
function Second() {
  const url2 ="https://fakestoreapi.com/products";
  const { product, error ,loading} = useSecondFetch(url2);
  return (
    <div className='product_container'>
       
       {product && product.length > 0 ? (
      product.map((item, index) => (
        <div key={index} className='item'>
          <p>Price: ${item?.price}</p>
          <p>Description: {item?.description}</p>
        </div>
      ))
    ) : (
      <p>No products found.</p>
    )}
             
            
    </div>
  )
}

export default Second
