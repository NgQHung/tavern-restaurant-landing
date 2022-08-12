import "./App.css";
import Main from "./components/Pages/Main";
import Cart from "./components/UI/Cart";
import { useSelector } from "react-redux/es/exports";
import { Route, Routes } from "react-router-dom";
// import { Switch } from "react-router-dom";

function App() {
    const isSignupOpen = useSelector((state) => state.actionsSlice.isSignupOpen);
    const isLoginOpen = useSelector((state) => state.actionsSlice.isLoginOpen);
    const cartContent = useSelector((state) => state.actionsSlice.cartContent);
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Cart />} />
                <Route path="/signup" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
