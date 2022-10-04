import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Clock from "./components/Clock"
import LoginControl from "./components/LoginControl";
import Calculator from "./tempcalc/Calculator";

function App() {
    return (
        <div>
            <HelloWorld />
            <Clock />
            <LoginControl />
            <Calculator />
        </div>
    );
}

export default App;
