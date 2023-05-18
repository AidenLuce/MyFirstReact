import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css'


/* **/
// function Greeting(){
//     return (
//         <React.Fragment>
//             <Person/>
//             <Message/>
//         </React.Fragment>
//     )
// }
//
// const Person=()=><h2>John doe</h2>
// const Message=()=><p>This is my message</p>



// const author = 'Abraham Verghese'
// const title = 'The Covenant of Water'
// const img = 'https://m.media-amazon.com/images/I/518+jXvFO6L._SY344_BO1,204,203,200_.jpg'
function BookList(){
    return(
       <section className="bookList">
           <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}/>
           <Book author={secondBook.author} title={secondBook.title} img={secondBook.img}/>
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

const firstBook = {
    author: 'Abraham Verghese',
    title: 'The Covenant of Water',
    img: 'https://m.media-amazon.com/images/I/518+jXvFO6L._SY344_BO1,204,203,200_.jpg'
}
const secondBook = {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg'
}



// const Image=()=><img src='https://m.media-amazon.com/images/I/518+jXvFO6L._SY344_BO1,204,203,200_.jpg' alt='The Covenant of Water'/>
// const Title=()=><h2>The Covenant of Water</h2>
// const Author=()=><h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem'}}>Abraham Verghese</h4>






const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList/>)