import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css'

const books=[
    {
        author: 'Abraham Verghese',
        title: 'The Covenant of Water',
        img: 'https://m.media-amazon.com/images/I/518+jXvFO6L._SY344_BO1,204,203,200_.jpg'
    },
    {
        author: 'James Clear',
        title: 'Atomic Habits',
        img: 'https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg'
    },
]

function BookList(){
    return(
       <section className="bookList">{newNames}</section>
    )
}

const names=['john','peter','shawn'];
const newNames= names.map((name)=>{
    return (
        <h1>{name}</h1>
    )
})
console.log(newNames)



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