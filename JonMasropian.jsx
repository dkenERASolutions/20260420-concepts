// ============================================================
// ERA ACADEMY — React Concepts Repetition File
// Student: [Masropian] [Jon]
// GitHub: [jonmasropian]
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
    return <h1 className="text-xl text-blue-600">Welcome back, learner!</h1>
}
function Greeting4() {
    return <h1 className="text-xl text-blue-600">Welcome back, learner?</h1>
}
function Greeting5() {
    return <h1 className="text-xl text-blue-600">Welcome back, learner!</h1>
}


// Concept 1: Functional Component + JSX Return
function MyComponent() {
    return (
        <div className="container">
            <h1>My component</h1>
            <p>This is a paragraph.</p>
        </div>
    );
}

function MyComponent() {
    return (
        <div className="container">
            <h1>My component</h1>
            <p>This is a paragraph.</p>
        </div>
    );
}

function MyCompnent() {
    return (
        <div className="container">
            <h1>My component</h1>
            <p>This is a paragraph.</p>
        </div>
    );
}

function MyCompnent() {
    return (
        <div className="container">
            <h1>My component</h1>
            <p>This is a paragraph.</p>
        </div>
    );
} 

function MyCompnent() {
    return (
        <div className="container">
            <h1>My compnent</h1>
            <p>This is a paragraph.</p>
        </div>
    );
}

// Concept 2: Export Default + Import in App.jsx
export default function Header() {
    return (
        <header className="navbar">Site Header</header>
    );
}

// In the App.jsx
import Header from "./components/Header";

export default function Header() {
    return (
        <header className="navbar">Site Header</header>
    );
}

import Header from "./components/Header";


export default function Header() {
    return (
        <header className="navbar">Site Header</header>
    );
}

import Header from "./components/Header";


export default function Header() {
    return (
        <header className="navbar">Site Header</header>
    );
}

import Header from "./components/Header";


export default function Header() {
    return (
        <header className="navbar">Site Header</header>
    );
}

import Header from "./components/Header";


export default function Header() {
    return (
        <header className="navbar">Site Header</header>
    );
}

import Header from "./components/Header";

// Concept 3: JSX with Embedded JavaScript
function PriceTag() {
    const price = 18.99
    const label = "Ethiopian Harrar"
    
    return (
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
    
    return (
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
    
    return (
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
    
    return (
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
    
    return (
        <div>
            <h2>{label}</h2>
            <p>${price.toFixed}</p>
            <p>{price > 15 ? "Premium" : "Standard"}</p>
        </div>
    );
}

// Concept 4: useState - Counter Pattern
function Counter() {
    const [count, setCount] = useState(0);
    
    return (
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
    
    return (
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
    
    return (
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
    
    return (
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
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={ () => setCount(count + 1)}>+</button>
            <button onClick={ () => setCount(count - 1)}>-</button>
            <button onClick={ () => setCount(0)}>Reset</button>
        </div>
    );
}

// useContext - Sharing data across components
// Step 1: Create a context ( a "channel" any component can tune into)

const ThemeContext = createContext("light");

//Step 2: A top level provider hands a value to everyone underneath
function App() {
    const [theme, setTheme] = useState("light");
    
    return(
        <ThemeContext.Provider value={theme}>
            <button
            onClick={ () => setTheme( t => t === "light" ? "dark" : "light")}
            >
                Toggle Theme
            </button>
            <Page />
        </ThemeContext.Provider>
    );
}

function Page() {
    return (
        <Card />
    );
}

function Card() {
    const theme = useContext(ThemeContext);
    return (
        <div className={`card card-${theme}`}>
            Theme is: {theme}
        </div>
    );
}



const ThemeContext = createContext("light");

function App() {
    const [theme, setTheme] = useState("light");
    return(
        <ThemeContext.Provider vlaue={theme}>
            <button
            onClick={ () => setTheme( t => t === "light" ? "dark" : "light")}
            >
                Toggle Theme
            </button>
            <Page />
        </ThemeContext.Provider>
    );
}

function Page() {
    return (
        <Card />
    );
}

function Card() {
    const theme = useContext(ThemeContext);
    return (
        <div className={`card card-${theme}`}>
            Theme is: {theme}
        </div>
    );
}



const ThemeContext = createContext("light");

function App() {
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={theme}>
            <button
            onClick={ () => setTheme( t => t === "light" ? "dark" : "light")}
            >
                Toggle Theme
            </button>
            <Page />
        </ThemeContext.Provider>
    );
}

function Page() {
    return (
        <Card />
    );
}

function Card() {
    const theme = useContext(ThemeContext);
    return (
        <div className={`card card-${theme}`}>
            Theme is: {theme}
        </div>
    );
}

// useReducer: the reducer takes the current state + an "action" and returns the next state

function cartReducer( state, action ) {
    switch (action.type) {
        case "add":
            return [...state, action.item];
        case "remove":
            return state.filter(item => item.id !== action.id)
        case "clear":
            return [];
        default:
            return state;
    }
}

function Cart() {
    const [cart, dispatch] = useReducer(cartReducer, []);
    
    const addLatte = () =>
        dispatch({ type: "add", item: { id: Date.now(), name: "Latte" }})
    
    return (
        <div>
            <button onClick={addLatte}>Add Latte</button>
            <button onClick={() => dispatch({ type: "clear" })}>Clear</button>
            <ul>
                {cart.map( i => (
                    <li key={i.id}>
                        {i.name}
                        <button onClick={() => dispatch({ type: "remove", id: i.id })}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}



function cartReducer( state, action ) {
    switch (action.type) {
        case "add":
            return [...state, action.item];
        case "remove":
            return state.filter(item => item.id !== action.id)
        case "clear":
            return [];
        default:
            return state;
    }
}

function Cart() {
    const [cart, dispatch] = useReducer(cartReducer, []);
    const addLatte = () =>
        dispatch({ type: "add", item: { id: Date.now(), name: "Latte" }})
    
    return (
        <div>
            <button onClick={addLatte}>Add Latte</button>
            <button onClick={() => dispatch({ type: "clear" })}>Clear</button>
            <ul>
                {cart.map( i => (
                    <li key={i.id}>
                        {i.name}
                        <button onClick={() => dispatch({ type: "remove", id: i.id })}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}