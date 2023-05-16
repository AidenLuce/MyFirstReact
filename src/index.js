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

function BookList(){
    return(
       <section className="bookList">
           <Book/>
           <Book/>
           <Book/>
           <Book/>
       </section>
    )
}


const Book=()=>{
    return (
        <article className="book">
            <Image/>
            <Title/>
            <Author/>
        </article>
    )
}
const Image=()=><img src='https://m.media-amazon.com/images/I/518+jXvFO6L._SY344_BO1,204,203,200_.jpg' alt='The Covenant of Water'/>
const Title=()=><h2>The Covenant of Water</h2>
const Author=()=><h4>Abraham Verghese</h4>






const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList/>)