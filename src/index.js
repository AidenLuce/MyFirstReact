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



const author = 'Abraham Verghese'
const title = 'The Covenant of Water'
const img = 'https://m.media-amazon.com/images/I/518+jXvFO6L._SY344_BO1,204,203,200_.jpg'
function BookList(){
    return(
       <section className="bookList">
           <Book author={author} title={title} img={img}/>
           <Book author={author} title={title} img={img}/>
       </section>
    )
}


const Book=(props)=>{
    console.log(props)
    return (
        <article className="book">
            <img src={props.img} alt={props.title}/>
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
        </article>
    )
}
// const Image=()=><img src='https://m.media-amazon.com/images/I/518+jXvFO6L._SY344_BO1,204,203,200_.jpg' alt='The Covenant of Water'/>
// const Title=()=><h2>The Covenant of Water</h2>
// const Author=()=><h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem'}}>Abraham Verghese</h4>






const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList/>)