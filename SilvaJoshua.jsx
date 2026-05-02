// ============================================================
// ERA ACADEMY — React Concepts Repetition File
// Student: [Silva] [Joshua]
// GitHub: [joshuasilvazero-source]
// ============================================================
// INSTRUCTIONS:
// Write each concept block 5 times.
// Vary the variable names, values, or logic slightly each time.
// This builds real muscle memory. Do NOT copy-paste.
// Commit and push after every writing session.
// ============================================================
import {useState, useEffect, useRef} from "react";

function Greeting1() {
    return <h1 className="text-2x1 font-bold">
        Hello from Component 1
    </h1>
}

function Greeting2() {
    return <h1 className="text-4x1 font-bold">
        Hello from Component 2
    </h1>
}

function Greeting3() {
    return <h1 className="text-x1 text-blue-600">
        Welcome back, learner
    </h1>
}

function Greeting4() {
    return <h1 className="text-x1 text-blue-600">
        Welcome back, learner
    </h1>
}

function Greeting5() {
    return <h1 className="text-x1 text-blue-600">
        Welcome back, learner
    </h1>
}
// Concept 1: Functional Component + JSX Return
function MyComponent() {
    return(
        <div className="container">
            <h1>My Compoonent</h1>
            <p>This is a paragraph</p>
        </div>
    );
}

function MyComponent() {
    return(
        <div className="container">
            <h1>My Component</h1>
            <p>This is a paragraph.</p>
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
            <p>This is a paragraph.</p>
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
import Header from "./components/Header";

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

// In the app.jsx
import Header from "./components/Header"

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

// In the app.jsx
import Header from "./components/Header"

export default function Header() {
    return(
        <header className="navbar">Site Header</header>
    );
}

// Concept 3: Jsx with Embedded JavaScript
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
            <p>{price > 5 ? "Premium" : "Standard"}</p>
        </div>
    );
}

function PriceTag() {
    const price = 18.99
    const label = "Ethiopian Harrar"
    return (
        <div>
        <h2>{label}</h2>
        <p>${price.toFixed}</p>
        <p>{price > 15 ? "Premium" :"Standard" }</p>
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

// Concept 4: useState --- Counter Pattern
function Counter() {
    const [count, setCount] = useState(0);
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button oncClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Resent</button>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Resent</button>
        </div>
    );
}