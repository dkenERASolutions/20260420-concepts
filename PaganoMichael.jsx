// ============================================================
// ERA ACADEMY — React Concepts Repetition File
// Student: [Pagano] [Michael]
// GitHub: [paganomichael12-blip]
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
    return <h1 className="text-xl text-purple-500">Hey there!</h1>
}
function Greeting4() {
    return <h1 className="text-lg text-yellow-550">Nice to see you again!</h1>
}
function Greeting5() {
    return <h1 className="text-2xl text-brown-400">Welcome back, friend!</h1>
}
function Greeting6() {
    return <h1 className="text-3xl text-green-450">Great to have you here!</h1>
}
function Greeting7() {
    return <h1 className="text-xl text-red-530">It's great to see you!</h1>
}

// Concept 1: Functional Component + JSX return
function MyComponent() {
    return(
        <div className="container">
            <h1>My Components</h1>
            <p>This is a paragraph.</p>
        </div>
    );
}
function MyComponent() {
    return(
        <div className="container">
            <h1>My Components</h1>
            <p>This is a paragraph.</p>
        </div>
    );
}
function MyComponent() {
    return(
        <div className="container">
            <h1>My Components</h1>
            <p>This is a paragraph.</p>
        </div>
    );
}
function MyComponent() {
    return(
        <div className="container">
            <h1>My Components</h1>
            <p>This is a paragraph.</p>
        </div>
    );
}
function MyComponent() {
    return(
        <div className="container">
            <h1>My Components</h1>
            <p>This is a paragraph.</p>
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
import Header from "./ui/components/Header";

export default function Header() {
    return(
        <header className="navbar">Site Header</header>
    );
}

import Header from "./ui/components/Header";

export default function Header() {
    return(
        <header className="navbar">Site Header</header>
    );
}

import Header from "./ui/components/Header";

export default function Header() {
    return(
        <header className="navbar">Site Header</header>
    );
}

import Header from "./ui/components/Header";

export default function Header() {
    return(
        <header className="navbar">Site Header</header>
    );
}

import Header from "./ui/components/Header";

export default function Header() {
    return(
        <header className="navbar">Site Header</header>
    );
}

import Header from "./ui/components/Header";

// Concept 3: JSX with Embedded JavaScript
function PriceTag() {
    const price = 18.99
    const label = "Ethiopian Harrar"
    
    return(
        <div>
            <h2>{label}</h2>
            <p>{price.toFixed}</p>
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
            <p>{price.toFixed}</p>
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
            <p>{price.toFixed}</p>
            <p>{price > 15 ? "Premium" : "Standard"}</p>
        </div>
    );
}

function PriceTag() {
    const price = 18.99
    const label = "ethiopian Harrar"
    
    return(
        <div>
            <h2>{label}</h2>
            <p>{price.toFixed}</p>
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
            <p>{price.toFixed}</p>
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
            <p>{price.toFixed}</p>
            <p>{price > 15 ? "Premium" : "Standard"}</p>
        </div>
    );
}

// Concept 4: useState - Counter Pattern
function Counter() {
    const [count, setCount] = useState(0);
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={ () => setCount(count + 1)}>+</button>
            <button onClick={ () => setCount(count - 1)}>-</button>
            <button onClick={ () =>setCount(0)}>Reset</button>
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
            <button onClick={ ()=> setCount(count + 1)}>+</button>
            <button onClick={ ()=> setCount(count - 1)}>-</button>
            <button onClick={ ()=> setCount(0)}>Reset</button>
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

// useContext - Sharing data across components
// Step 1: create a context ( a "channel" any component can tune into)
const ThemeContext = createContext("light");

// Step 2: A top level Provider hans a value to everyone underneath
function App() {
    const [theme, setTheme] = useState("light");
    return(
        <ThemeContext.Provider value={theme}>
            <button 
            onClick={() => setTheme( t => t === "light" ? "dark" : "light")}
            > 
            Toggle Theme
            </button>
            <Page /> 
        </ThemeContext.Provider>
    );
}

function Page() {
    return(
        <Card />
    );
}

function Card() {
    const theme = useContext(ThemeContext);
    return(
        <div className={`card card-${theme}`}>
         Theme is: {theme}
        </div>
    );
}

// useContext - Sharing data across components
// Step 1: create a context ( a "channel" any component can tune into)
const ThemeContext = createContext("light");

// Step 2: A top level Provider hans a value to everyone underneath
function App() { 
    const [theme, setTheme] = useState("light");
    return(
        <ThemeContext.Provider value={theme}>
            <button
            onClick={() => setTheme( t => t === "light" ? "dark" : "light")}
            >
                Toggle Theme
            </button>
        </ThemeContext.Provider>
    );
}

function Page() {
    return(
        <Card />
    );
}

function Card() {
    const theme = useContext(ThemeContext);
    return(
        <div className={`card card-${theme}`}>
            Theme is: {theme}
        </div>
    );
}


// useContext - Sharing data across components
// Step 1: create a context ( a "channel" any component can tune into)
const ThemeContext = createContext("light");

// Step 2: A top level Provider hans a value to everyone underneath
function App() { 
    const [theme, setTheme] = useState("light");
    return(
        <ThemeContext.Provider value={theme}>
            <button
            onClick={() => setTheme( t => t === "light" ? "dark" : "light")}
            >
                Toggle Theme
            </button>
        </ThemeContext.Provider>
    );
}

function Page() {
    return(
        <Card />
    );
}

function Card() {
    const theme = useContext(ThemeContext);
    return(
        <div className={`card card-${theme}`}>
            Theme is: {theme}
        </div>
    );
}

// useReducer : the reducer takes the current state + an "action" and returns the next state

function cartRetucer ( state, action ) {
    switch (action.type) {
        case "add":
            return [...state, action.item];
        case "remove":
            return state.filter(item => item.id !== action.id);
        case "clear":
            return [];
        default:
            return state;
        }
}

function Cart() {
    const [cart, dispatch] = useReducer(cartReducer, []);
        dispatch({ type: "add", item: { id: Date.now(), name: "Latte" } });
    
    return(
        <div>
            <button onClick={addLatte} >Add Latte</button>
            <button onClick={() => dispatch({ type: "clear" })}>Clear </button>
            <ul>
                {cart.map(item => (
                    <li
                        key={i.id}
                        >
                            {i.name}
                        <button onClick={() => dispatch({ type: "remove", id: item.id })}>X</button>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

// useReducer : the reducer takes the current state + an "action" and returns the next state

function cartRetucer ( state, action ) {
    switch (action.type) {
        case "add":
            return [...state, action.item];
        case "remove":
            return state.filter(item => item.id !== action.id);
        case "clear":
            return [];
        default:
            return state;
        }
}

function Cart() {
    const [cart, dispatch] = useReducer(cartReducer, []);
        dispatch({ type: "add", item: { id: Date.now(), name: "Latte" } });
    
    return(
        <div>
            <button onClick={addLatte} >Add Latte</button>
            <button onClick={() => dispatch({ type: "clear" })}>Clear </button>
            <ul>
                {cart.map(item => (
                    <li
                        key={i.id}
                        >
                            {i.name}
                        <button onClick={() => dispatch({ type: "remove", id: item.id })}>X</button>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}


// useMemo - Catching an expensive calculation 
function ProductFiler( { products } ){
    const [search, setSearch] = useState("");
    const [color, setColor] = useState("blue");
    
    const filtered = useMemo(() => {
        console.log("Filtering products...");
        return products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }, [products, search]);
    
    
    return(
        <div>
            <input
                value={search}
                onChange={ (e) => setSearch(e.target.value)}
                placeholder="Search Products"
            />
            <input 
                value={color}
                onChange={ (e) => setColor(e.target.value)}
                placeholder="Favorite color (does NOT re-filter)"
            
            />
            <ul>
                {filtered.map(p => <li key={p.id}>{p.name}</li>)}
            </ul>
            
        </div>
    );
}

// useMemo - Catching an expensive calculation 
function ProductFiler( { products } ){
    const [search, setSearch] = useState("");
    const [color, setColor] = useState("blue");
    
    const filtered = useMemo(() => {
        console.log("Filtering products...");
        return products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }, [products, search]);
    
    
    return(
        <div>
            <input
                value={search}
                onChange={ (e) => setSearch(e.target.value)}
                placeholder="Search Products"
            />
            <input 
                value={color}
                onChange={ (e) => setColor(e.target.value)}
                placeholder="Favorite color (does NOT re-filter)"
            
            />
            <ul>
                {filtered.map(p => <li key={p.id}>{p.name}</li>)}
            </ul>
            
        </div>
    );
}

// Custom Hook - useToggle 
function useToggle(initial = false) { 
    cost [ onabort, setOn] = useState(inital);   
    const toggle = () => setOn(prev => !prev);    
    return [on, toggle];
}

function Modal() {
    const [isOpen, toggleOpen] = useToggle();
    
    return(
        <div>
            <button onClick={toggleOpen}> {isOpen ? "Close" : "Open"} modal </button>
            {isOpen && <div className="modal"> I am a modal </div>}
        </div>
    );
}

// custom hook - useLocalStorage (this is a state that survives a refresh)
function useLocalStorage(key, defaultValue)
    const [value, setValue] = useState( () => {
        const stored = localStorage.getItem(key);
        return stored !==null ? JSON.parse(stored) : defaultValue;
    });
    
    useEffect(() => {
        localStorage.setItem(key, JASON.stringify(value));
    }, [key, value]);
    
    function Settings() {
        const [username, setUsername] = useLovalStorage("username", "");
        return(
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Type your name - then refresh the page!"
                />
        )
    }
    
    // custom hoot - useFetch (reusable data fetching)
    function useFetch(url) {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(null);
        const [error, setError] = useState(null);
        
        useEffect(() => {
            setLoading(true);
            fetch(url)
            .thenm( res => res.jason() )
            .then( jason => { setData(jason); setLoading(false)})
            .catch( err => { setError(err); setLoading(false)})
        })
        return { data, loading, error};
    }
    
    function CoffeeMenu() {
        const {data, loading, error} = useFetch("/api.coffees");
        
        if (loading) return <p>Loading</p>
        if (error) return <p>Something went wrong</p>
        
        return <ul>{data.map(c => <li key={c.id}> {c.name} </li>)} </ul>
    }