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

// UseContext - Sharing data across components
// Step 1: create a context (a "channel" any component can tune into)
const ThemeContext = createContext("light");

// Step 2: A top level provider hands a value to everyone underneath
function App() {
    const [theme, setTheme] = useState("light");
    
    
    return(
        <ThemeContext.Provider value={theme}>
            <button
                onClick={() => setTheme( t => t === "light" ? "dark" : "light")}>
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
    const theme = useContext (ThemeContext);
    
    return(
        <div className={`card card-${theme}`}>
            Theme is: {theme}
        </div>
    );
}

function App () {
    const [theme, setTheme] = useState("light");
    
    return(
        <ThemeContext.Provider value={theme}>
            <button onClick={() => setTheme(t => t === "light" ? "dark" : "light")}>
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
    const theme = useContext (ThemeContext);
    
    return(
        <div className={`card card-${theme}`}>
            Theme is: {theme}
        </div>
    );
} 

function App() {
    const [theme, setTheme] = useState("light");
    
    return(
        <ThemeContext.Provider value={theme}>
            <button onClick={() => setTheme(t => t === "light" ? "dark" : "light")}>
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
        <div ClassNam={`card card-${theme}`}>
            Theme is: {theme}
        </div>
    );
}

// useReducer: the reducer takes the current state + an "action" and returns the next state

function cartReducer(state, action) {
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
        dispatch({type: "add", item: {id: Date.now(), name: "Latte"}}) 
    return(
        <div>
            <button onClick={addLatte}>Add Latte</button>
            <button onClick={() => dispatch({ type: "clear"})}>Clear Cart</button>
            <ul>
                {cart.map(i => (
                    <li key={i.id}
                    >
                    {i.name}
                    <button onClick={() => dispatch({ type: "remove", id: i.id })}>
                        X
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
}

function cardReducer(state, action) {
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
        dispatch({ type: "add", item: { id: Date.now(), name: "Latte"}})
    return(
        <div>
            <button onClick={addLatte}>Add Latte</button>
            <button onClick={() => dispatch({type: "clear"})}>Clear Cart</button>
            <ul>
                {cart.map(i => (
                    <li key={i.id}
                    >
                        {i.name}
                        <button onClick={() => dispatch({ type: "remove", id: i.id})}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
 }
 
// useMemo - Caching an expensive calculation
function ProductFilter({products}) {
    const [search, setSearch] = useState("");
    const [color,SetColor] = useState("blue");     
    
    const filtered = useMemo(() => {
        console.log("Filtering products...");
        return products.filter( p => p.name.toLowerCase().includes(search.toLocaleLowerCase()))
    }, [products, search]);
    return(
        <div>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Prodcuts"
            />
            <input
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="Favorite color (does NOT re-filter)"
            />
            <ul>
                {filtered.map( p => <li key={p.id}>{p.name}</li>)}
            </ul>
            
        </div>
        
    );
}

function ProductFilter({products}) {
    const [search, setSearch] = useState("");
    const [color,setColor] = useState("blue");
    
    const filtered = useMemo(() => {
        console.log("Filtering products...");
        return products.filter( p => p.name.toLowerCase().includes(search.toLocaleLowerCase()))
    }, [products, search]);
    
    return(
        <div>
            <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Products"
            />
            <input 
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="Favorite color (does Not re-filter)"
            />
            <ul>
                {filtered.map( p => <li key={p.id}>{p.name}</li>)}
            </ul>
        </div>
    );
}

// Custom Hook - useToggle
function useToggle(initial = false) {    
    const [on, setOn] = useState(initial);
    const toggle = () => setOn(prev => !prev);
    
    return [on, toggle];
}

function Modal() {
    const [isOpen, toggleOpen] = useToggle(false);
    
    return(
        <div>
            <button onClick={toggleOpen}>
                {isOpen ? "Close" : "Open"} modal
            </button>
                {isOpen&& <div className="modal">I am a modal</div>}
        </div>
    );
}

// Custom hook - useLocalStorage (this is a state that survives a refresh)
function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored !== null ? JSON.parse(stored) : defaultValue;
    });
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    },[key, value]);
    return [value, setValue];
}

function Settings() {
    const [username, setUsername] = useLocalStorage("username", "")
    return(
        <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Type your name - then refresh the page!"
         />
    );
}
// Custom hook - useFetch (reusable data fetching)
function useFetch (url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setLoading(true);
        fetch(url)
        .then(res => res.json())
        .then(json => {setData(json); setLoading(false)})
        .catch(err => {setError(err); setLoading(false)})
    })  
    return {data, loading, error};
}   

function CoffeeMenu() {
    const {data, loading, error} = useFetch("/api/coffees");
    
    if (loading) return <p>Loading</p>
    if (error) return <p>Something went wrong</p>
    
    return <ul>{data.map(c => <li key={c.id}>{c.name}</li>)}</ul>
}