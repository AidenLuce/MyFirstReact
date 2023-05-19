import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css'

const books=[
    {
        author: 'Abraham Verghese',
        title: 'The Covenant of Water',
        img: 'https://m.media-amazon.com/images/I/518+jXvFO6L._SY344_BO1,204,203,200_.jpg',
        id:1,
    },
    {
        author: 'James Clear',
        title: 'Atomic Habits',
        img: 'https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg',
        id:2,
    },
]

function BookList(){
    return(
       <section className="bookList">
           <EventExamples/>
           {books.map((book)=>{
               return(
                   <Book {...book} key={book.id}/>
               );
           })}
       </section>
    )
}

const EventExamples =()=>{
    const handleFormInput = () =>{
        console.log('handle form input')
    }
    const handleButtonClick = () =>{
        alert('handle button click')
    }
    return (
        <section>
            <form>
                <h2>Typical Form</h2>
                <input
                    type='text'
                    name='example'
                    onChange={handleFormInput}
                    style={{margin: '1rem 0'}}
                />
            </form>
            <button onClick={handleButtonClick}>Click me</button>
        </section>
    )
}




const Book=(props)=>{
    const {img, title, author} = props;
    console.log(props)
    return (
        <article className="book">
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    )
}










const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList/>)