import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Clock from "./components/Clock"
import LoginControl from "./components/LoginControl";

function App() {
    return (
        <div>
            <HelloWorld />
            <Clock />
            <LoginControl />
        </div>
    );
}

export default App;
