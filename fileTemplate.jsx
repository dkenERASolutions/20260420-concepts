// ============================================================
// ERA ACADEMY — React Concepts Repetition File
// Student: [Last Name] [First Name]
// GitHub: [your github username]
// ============================================================
// INSTRUCTIONS:
// Write each concept block 5 times.
// Vary the variable names, values, or logic slightly each time.
// This builds real muscle memory. Do NOT copy-paste.
// Commit and push after every writing session.
// ============================================================
import { useState, useEffect, useRef } from 'react';
// 
// WEEK 1 — CONCEPTS
// 
// CONCEPT 1: Functional Component + JSX
// Write this 5 times. Change the name, text, and className each time.
function Greeting1() {
return <h1 className='text-2xl font-bold'>Hello from Component 1</h1>;
}
function Greeting2() {
return <h1 className='text-xl text-blue-600'>Welcome back, learner!</h1>;
}
// ... (write 3 more variations)

function Greeting3() {
    return <h1 className="text-2x1 text-red-100">Ready to go, learner?</h1>;
}

function Greeting4() {
    return <h1 className="text-2x1 text-green-300">Sup, superstar! ready to start?</h1>;
}

function Greeting5() {
    return <h1 className="text-xl font-bold">working hard? lets get to it!</h1>;
}

function Greeting6() {
    return <h1 className="text-lg font-bold">Welcome to another great day!</h1>;
}

function Greeting6() {
    return <h1 className=" text-xl text-blue-600">Weclome back, Learner</h1>;
}

function MyComponent() {
    return(
        <div className="container">
            <h1>My component</h1>
            <p>This is a paragraph</p>
        </div>
    );
}

function MyComponent() {
    return(
        <div>
            <h1>My component</h1>
            <p>This is a pragraph</p>
        </div>
    );
}

function MyComponent() {
    return(
        <div>
            <h1>My component</h1>
            <p>This is a paragraph</p>
        </div>
    );
}

function MyComponent() {
    return(
        <div>
            <h1>My component</h1>
            <p>This is a paragraph</p>
        </div>
    );
}

function MyComponent() {
    return(
        <div>
            <h1>My component</h1>
            <p>This is a paragraph</p>
        </div>
    )
}

// EXPORTING DEFAULT + IMPORTING IT INTO APP.JSX concept 2

export default function Header() {
    return(
        <header className="navbar">Site Header</header>
    );
}

import Header from "./components/Header";

export default function Header() {
    return(
        <header className="navbar">Site Header</header>
    );
}

import Header from "./components/Header";

export default function Header() {
    return(
        <header className="navbar">Site Header</header>
    );
}

import Header from "./components/Header";

export default function Header() {
    return(
        <header className="navbar">Site Header</header>
    );
}

import Header from "./components/Header";

export default function Header() {
    return(
        <header className="navbar">Site Header</header>
    );
}

import Header from "./components/Header";

// concept 3

function PriceTag() {
    const price = 18.99
    const label = "Ethiopian Harrar"
    
    return(
        <div>
            <h2>{label}</h2>
            <p>${price.toFixed}</p>
            <p>{price > 15 ? "Premium" : "Standard"}</p>
        </div>
    );
}

function PriceTag() {
    const price = 18.99
    const label = "Ethiopian Harrar"
    
    return(
        <div>
            <h2>{label}</h2>
            <p>${price.toFixed}</p>
            <p>{price > 15 ? "Premium" : "Standard"}</p>
        </div>
    );
}

function PriceTag() {
    const price = 18.99
    const label = "Ethiopian Harrar"
    
    return(
        <div>
            <h2>{label}</h2>
            <p>${price.toFixed}</p>
            <p>{price > 15 ? "Premium" : "Standard"}</p>
        </div>
    );
}

function PriceTag() {
    const price = 18.99
    const label = "Ethiopian Harrar"
    
    return(
        <div>
            <h2>{label}</h2>
            <p>${price.toFixed}</p>
            <p>{price > 15 ? "Premium" : "Standard"}</p>
        </div>
    );
}

function PriceTag() {
    const price = 18.99
    const label = "Ethiopian Harrar"
    
    return(
        <div>
            <h2>{label}</h2>
            <p>${price.toFixed}</p>
            <p>{price > 15 ? "Premium" : "Standard"}</p>
        </div>
    )
}

function PriceTag() {
    const price = 18.99
    const label = "Ethiopian Harrar"
    
    return(
        <div>
            <h2>{label}</h2>
            <p>${price.toFixed}</p>
            <p>{price > 15 ? "Premium" : "Standard"}</p>
        </div>
    );
}

// Concept 4

function Counter() {
    const [count, setCount] = useState[0];
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={ () => setCount(count + 1)}>+</button>
            <button onClick={ () => setCount(count + 1)}>-</button>
            <button onClick={ () => setCount(0)}>reset</button>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState[0];
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={ () => setCount(count + 1)}>+</button>
            <button onClick={ () => setCount(count + 1)}>-</button>
            <button onClick={ () => setCount(0)}>reset</button>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState[0];
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={ () => setCount(count + 1)}>+</button>
            <button onClick={ () => setCount(count + 1)}>-</button>
            <button onClick={ () => setCount(0)}>reset</button>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState[0];
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={ () => setCount(count + 1)}>+</button>
            <button onClick={ () => setCount(count + 1)}>-</button>
            <button onClick={ () => setCount(0)}>reset</button>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState[0];
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={ () => setCount(count + 1)}>+</button>
            <button onClick={ () => setCount(count + 1)}>-</button>
            <button onClick={ () => setCount(0)}>reset</button>
        </div>
    );
}
