// ============================================================
// ERA ACADEMY — React Concepts Repetition File
// Student: [Aston] [Aaron]
// GitHub: [AstonAaron]
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
return <h1 className='text-xl text-blue-600'>Welcome back, learner!</h1>;
}

function Greeting4() {
return <h1 className='text-xl text-blue-600'>Welcome back, learner!</h1>;
}

function Greeting5() {
return <h1 className='text-xl text-blue-600'>Welcome back, learner!</h1>;
}
// Concept 1: Functional Component + JSX Return

function MyComponent() {
    return(
      <div className="container">
        <h1>My component</h1>
        <p>This is a paragraph.</p>
      </div>  
    );
}

function MyComponent() {
    return(
      <div className="container">
        <h1>My component</h1>
        <p>This is a paragraph.</p>
      </div>  
    );
}

function MyComponent() {
    return(
      <div className="container">
        <h1>My component</h1>   
        <p>This is a paragraph.</p>
        </div>
    );
}

function MyComponent() {
    return(
      <div className="container">
        <h1>My component</h1>
        <p>This is a paragraph.</p>
      </div>  
    );
}

function MyComponent() {
    return(
      <div className="container">
        <h1>My component</h1>
        <p>This is a paragraph.</p>
      </div>  
    );
}

//  Concept 2: Export Default + Import in App.jsx
export default function Header() {
    return(
        <header className="navbar"> 
        Site Header      
        </header>
    );
}

export default function Header() {
    return(
        <header className="navbar"> 
        Site Header      
        </header>
    );
}

export default function Header() {
    return(
        <header className="navbar"> 
        Site Header      
        </header>
    );
}

export default function Header() {
    return(
        <header className="navbar"> 
        Site Header      
        </header>
    );
}

export default function Header() {
    return(
        <header className="navbar"> 
        Site Header      
        </header>
    );
}

// In the App.jsx
import Header from "./components/Header";

export default function Header() {
    return(
        <header className="navbar"> 
        Site Header
        </header>
    );
}


// In the App.jsx
import Header from "./components/Header";

export default function Header() {
    return(
        <header className="navbar"> 
        Site Header
        </header>
    );
}

// In the App.jsx
import Header from "./components/Header";

export default function Header() {
    return(
        <header className="navbar"> 
        Site Header
        </header>
    );
}

// In the App.jsx
import Header from "./components/Header";

export default function Header() {
    return(
        <header className="navbar">
             Site Header
        </header>
    );
}

// In the App.jsx
import Header from "./components/Header";

export default function Header() {
    return(
        <header className="navbar">
             Site Header
        </header>
    );
}

// Concept 3: JSX with Embedded JavaScript

function PriceTag() {
    const price = 18.99;
    const label = "Ethiopian Harrar"
    
    return(
        <div>
            <h2>{label}</h2>
            <p>${price.toFixed}</p>
            <p>{price > 15 ? "Premium" : "Standard" } </p>
        </div>
    );
}

function PriceTag() {
    const price = 18.99;
    const label = "Ethiopian Harrar"
    
    return(
        <div>
            <h2>{label}</h2>
            <p>${price.toFixed}</p>
            <p>{price > 15 ? "Premium" : "Standard" } </p>
        </div>
    );
}

function PriceTag() {
    const price = 18.99;
    const label = "Ethiopian Harrar"
    
    return(
        <div>
            <h2>{label}</h2>
            <p>${price.toFixed}</p>
            <p>{price > 15 ? "Premium" : "Standard" } </p>
        </div>
    );
}

function PriceTag() {
    const price = 18.99;
    const label = "Ethiopian Harrar"
    
    return(
        <div>
            <h2>{label}</h2>
            <p>${price.toFixed}</p>
            <p>{price > 15 ? "Premium" : "Standard" } </p>
        </div>
    );
}

function PriceTag() {
    const price = 18.99;
    const label = "Ethiopian Harrar"
    
    return(
        <div>
            <h2>{label}</h2>
            <p>${price.toFixed}</p>
            <p>{price > 15 ? "Premium" : "Standard" } </p>
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
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={() => setCount(0)}>Reset</button>
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
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={() => setCount(0)}>Reset</button>
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
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={() => setCount(0)}>Reset</button>
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
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={() => setCount(0)}>Reset</button>
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
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={() => setCount(0)}>Reset</button>
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