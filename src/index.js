import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css'
import {books} from './booksData.js'
import Book from './Books.js'


function BookList(){

    return(
       <section className="bookList">
           {books.map((book,index)=>{
               return <Book {...book} key={book.id} number={index}/>
           })}
       </section>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BookList/>)