import React,{useState} from 'react'
import useFirstFetch from '../useFirstFetch';
import './first.css'
function First() {
  const url1 = 
    "https://openlibrary.org/search.json?q=crime&fields=key,title,author_name,first_publish_year&limit=5&page=1"
  
  const { data} = useFirstFetch(url1);
  return (
    <div className='book_container'>
              {data.map((book, index) => (
                  <div key={index} className='item'>
                  <p>Title: {book.title}</p>
                  <p>Author: {book.author_name || "Unknown"}</p>
                  <p>Year: {book.first_publish_year || "N/A"}</p>
               </div>
              ))}
           
      
    </div>
  )
}

export default First
