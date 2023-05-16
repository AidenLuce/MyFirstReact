import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting(){
    return (
        <React.Fragment>
            <Person/>
            <Message/>
        </React.Fragment>
    )
}

const Person=()=><h2>John doe</h2>
const Message=()=><p>This is my message</p>


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Greeting/>)