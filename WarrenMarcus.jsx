// ============================================================
// ERA ACADEMY — React Concepts Repetition File
// Student: [Warren] [Marcus]
// GitHub: [marcusj024]
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
    return <h1 className='text-2xl font-bold'>Hello from Component 1</h1>
}
function Greeting4() {
    return <h1 className='text-xl text-blue-600'>Welcome back, leaner!</h1>
}
function Greeting5() {
    return <h1 className='text-2xl font-bold'>Hello from Component 1</h1>
}
function Greeting6() {
    return <h1 className='text-xl text-blue-600'>Hello from Component</h1>
}
function Greeting7() {
    return <h1 className="text-2xl font-bold">Welcome back, Component</h1>
}
function Greeting8() {
    return <h1 className="text-xl text-blue-600">Hello from Component</h1>
}

// Concept 1: Functional Component + JSX Return
function MyCompnent() {
    return(
        <div className="container">
            <h1>My component</h1>
            <p>This is a paragraph</p>
        </div>
    );
}

function MyComponent() {
    return(
        <div className="container">
            <h1>My component</h1>
            <p>This is a paragraph</p>
        </div>
    );
}

function MyComponent(){
    return(
        <div className="container">
        <h1>My component</h1>
        <p>This is paragraph</p>
            
        </div>
    );
}

function MyComponent() {
    return(
        <div className="container">
            <h1>My component</h1>
            <p>This is paragraph</p>
        </div>
    );
}

function MyComponent() {
    return(
        <div className="container">
            <h1>My Component</h1>
          <p>This is a paragraph</p> 
        </div>
    );
}

function MyComponent() {
    return(
        <div className="container">
          <h1>My Component</h1>
          <p>This is a paragraph</p>  
        </div>
    );
}

// Concept 2: Export Default + Import in App.jsx
export default function Header() {
    return(
        <header className="navbar">Site Header</header>
    );
}

// In the app.jsx
import Header from "./components/Header"
export default function Header() {
    return(
        <header className="navbar">Site Header</header>
    );
}

import Header from "./components/Header"
export default function Header() {
    return(
        <header className="navbar">Site Header</header>
    );
}

import Header from "./components/Header"
export default function Header() {
    return(
        <header className="navbar">Site Header</header>
    );
}

import Header from "./components/Header"
export default function Header() {
    return(
        <header className="navbar">Site Header</header>
    );
}

import Header from  "./components/Header"
export default function Header() {
    return(
        <header className="navbar">Site Header</header>
    );
}

import Header from "./components/Header"
export default function Header() {
    return(
        <header className="navbar">Site Header</header>
    );
}

// Concept 3: JSX with Embedded Javascript
function PriceTag() {
    const price = 18.99
    const label = "Ethinopian Harrar"
    
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
    const label = "Ethinopian Harrar"
    
    return(
        <div>
            <h2>{label}</h2>
            <p>${price.toFixed}</p>
            <p>{ price > 15 ? "Premium" : "Standard"}</p>
        </div>
    );
}

function PriceTag()  {
    const price = 18.99
    const label = "Ethinopian Harrar"
    
    return(
        <div>
            <h2>{label}</h2>
            <p>${price.toFixed}</p>
            <p>{ price > 15 ? "Premium" : "Standard"}</p>
            
        </div>
    );
}

function PriceTag()  {
    const price = 18.99
    const label = "Ethinopian Harrar"
    
    return(
        <div>
            <h2>{label}</h2>
            <p>${price.toFixed}</p>
            <p>{ price > 15 ? "Premium" : "Standard"}</p>
            
        </div>
    );
}
function PriceTag() {
    const price = 18.99
    const label = "Ethinopian Harrar"
    
    
    return(
        <div>
            <h2>{label}</h2>
            <p>${price.toFixed}</p>
            <p>{ price > 15 ? "Premium" : "Standard"}</p>
        </div>
    );
}
function PriceTag()  {
    const price = 18.99
    const label = "Ethinopian Harrar"
    
    return(
        <div>
            <h2>{label}</h2>
            <p>${price.toFixed}</p>
            <p>{ price > 15 ? "Premium" : "Standard"}</p>
            
        </div>
    );
}

// Concept 4: UseState - Counter Pattern
function Counter() {
    const [count, setCount] = useState(0);
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={ () => setCount(count + 1)}>+</button>
            <button onClick={ () => setCount(count - 1)}>-</button>
            <button onClick={ () => setCount(0)}>Reset</button>
        </div>
    );
}
function Counter() {
    const [count, setCount] = useState(0);
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={ () => setCount(count + 1)}>+</button>
            <button onClick={ () => setCount(count - 1)}>-</button>
            <button onClick={ () => setCount(0)}>Reset</button>
        </div>
    );
}
function Counter() {
    const [count, setCount] = useState(0);
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={ () => setCount(count + 1)}>+</button>
            <button onClick={ () => setCount(count - 1)}>-</button>
            <button onClick={ () => setCount(0)}>Reset</button>
        </div>
    );
}
function Counter() {
    const [count, setCount] = useState(0);
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={ () => setCount(count + 1)}>+</button>
            <button onClick={ () => setCount(count - 1)}>-</button>
            <button onClick={ () => setCount(0)}>Reset</button>
        </div>
    );
}
function Counter() {
    const [count, setCount] = useState(0);
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={ () => setCount(count + 1)}>+</button>
            <button onClick={ () => setCount(count - 1)}>-</button>
            <button onClick={ () => setCount(0)}>Reset</button>
        </div>
    );
}
function Counter() {
    const [count, setCount] = useState(0);
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={ () => setCount(count + 1)}>+</button>
            <button onClick={ () => setCount(count - 1)}>-</button>
            <button onClick={ () => setCount(0)}>Reset</button>
        </div>
    );
}

