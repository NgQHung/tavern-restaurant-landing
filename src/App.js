import "./App.css";
import Header from "./components/Layouts/Header";
import About from "./components/Pages/About";
import Main from "./components/Pages/Main";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <About />
        </div>
    );
}

export default App;
